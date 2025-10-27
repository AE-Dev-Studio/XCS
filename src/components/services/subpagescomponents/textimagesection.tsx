"use client";
import Image from "next/image";

interface Props {
  heading: string;
  paragraph: string;
  image: string;
  reverse?: boolean; // to flip image/text sides
}

const TextImageSection = ({ heading, paragraph, image, reverse = false }: Props) => {
  return (
    <section
      className={`w-full h-full bg-[#f6f6f6] py-16 px-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-10 ${
        reverse ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* Text Section */}
      <div className="flex flex-col gap-6">
        <h1 className="text-3xl md:text-4xl font-semibold text-black leading-snug">
          {heading}
        </h1>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          {paragraph}
        </p>
      </div>

      {/* Image Section */}
      <div className="flex justify-center max-h-[70vh]">
        <Image
          src={image}
          alt={heading}
          width={700}
          height={450}
          className="rounded-md shadow-md object-cover"
        />
      </div>
    </section>
  );
};

export default TextImageSection;
