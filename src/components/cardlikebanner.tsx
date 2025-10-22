"use client"

import { useEffect, useState } from "react"
import CustomButton from "./custombutton"

interface Props{
    colorheading : string
    plainheading : string
    paragraph : string
}

export default function CardLikeBanner({colorheading, plainheading, paragraph}: Props) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div
      className="relative w-full h-[30vh] sm:h-[30vh] bg-cover bg-center bg-no-repeat overflow-hidden bg-black"
    >

      {/* Centered Content */}
      <div
        className={` relative z-10 h-full flex flex-row items-center justify-between text-center px-6 sm:px-10 transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex flex-col">
            <div className="flex flex-row">
        <h2 className="text-[#a89447] font-sans text-xl sm:text-5xl lg:text-3xl font-bold mb-6 tracking-tight max-w-4xl text-left">
          {colorheading}
        </h2>
        <h2 className="text-white font-sans text-xl sm:text-5xl lg:text-3xl font-bold mb-6 tracking-tight max-w-4xl text-left">
         {plainheading}
        </h2>
        </div>

        <p className="text-gray-200 text-base sm:text-lg max-w-2xl leading-relaxed mb-8 text-left font-sans">
       {paragraph}
        </p>
        </div>
         <div>
        <CustomButton variant="white"  text="Contact Us"/>
    </div>
    </div>
   

    </div>
  )
}
