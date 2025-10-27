"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import CustomButton from "./custombutton";

export default function AboutSection() {
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
    <section ref={sectionRef} className="bg-white py-20 px-6 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div
            className={`flex items-center justify-center transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-12 opacity-0"
            }`}
          >
            <div className="relative w-full h-96 md:h-full md:min-h-96 rounded-none border-15 border-white overflow-hidden shadow-2xl">
              <Image
                src="/assets/aboutimage.jpg"
                alt="Luxury chauffeur vehicle"
                fill
                className="object-cover"
              />
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
                  About Us
                </h2>
              </div>
              {/* Body Text */}
              <div className="space-y-2 font-sans text-black ">
                <p>
                  Welcome to CCS Chauffeurs, where luxury, professionalism, and
                  security come together to offer an unparalleled chauffeur
                  experience. Based in Manchester, we provide top-tier private
                  car services, extending our reach to London. Our rigorously
                  trained chauffeurs are available 24/7, ready to cater to your
                  plans – whether for business, special events, or a relaxing
                  ride..
                </p>
                <p>
                  With our VIP chauffeur services, you can truly revel in
                  comfort and style. Our dedicated team of professional drivers
                  and meticulously maintained fleet guarantees punctuality and
                  sophistication every time. Plus, our chauffeurs are always
                  near you to assist with any emergency requests.
                </p>
                <p>
                  Experience the perfect blend of class and convenience with us.
                  Get in touch with us to book your chauffeur service. We cannot
                  wait to make your ride as luxurious as your destination.
                </p>
              </div>

              {/* Learn More Button */}
              <div className="pt-4">
                <CustomButton text="Contact us" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
