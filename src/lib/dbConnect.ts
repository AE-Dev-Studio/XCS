import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error("❌ Please define the MONGODB_URI environment variable inside .env.local");
}

let isConnected: boolean = false; // track connection state

export async function dbConnect(): Promise<void> {
  if (isConnected) {
    // ✅ Already connected
    return;
  }

  try {
    const db = await mongoose.connect(MONGODB_URI, {
      dbName: "xclusiveblogs",
    });

    isConnected = db.connections[0].readyState === 1;
    console.log("✅ MongoDB connected successfully");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    throw new Error("Failed to connect to MongoDB");
  }
}
