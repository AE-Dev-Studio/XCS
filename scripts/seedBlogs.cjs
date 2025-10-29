// // scripts/seedBlogs.ts
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import Blog from "../src/models/Blog";
// import { blogsData } from "./blogsdata";

// dotenv.config({ path: ".env.local" });

// const MONGODB_URI = process.env.MONGODB_URI as string;

// async function seedBlogs() {
//   try {
//     await mongoose.connect(MONGODB_URI, {
//       dbName: "xclusiveblogs",
//     });

//     console.log("✅ Connected to MongoDB");

//     // Clear old data if you want to re-seed
//     await Blog.deleteMany({});

//     // Insert all predefined blogs
//     await Blog.insertMany(blogsData);

//     console.log(`✅ Successfully seeded ${blogsData.length} blogs.`);
//     await mongoose.connection.close();
//     console.log("🔒 Connection closed.");
//   } catch (error) {
//     console.error("❌ Error seeding blogs:", error);
//     process.exit(1);
//   }
// }

// seedBlogs();

// scripts/seedBlogs.cjs
// eslint-disable-next-line @typescript-eslint/no-require-imports
const mongoose = require("mongoose");
// eslint-disable-next-line @typescript-eslint/no-require-imports
const dotenv = require("dotenv");
// eslint-disable-next-line @typescript-eslint/no-require-imports
const Blog = require("./models/Blog.cjs")
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { blogsData } = require("./blogsdata.cjs"); // also convert blogsData to CJS

dotenv.config({ path: ".env" });

const MONGODB_URI = process.env.MONGODB_URI;

async function seedBlogs() {
  try {
    await mongoose.connect(MONGODB_URI, { dbName: "xclusiveblogs" });
    console.log("✅ Connected to MongoDB");

    await Blog.deleteMany({});
    await Blog.insertMany(blogsData);

    console.log(`✅ Successfully seeded ${blogsData.length} blogs.`);
    await mongoose.connection.close();
    console.log("🔒 Connection closed.");
  } catch (error) {
    console.error("❌ Error seeding blogs:", error);
    process.exit(1);
  }
}

seedBlogs();
