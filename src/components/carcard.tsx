// app/urus-performante/page.tsx  (or any route you prefer)
import Image from "next/image";

export default function UrusPerformantePage({
  text,
  image,
}: {
  text: string;
  image: string;
}) {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 items-center">
      {/* LEFT TEXT BLOCK */}
      <div className="space-y-3">
        <h1 className="text-black font-semibold text-2xl uppercase">
          {text}
          <br />
          Hire In Manchester – CCS Chauffeurs
        </h1>

        <p className="text-sm text-gray-800 leading-snug">
          Elevate your driving experience with the {text}, available for hire at
          CCS Chauffeurs in Manchester. This high-performance SUV delivers
          exceptional power, cutting-edge technology, and luxurious comfort,
          making it perfect for any occasion. Whether you&apos;re heading to a
          special event or simply want to enjoy a thrilling ride, our
          professional chauffeurs ensure a seamless and luxurious experience.
        </p>

        <a
          href="tel:07497363737"
          className="inline-block rounded-full bg-black text-white px-6 py-3 hover:bg-[#a89447] transition duration-500"
        >
          Call Now!
        </a>
      </div>

      {/* RIGHT IMAGE BLOCK */}
      <div className="border-6 border-black overflow-hidden shadow-xl animate-fadeInUp delay-200">
        <Image
          src={image}
          alt="Lamborghini Urus Performante"
          width={800}
          height={534}
          className="w-full h-auto object-cover"
          priority
        />
      </div>
    </section>
  );
}
