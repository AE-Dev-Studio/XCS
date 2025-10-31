import { NextResponse } from "next/server";
import WithDriverQuote from "@/models/withdriverqoute";
import {dbConnect} from "@/lib/dbConnect"; // or wherever your db connect function lives
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

    const newQuote = await WithDriverQuote.create(body);
    await transporter.sendMail({
      from: `"Site Robot" <${process.env.SMTP_USER}>`, // sender
      to: process.env.NOTIFY_EMAIL,                    // your inbox
      subject: "New hero form submission",
      text: JSON.stringify(body, null, 2),             // plain-text body
      // html: `<pre>${JSON.stringify(data, null, 2)}</pre>` // optional HTML
    });

    return NextResponse.json(
      { success: true, message: "Driver quote submitted", data: newQuote },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error saving driver quote:", error);
    return NextResponse.json(
      { success: false, message: "Failed to submit driver quote" },
      { status: 500 }
    );
  }
}
