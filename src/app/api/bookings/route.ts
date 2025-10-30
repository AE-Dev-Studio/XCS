// src/app/api/heroform/route.ts
import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/dbConnect";
import HeroForm from "@/models/Heroform";

export async function POST(request: Request) {
  try {
    await dbConnect();
    const data = await request.json();

    const newSubmission = await HeroForm.create(data);
    return NextResponse.json({ success: true, data: newSubmission });
  } catch (error) {
    console.error("Error saving hero form:", error);
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
  }
}
