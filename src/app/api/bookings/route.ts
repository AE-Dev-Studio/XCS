// puld ljpy ooct rkgp
import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/dbConnect";
import HeroForm from "@/models/Heroform";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail", // or host/port for other providers
  auth: {
    user: process.env.SMTP_USER,   // your-address@gmail.com
    pass: process.env.SMTP_PASS,   // app-password / OAuth2 token
  },
});

export async function POST(request: Request) {
  try {
    await dbConnect();
    const data = await request.json();

    const newSubmission = await HeroForm.create(data);
    await transporter.sendMail({
      from: `"Site Robot" <${process.env.SMTP_USER}>`, // sender
      to: process.env.NOTIFY_EMAIL,                    // your inbox
      subject: "New hero form submission",
      text: JSON.stringify(data, null, 2),             // plain-text body
      // html: `<pre>${JSON.stringify(data, null, 2)}</pre>` // optional HTML
    });
    return NextResponse.json({ success: true, data: newSubmission });
  } catch (error) {
    console.error("Error saving hero form:", error);
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
  }
}
