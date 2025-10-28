"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import CustomButton from "../../custombutton";
import Callnowcard from "../../aboutpagecomponents/callnowcard";

interface Props {
  heading: string;
  paragraph: string;
  image: string;
}

export default function Getaqoutesection({ heading, paragraph, image }: Props) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-white py-20 px-6 sm:px-10 lg:px-20 h-full"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div
            className={`flex items-center justify-center transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-12 opacity-0"
            }`}
          >
            <div className="relative w-full min-h-[60vh] rounded-none border-15 border-white overflow-hidden shadow-2xl">
              <Image
                src={image}
                alt="Luxury chauffeur vehicle"
                fill
                className="object-cover"
              />

              <Callnowcard />
            </div>
          </div>
          <div
            className={`flex flex-col justify-center transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-12 opacity-0"
            }`}
          >
            <div className="max-w-3xl space-y-6">
              {/* Heading with Gold Accent */}
              <div className="space-y-3">
                <h2 className="font-sans text-4xl font-extrabold text-black">
                  {heading}
                </h2>
              </div>
              {/* Body Text */}
              <div className="space-y-2 font-sans text-black ">
                <p>{paragraph}</p>
              </div>

              {/* Learn More Button */}
              <div className="pt-4">
                <CustomButton text="Get a Qoute" variant="black" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
