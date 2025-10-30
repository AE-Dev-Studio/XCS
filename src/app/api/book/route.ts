// app/api/book/route.ts (Next.js App Router)
import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/dbConnect";
import RealBooking from "@/models/realbooking";
import { bookingSchema, BookingInput } from "@/lib/bookingschema";

export async function POST(req: Request) {
  await dbConnect();
  const body = await req.json();

  const parse = bookingSchema.safeParse(body);
  if (!parse.success) {
    return NextResponse.json({ error: parse.error.format() }, { status: 400 });
  }
  const data = parse.data as BookingInput;

  const seq = generateSeq();
  const doc = new RealBooking({ ...data, seq, status: "new" });
  await doc.save();
  return NextResponse.json({ success: true, booking: doc }, { status: 201 });
}

export async function GET(req: Request) {
  await dbConnect();
  // list with simple pagination
  const url = new URL(req.url);
  const page = parseInt(url.searchParams.get("page") || "1");
  const limit = Math.min(100, parseInt(url.searchParams.get("limit") || "20"));
  const skip = (page - 1) * limit;

  const q: unknown = {};
  if (url.searchParams.get("pickupDate")) q.pickupDate = url.searchParams.get("pickupDate");

  const [bookings, count] = await Promise.all([
    RealBooking.find(q).sort({ createdAt: -1 }).skip(skip).limit(limit).lean(),
    RealBooking.countDocuments(q),
  ]);
  return NextResponse.json({ bookings, count, page, limit });
}

// helper
function generateSeq() {
  const d = new Date();
  const pad = (n:number) => String(n).padStart(2,"0");
  const y = d.getFullYear();
  const m = pad(d.getMonth()+1);
  const day = pad(d.getDate());
  const hh = pad(d.getHours());
  const mm = pad(d.getMinutes());
  const ss = pad(d.getSeconds());
  const rand = Math.floor(Math.random()*9000)+1000;
  return `XCS-${y}${m}${day}-${hh}${mm}${ss}-${rand}`;
}
