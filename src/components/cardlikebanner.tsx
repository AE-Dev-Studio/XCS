"use client";

import { useEffect, useState } from "react";
import CustomButton from "./custombutton";

interface Props {
  colorheading: string;
  plainheading: string;
  paragraph: string;
}

export default function CardLikeBanner({
  colorheading,
  plainheading,
  paragraph,
}: Props) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative w-full bg-cover bg-center bg-no-repeat overflow-hidden bg-black lg:pb-0 pb-3">
      {/* Centered Content */}
      <div
        className={` relative z-10 h-full flex lg:flex-row flex-col items-center justify-around text-center px-6 sm:px-10 transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex flex-col justify-center mt-4 gap-3">
          <div className="w-full text-center ">
            <h2 className="text-[#a89447]  font-sans tracking-wide text-2xl sm:text-5xl lg:text-3xl font-bold  max-w-4xl text-center lg:text-left ">
              {colorheading} <span className="text-white">{plainheading}</span>
            </h2>
           
          </div>

          <p className="text-gray-200 text-sm sm:text-lg  mb-8 text-center lg:text-left tracking-wide">
            {paragraph}
          </p>
        </div>
        <div>
          <CustomButton variant="white" text="Contact Us" />
        </div>
      </div>
    </div>
  );
}
