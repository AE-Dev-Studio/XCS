import { NextResponse } from "next/server";
import {dbConnect} from "@/lib/dbConnect";
import LetsConnect from "@/models/Letsconnect";

import type { NextRequest } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail", // or host/port for other providers
  auth: {
    user: process.env.SMTP_USER,   // your-address@gmail.com
    pass: process.env.SMTP_PASS,   // app-password / OAuth2 token
  },
});
export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    const body = await req.json();
    const { name, phone, email, address, details } = body;

    if (!name || !phone || !email || !address) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const entry = await LetsConnect.create({ name, phone, email, address, details });
    await transporter.sendMail({
      from: `"Site Robot" <${process.env.SMTP_USER}>`, // sender
      to: process.env.NOTIFY_EMAIL,                    // your inbox
      subject: "New hero form submission",
      text: JSON.stringify({ name, phone, email, address, details }, null, 2),             // plain-text body
      // html: `<pre>${JSON.stringify(data, null, 2)}</pre>` // optional HTML
    });
    return NextResponse.json({ success: true, message: "Form submitted successfully", entry });
  } catch (error) {
    console.error("Error submitting Let's Connect form:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
