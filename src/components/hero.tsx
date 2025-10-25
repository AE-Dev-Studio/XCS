"use client";

import { useRef, useEffect, useState } from "react";
import CustomButton from "@/components/custombutton";
import BookingForm from "./bookingform";

export default function HeroSection() {
  const formRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleBookNow = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden pt-20 lg:pt-10">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url(/assets/herobackground.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="w-full px-6 py-20 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
            {/* Left Side - Hero Text */}
            <div
              className={`flex flex-col justify-center transition-all duration-1000 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-12 opacity-0"
              }`}
            >
              <div className="max-w-5xl space-y-6 mt-10 md:mt-0">
                <h1 className="font-sans text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-5xl">
                  Premium Chauffeur Service in Manchester
                </h1>
                <p className="text-lg text-gray-200 leading-relaxed max-w-lg">
                  Ride in style with our premium chauffeur services! Our fleet
                  of luxury vehicles and well-groomed chauffeur promise you an
                  experience like never before. we ensure you arrive on time and
                  with an eye-catching grace. You can contact us for a luxurious
                  travel experience.
                </p>
                <div className="pt-4">
                  <CustomButton text="Contact us" />
                </div>
              </div>
            </div>

            <div className="relative h-screen">
              <div
                ref={formRef}
                className={` sm:absolute bottom-40 lg:right-5 flex z-20 lg:items-center lg:justify-center transition-all duration-1000 delay-300 ${
                  isVisible
                    ? "translate-x-0 opacity-100"
                    : "translate-x-12 opacity-0"
                }`}
              >
                <div className="w-full max-w-md">
                  <BookingForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
