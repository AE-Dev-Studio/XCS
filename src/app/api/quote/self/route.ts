import { NextResponse } from "next/server";
import SelfDriveQuote from "@/models/selfdriveqoute";
import { dbConnect } from "@/lib/dbConnect";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail", // or host/port for other providers
  auth: {
    user: process.env.SMTP_USER,   // your-address@gmail.com
    pass: process.env.SMTP_PASS,   // app-password / OAuth2 token
  },
});
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
    await transporter.sendMail({
      from: `"Site Robot" <${process.env.SMTP_USER}>`, // sender
      to: process.env.NOTIFY_EMAIL,                    // your inbox
      subject: "New hero form submission",
      text: JSON.stringify(formatted, null, 2),             // plain-text body
      // html: `<pre>${JSON.stringify(data, null, 2)}</pre>` // optional HTML
    });

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
