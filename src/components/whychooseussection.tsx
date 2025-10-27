"use client";

import { ShieldCheck, Car, Clock, Award } from "lucide-react";
import { WhyChooseUsCard } from "./whychooseuscard";

const reasons = [
  {
    icon: Car,
    title: "Luxury Fleet",
    description:
      "Our premium vehicles ensure comfort, class, and a smooth travel experience every time.",
  },
  {
    icon: ShieldCheck,
    title: "Professional Chauffeurs",
    description:
      "Driven by excellence — our chauffeurs are trained, punctual, and highly courteous.",
  },
  {
    icon: Clock,
    title: "Always On Time",
    description:
      "We value your time. Enjoy timely pickups, drop-offs, and stress-free travel experiences.",
  },
  {
    icon: Award,
    title: "Unmatched Quality",
    description:
      "Our commitment to quality ensures you always experience luxury that stands out.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="w-full bg-white py-20 sm:py-24 lg:py-32 text-black">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Why Choose Us
          </h2>
          <p className="text-lg text-black  max-w-4xl mx-auto">
            Renowned for exceptional quality and professionalism, CCS Chauffeurs
            is your go-to company for premium chauffeur hire in Manchester and
            London. Our hallmarks include the following:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((item, index) => (
            <WhyChooseUsCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
