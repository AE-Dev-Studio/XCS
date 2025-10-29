// src/app/blog/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import Herobg from "@/components/herobg";
import BlogCard from "@/components/blogcard";

type Blog = {
  _id: string;
  title: string;
  slug: string;
  intro: string;
  image: string;
};

const BlogPage: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const res = await fetch("/api/blogs");
        const data = await res.json();
        setBlogs(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchBlogs();
  }, []);

  return (
    <div>
      <Herobg text="Our Blog" image="/assets/aboutimage.jpg" />

      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {loading ? (
          <p>Loading blogs...</p>
        ) : (
          blogs.map((blog) => (
            <BlogCard
              key={blog._id}
              title={blog.title}
              intro={blog.intro}
              image={blog.image}
              slug={blog.slug}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default BlogPage;
