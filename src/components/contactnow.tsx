import Image from "next/image";
import { Button } from "@/components/ui/button";
import CustomButton from "./custombutton";

export default function ContactNowSection() {
  return (
    <section className="relative w-full h-[50vh]">
      {/* Background image */}
      <Image
        src="/assets/aboutimage.jpg"
        alt="Luxury Chauffeur Car"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Overlay for dark effect */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Centered Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Contact Now!</h2>
        <p className="text-sm md:text-lg font-bold mb-6 max-w-4xl">
          Experience the epitome of luxury by booking our ultra-luxury
          chauffeur-driven car for your travels.
        </p>
        {/* <Button className="bg-black text-white px-8 py-3 text-sm md:text-base rounded-full border border-white hover:bg-black hover:text-white">
          CHECK FLEET
        </Button> */}
        <CustomButton variant="black" text="CHECK FLEET" className="font-extrabold text-md"/>
      </div>
    </section>
  );
}
