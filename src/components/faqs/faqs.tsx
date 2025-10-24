"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
const items = [
  {
    title: "Is there a waiting charge for your services?",
    content: "Yes, waiting charges may apply after a specified grace period.",
  },
  {
    title: "Do you have a loyalty program?",
    content: "Yes, we offer a loyalty program for returning customers.",
  },
  {
    title: "Can I change my booking after it’s confirmed?",
    content: "Yes, you can modify your booking details with sufficient notice.",
  },
  {
    title: "What happens if I forget something in the vehicle?",
    content:
      "If this happens, contact us immediately, and we will assist in retrieving lost items.",
  },
  {
    title: "Do you offer services for parties or events?",
    content:
      "Yes, we can provide transportation for parties and events of all sizes.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-100 py-10 md:py-14 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 text-black leading-tight">
          Frequently Asked Questions
        </h1>

        <div className="space-y-2">
          {items.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-md overflow-hidden"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full bg-black text-white px-4 sm:px-6 py-4 sm:py-5 flex justify-between items-center hover:bg-gray-900 transition-colors duration-300"
              >
                <span className="text-base sm:text-lg md:text-xl font-semibold text-left">
                  {item.title}
                </span>
                <ChevronDown
                  className={`w-5 h-5 sm:w-6 sm:h-6 shrink-0 ml-2 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`bg-white overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-80 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-4 sm:px-6 py-4">
                  <p className="text-sm sm:text-base text-gray-700">
                    {item.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
