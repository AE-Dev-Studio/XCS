import { XclusiveSlider } from "./ourfleet";
import Image from "next/image";
function Fleet() {
  return (
    <main className="min-h-screen">
      <aside
        className="hidden lg:block absolute right-0 z-20
                         w-80 h-[70%] bg-black p-6 shadow-2xl
                         "
      >
        {" "}
        {/* hide on small screens if you want */}
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <Image
            src="/assets/logoWithoutbg.png"
            alt="XCS"
            width={120}
            height={120}
            className="h-24 object-contain"
          />
        </div>
        <h5 className="text-center text-white font-semibold mb-3">
          Xclusive Chauffeurs
        </h5>
        {/* Bullets */}
        <ul className="space-y-2 text-sm text-white">
          <li className="flex items-start gap-2">
            <span className="text-xs mt-0.5">
              <svg
                aria-hidden="true"
                className="e-font-icon-svg e-fas-dot-circle"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm80 248c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80z"></path>
              </svg>
            </span>
            <span>Luxurious Vehicles</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-xs mt-0.5">🔵</span>
            <span>Knowledgeable Drivers</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-xs mt-0.5">🔵</span>
            <span>Faultless Customer Service</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-xs mt-0.5">🔵</span>
            <span>Uncompromising Standards</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-xs mt-0.5">🔵</span>
            <span>Available 24 hours a Day</span>
          </li>
        </ul>
        {/* Side banner image */}
        <Image
          src="/assets/FleetCars/side-banner.jpg"
          alt="banner"
          width={320}
          height={120}
          className="w-full mt-5"
        />
        {/* CTA */}
        <a
          href="/fleet"
          className="inline-flex items-center justify-center gap-2
                     w-full mt-4 bg-black text-white py-3 rounded-lg
                     font-semibold transition"
        >
          <span>CHECK FLEET</span>
          <span>→</span>
        </a>
      </aside>

      <XclusiveSlider />
      <aside
        className="block lg:hidden lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2
                         w-full lg:w-80 bg-black p-6 shadow-2xl
                         mt-10 lg:mt-0"
      >
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <Image
            src="/assets/logoWithoutbg.png"
            alt="XCS"
            width={120}
            height={120}
            className="h-24 object-contain"
          />
        </div>

        <h5 className="text-center text-white font-semibold mb-3">
          Xclusive Chauffeurs
        </h5>

        {/* Bullets */}
        <ul className="space-y-2 text-sm text-white">
          {[
            "Luxurious Vehicles",
            "Knowledgeable Drivers",
            "Faultless Customer Service",
            "Uncompromising Standards",
            "Available 24 hours a Day",
          ].map((t) => (
            <li key={t} className="flex items-start gap-2">
              <span className="text-xs mt-0.5">🔵</span>
              <span>{t}</span>
            </li>
          ))}
        </ul>

        {/* Side banner image */}
        <Image
          src="/assets/FleetCars/side-banner.jpg"
          alt="banner"
          width={320}
          height={120}
          className="w-full mt-5"
        />

        {/* CTA */}
        <a
          href="/fleet"
          className="inline-flex items-center justify-center gap-2
                     w-full mt-4 bg-black text-white py-3 rounded-lg
                     font-semibold transition"
        >
          <span>CHECK FLEET</span>
          <span>→</span>
        </a>
      </aside>
    </main>
  );
}

export default Fleet;
