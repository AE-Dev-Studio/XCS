"use client";

import CustomButton from "../custombutton";

export default function Conveniencesection() {
  return (
    <section className="bg-white py-20 px-6 sm:px-10 lg:px-20">
      <div className="max-w-4xl mx-auto ">
        <h2 className="text-4xl font-extrabold text-black mb-4">
          Travel with Convenience and Safety
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-10">
          CCS Chauffeurs houses extensively trained and experienced chauffeurs
          who are capable of maintaining privacy and discretion throughout the
          journey. When you ride with them, your safety and convenience are
          their top priority. They thoroughly clean and sanitise their vehicles
          after every job to ensure a hygienic and pleasant travel experience
          for their clients.
        </p>

        <CustomButton text="Contact us" variant="green" />
      </div>
    </section>
  );
}
