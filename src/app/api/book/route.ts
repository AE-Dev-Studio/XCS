// app/api/book/route.ts (Next.js App Router)
import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/dbConnect";
import RealBooking from "@/models/realbooking";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(req: Request) {
  await dbConnect();
  const body = await req.json();
  console.log(body);

  // ✅  FIX : define data before using it
  const data = body; // or:  const data = bookingSchema.parse(body);

  const seq = generateSeq();
  const doc = await new RealBooking({ ...data, seq, status: "new" }).save();

  // send mail (swallow error so booking still succeeds)
  try {
    await transporter.sendMail({
      from: `"Site Robot" <${process.env.SMTP_USER}>`,
      to: process.env.NOTIFY_EMAIL,
      subject: `New booking ${seq}`,
      text: JSON.stringify(data, null, 2),
      html: `<pre>${JSON.stringify(data, null, 2)}</pre>`,
    });
  } catch (mailErr) {
    console.warn("Mail failed:", mailErr);
  }

  return NextResponse.json({ success: true, booking: doc }, { status: 201 });
}

export async function GET(req: Request) {
  await dbConnect();
  const url = new URL(req.url);
  const page = parseInt(url.searchParams.get("page") || "1");
  const limit = Math.min(100, parseInt(url.searchParams.get("limit") || "20"));
  const skip = (page - 1) * limit;

  const q: any = {};
  if (url.searchParams.get("pickupDate"))
    q.pickupDate = url.searchParams.get("pickupDate");

  const [bookings, count] = await Promise.all([
    RealBooking.find(q).sort({ createdAt: -1 }).skip(skip).limit(limit).lean(),
    RealBooking.countDocuments(q),
  ]);
  return NextResponse.json({ bookings, count, page, limit });
}

function generateSeq() {
  const d = new Date();
  const pad = (n: number) => String(n).padStart(2, "0");
  return `XCS-${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(
    d.getDate()
  )}-${pad(d.getHours())}${pad(d.getMinutes())}${pad(
    d.getSeconds()
  )}-${Math.floor(Math.random() * 9000) + 1000}`;
}