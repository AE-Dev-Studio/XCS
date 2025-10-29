import React from "react";
import ReactMarkdown from "react-markdown";
import { dbConnect } from "@/lib/dbConnect";
import Blog from "@/models/Blog";
import Herobg from "@/components/herobg";
import Image from "next/image";

// Plugins
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { unified } from "unified";
import rehypeParse from 'rehype-parse';
import { selectAll } from 'hast-util-select';



type Props = {
    params: { slug: string };
};

// Helper to generate TOC from markdown headings
// function generateTOC(markdown: string) {
//     const lines = markdown.split("\n");
//     return lines
//         .filter((line) => line.startsWith("#"))
//         .map((line) => {
//             const level = line.match(/^#+/)![0].length;
//             const text = line.replace(/^#+\s*/, "");

//             // slugify like rehype-slug does
//             const id = text
//                 .toLowerCase()
//                 .replace(/[^\w\s-]/g, "") // remove special characters
//                 .replace(/\s+/g, "-");

//             return { level, text, id };
//         });
// }

function generateTOC(markdown: string) {
  const lines = markdown.split("\n");
  return lines
    .filter((line) => line.startsWith("#"))
    .map((line) => {
      const level = line.match(/^#+/)![0].length;
      let text = line.replace(/^#+\s*/, "");

      // remove <br> or <br/> tags from text
      text = text.replace(/<br\s*\/?>/gi, "").trim();

      // slugify like rehype-slug does
      const id = text
        .toLowerCase()
        .replace(/[^\w\s-]/g, "") // remove special characters
        .replace(/\s+/g, "-");

      return { level, text, id };
    });
}

// Metadata
export async function generateMetadata({ params }: Props) {
    const { slug } = await params;
    await dbConnect();
    const blog = await Blog.findOne({ slug });
    return {
        title: blog?.title || "Blog",
        description: blog?.intro || "",
    };
}

const BlogPage = async ({ params }: Props) => {
    const { slug } = await params;
    await dbConnect();

    const blog = await Blog.findOne({ slug });
    if (!blog) return <div>Blog not found</div>;

    const toc = generateTOC(blog.fullBlog);

    return (
        <>
            <Herobg text={blog.title} image={blog.image} />

            <div className="flex flex-col lg:flex-row gap-8 p-8 max-w-6xl mx-auto">
                {/* Main content */}
                <div className="flex-1 prose prose-slate text-sm">
                    {blog.image && (
                        <div className="relative h-64 w-full mb-6">
                            <Image
                                src={blog.image}
                                alt={blog.title}
                                fill
                                className="object-cover rounded-lg"
                            />
                        </div>
                    )}

                    <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        rehypePlugins={[rehypeRaw, rehypeSlug]}
                    >
                        {blog.fullBlog}
                    </ReactMarkdown>
                </div>

                {/* Table of contents */}
                <aside className="w-64 sticky top-20 h-fit hidden lg:block">
                    <h2 className="font-semibold mb-2">Contents</h2>
                    <ul className="space-y-1">
                        {toc.map((item, index) => (
                            <li
                                key={index}
                                className={`ml-${(item.level - 1) * 4}`}
                            >
                                <a
                                    href={`#${item.id}`}
                                    className="text-blue-600 hover:underline"
                                >
                                    {item.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </aside>
            </div>
        </>
    );
};

export default BlogPage;
