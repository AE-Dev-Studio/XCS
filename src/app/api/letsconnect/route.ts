import { NextResponse } from "next/server";
import {dbConnect} from "@/lib/dbConnect";
import LetsConnect from "@/models/Letsconnect";

import type { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    const body = await req.json();
    const { name, phone, email, address, details } = body;

    if (!name || !phone || !email || !address) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const entry = await LetsConnect.create({ name, phone, email, address, details });
    return NextResponse.json({ success: true, message: "Form submitted successfully", entry });
  } catch (error) {
    console.error("Error submitting Let's Connect form:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
