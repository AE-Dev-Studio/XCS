import { NextResponse } from "next/server";
import WithDriverQuote from "@/models/withdriverqoute";
import {dbConnect} from "@/lib/dbConnect"; // or wherever your db connect function lives

export async function POST(req: Request) {
  try {
    await dbConnect();
    const body = await req.json();

    const newQuote = await WithDriverQuote.create(body);

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
