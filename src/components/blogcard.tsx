// src/components/BlogCard.tsx
import React from "react";
import Image from "next/image";

type BlogCardProps = {
  title: string;
  intro: string;
  image: string;
  slug: string;
};

const BlogCard: React.FC<BlogCardProps> = ({ title, intro, image, slug }) => {
  return (
    <a href={`/blog/${slug}`} className="block border rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48 w-full">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold mb-3 text-[#a89447]">{title}</h3>
        <p className="text-black font-light text-sm">{intro}</p>
      </div>
    </a>
  );
};

export default BlogCard;
