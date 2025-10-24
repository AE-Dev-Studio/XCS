"use client";

import CityButton from "./citybutton";

const cities = [
  "Liverpool",
  "Leeds",
  "Sheffield",
  "Salford",
  "York",
  "Chester",
  "Lancaster",
  "Preston",
  "Swinton",
  "Stretford",
  "Knutsford",
  "Stoke-On-Trent",
  "Bowdon",
  "Rochdale",
  "Heywood",
  "Bradford",
  "Bury",
  "Prestwich",
  "Tameside",
  "Blackpool",
  "Whitworth",
  "Bolton",
  "Pontefract",
  "Oldham",
  "Stockport",
  "Todmorden",
  "Manchester Airport",
  "Trafford",
  "Wigan",
  "Wrexham",
  "Huddersfield",
  "Manchester",
  "Dewsbury",
  "Hull",
  "Warrington",
];

export default function AreasWeCover() {
  return (
    <section className="w-full bg-black py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold mb-3 text-white">
          Areas <span className="text-[#a89447]">We Cover</span>
        </h2>
        <div className="w-25 h-0.5 bg-white mx-auto mt-5 m-10" />

        {/* Grid Layout for City Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {cities.map((city) => (
            <CityButton key={city} city={city} />
          ))}
        </div>
      </div>
    </section>
  );
}
