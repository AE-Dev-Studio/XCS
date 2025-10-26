"use client"

import { Car, CarFront, Target } from "lucide-react"
import { WhyChooseUsCard } from "../whychooseuscard"

const features = [
    {
        icon: Target,
        title: "Our Mission",
        description:
            "To provide ultra-premium, luxury travel solutions to individuals, organisations and businesses at the best prices in town.",
    },
    {
        icon: CarFront,
        title: "Our Chauffeurs",
        description:
            "Our chauffeurs are highly experienced, trained, and licenced to provide high-end travel experiences to our clients.",
    },
    {
        icon: Car,
        title: "Our Fleet",
        description: "Our fleet is comprised of highly maintained modern vehicles with high-tech safety and luxury features.",
    },

]

export default function XclusiveChauffers() {
    return (
        <section className="w-full bg-white py-20 sm:py-24 lg:py-32 text-black">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
                        <span className="text-[#a89447]">Xclusive</span> Chauffeurs
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                    {features.map((item, index) => (
                        <WhyChooseUsCard key={index} {...item} />
                    ))}
                </div>
            </div>
        </section>
    )
}
