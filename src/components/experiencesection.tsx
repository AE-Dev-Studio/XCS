"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import CustomButton from "./custombutton"

export default function ExperienceSection() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.unobserve(entry.target)
                }
            },
            { threshold: 0.2 },
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [])

    return (
        <section ref={sectionRef} className="bg-gray-200 py-20 px-6 sm:px-10 lg:px-20">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div
                        className={`flex items-center justify-center transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"
                            }`}
                    >
                        <div className="relative w-full h-96 md:h-full md:min-h-96 rounded-none border-15 border-white overflow-hidden shadow-2xl">
                            <Image src="/assets/aboutimage.jpg" alt="Luxury chauffeur vehicle" fill className="object-cover" />
                        </div>
                    </div>
                    <div
                        className={`flex flex-col justify-center transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
                            }`}
                    >
                        <div className="max-w-3xl space-y-6">
                            {/* Heading with Gold Accent */}
                            <div className="space-y-3">
                                <h2 className="font-sans text-4xl font-extrabold text-black">Experience the Pinnacle of Luxury
                                </h2>
                            </div>
                            {/* Body Text */}
                            <div className="space-y-2 font-sans text-black flex flex-col gap-3 ">
                                <p>
                                    At Xclusive Chauffeurs Services, we go above and beyond to provide top-tier chauffeur services in Manchester. From private airport transfers to corporate events and weddings, we offer customised transportation solutions tailored to your needs. Our modern fleet is equipped with the latest amenities for comfort and safety, and we only employ the most professional and proficient chauffeurs to guarantee a memorable experience.
                                </p>
                                <p>
                                    We believe every client deserves a unique experience, which is why we personalise our chauffeur services to exceed your expectations. If you require a Mercedes chauffeur in Manchester or a luxury car hire for a special occasion, count on us. We are here to be your reliable partner every step of the way.
                                </p>
                                <h2 className="font-sans text-3xl font-bold text-black ">Travel with Convenience and Safety
                                </h2>
                                <p>
                                    Xclusive Chauffeurs houses extensively trained and skilled chauffeurs who are capable of maintaining privacy and discretion throughout the journey. When you ride with our specialists, your safety and convenience are their top priorities. They meticulously clean and sanitise our vehicles after every ride to guarantee a hygienic and delightful travel experience for all our valued clients.
                                </p>
                            </div>

                            {/* Learn More Button */}
                            <div className="pt-4">
                                <CustomButton text="Contact us" variant="black" />
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    )
}
