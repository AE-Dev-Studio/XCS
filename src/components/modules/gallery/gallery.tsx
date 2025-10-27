"use client";
import Image from "next/image";
import { useState } from "react";
import Lightbox from "./Lightbox";

const images = Array.from(
  { length: 12 },
  (_, i) => `/assets/Gallery/${i + 1}.jpg`
);

export default function Gallery() {
  const [index, setIndex] = useState<number | null>(null);

  return (
    <>
      {/* Grid */}
      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 bg-white ">
        {images.map((src, i) => (
          <div
            key={src}
            onClick={() => setIndex(i)}
            className="relative aspect-square cursor-pointer overflow-hidden rounded-none group"
          >
            <Image
              src={src}
              fill
              alt={`img-${i + 1}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {/* hover overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/80 transition-colors duration-300" />
          </div>
        ))}
      </section>

      {/* Light-box portal */}
      {index !== null && (
        <Lightbox
          images={images}
          startIndex={index}
          onClose={() => setIndex(null)}
        />
      )}
    </>
  );
}
