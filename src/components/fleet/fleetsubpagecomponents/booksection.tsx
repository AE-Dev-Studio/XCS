"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import CustomButton from "@/components/custombutton";

interface BookSectionProps {
    title: string;
    bullets: string[];      // e.g. ["2/3 Passengers", "Electric option", ...]
    features: string[];     // Left side ticks
    rentals: {              // Right side ticks + prices
        label: string;
        price: string;
    }[];
    carImage: string;       // Car image URL
}

const BookSection = ({ title, bullets, features, rentals, carImage }: BookSectionProps) => {
    return (
        <section className="bg-white py-16 px-6 md:px-12 text-center shadow-sm">
            <h2 className="text-3xl md:text-4xl font-bold text-[#a89447] mb-3">
                {title}
            </h2>

            {/* Bullets row */}
            <div className="flex flex-wrap justify-center items-center gap-6 text-gray-600 mb-10">
                {bullets.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                        <span className="w-3 h-3 bg-[#a89447] rounded-full"></span>
                        <span>{item}</span>
                    </div>
                ))}
            </div>

            {/* Main content grid */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-10 max-w-6xl mx-auto">
                {/* Left: Car image */}
                <div className="flex justify-center md:w-1/3">
                    <Image
                        src={carImage}
                        alt="Car"
                        width={400}
                        height={200}
                        className="object-contain"
                    />
                </div>

                {/* Right: Details */}
                <div className="md:w-2/3 flex flex-col gap-6 text-left">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Left: Features */}
                        <ul className="space-y-3">
                            {features.map((feature, index) => (
                                <li key={index} className="flex items-start gap-2 text-gray-700">
                                    <Check className="text-[#a89447] mt-1 w-5 h-5" />
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        {/* Right: Rentals */}
                        <ul className="space-y-3">
                            {rentals.map((item, index) => (
                                <li key={index} className="flex items-center justify-between text-gray-700">
                                    <div className="flex items-start gap-2">
                                        <Check className="text-[#a89447] mt-1 w-5 h-5" />
                                        {item.label}
                                    </div>
                                    <span className="font-semibold text-gray-800">{item.price}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

    
                    <div>
                        <CustomButton text="Book Now" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookSection;
