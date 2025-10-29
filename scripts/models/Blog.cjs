// scripts/models/Blog.cjs
// eslint-disable-next-line @typescript-eslint/no-require-imports
const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: String,
  slug: String,
  image: String,
  intro: String,
  fullBlog: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Blog", blogSchema);
