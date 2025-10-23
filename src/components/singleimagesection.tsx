import Image from "next/image"
import React from "react"

function SingleImageSection() {
  return (
    <div className="w-full h-[80vh] bg-white flex items-center justify-center">
      <div className="relative w-[70%] h-[80%]">
        <Image
          src="/assets/aboutimage.jpg" // replace with your image
          alt="Driven by Excellence"
          fill
          className="object-cover object-center"
          priority
        />
      </div>
    </div>
  )
}

export default SingleImageSection
