import mongoose, { Schema, Document, Model } from "mongoose";

export interface IBlog extends Document {
  title: string;
  image: string;
  intro: string;
  fullBlog: string;
  createdAt: Date;
}

const blogSchema: Schema<IBlog> = new Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  intro: { type: String, required: true },
  fullBlog: { type: String, required: true }, // Markdown string
  createdAt: { type: Date, default: Date.now },
});

const Blog: Model<IBlog> =
  mongoose.models.Blog || mongoose.model<IBlog>("Blog", blogSchema);

export default Blog;
