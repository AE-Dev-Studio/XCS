import { NextResponse } from "next/server";
import SelfDriveQuote from "@/models/selfdriveqoute";
import { dbConnect } from "@/lib/dbConnect";

export async function POST(req: Request) {
  try {
    await dbConnect();
    const body = await req.json();

    // map frontend field names to backend ones
    const formatted = {
      name: body.name,
      phone: body.phone,
      email: body.email,
      vehicle: body.vehicle,
      pickupDate: body.dateFrom,
      dropoffDate: body.dateTo,
      message: body.message,
    };

    const newQuote = await SelfDriveQuote.create(formatted);

    return NextResponse.json(
      { success: true, message: "Self-drive quote submitted", data: newQuote },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error saving self-drive quote:", error);
    return NextResponse.json(
      { success: false, message: "Failed to submit self-drive quote" },
      { status: 500 }
    );
  }
}
