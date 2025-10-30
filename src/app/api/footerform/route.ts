import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/dbConnect";
import Callback from "@/models/Footerform";


export async function POST(req: Request) {
  try {
    await dbConnect();
    const { name, phone } = await req.json();

    if (!name || !phone) {
      return NextResponse.json(
        { success: false, message: "Name and phone are required" },
        { status: 400 }
      );
    }

    const newCallback = await Callback.create({ name, phone });
    return NextResponse.json({ success: true, data: newCallback });
  } catch (error) {
    console.error("Callback form error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
