"use client"; // remove if not Next.js
import React, { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
type Car = {
  id: string;
  title: string;
  tagline: string;
  hourly: number;
  daily: number;
  img: string; // public folder
};

const FLEET: Car[] = [
  {
    id: "s-class",
    title: "MERCEDES S-CLASS",
    tagline: "Xclusive Chauffeurs",
    hourly: 60,
    daily: 480,
    img: "/assets/FleetCars/mercedes.png",
  },
  {
    id: "v-class",
    title: "MERCEDES V-CLASS",
    tagline: "Luxurious Vehicles",
    hourly: 55,
    daily: 440,
    img: "/assets/FleetCars/1.png",
  },
  {
    id: "vogue",
    title: "RANGE ROVER VOGUE",
    tagline: "Uncompromising Standards",
    hourly: 90,
    daily: 720,
    img: "/assets/FleetCars/2.png",
  },
  {
    id: "e-class",
    title: "MERCEDES E-CLASS",
    tagline: "Xclusive Chauffeurs",
    hourly: 40,
    daily: 320,
    img: "/assets/FleetCars/3.png",
  },
  {
    id: "phantom",
    title: "ROLLS ROYCE PHANTOM",
    tagline: "The Ultimate Statement",
    hourly: 185,
    daily: 1480,
    img: "/assets/FleetCars/rollsroycephantom.png",
  },
  {
    id: "ghost",
    title: "ROLLS ROYCE GHOST",
    tagline: "Refined Power",
    hourly: 120,
    daily: 1120,
    img: "/assets/FleetCars/rollsroyceghost.png",
  },
];
/* ----------  slider  ---------- */
export const XclusiveSlider: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollL, setScrollL] = useState(0);

  const clones = 6;
  const cardW = 344; // w-80 (320px) + gap-6 (24px)

  /*  silent scroll helper  */
  const silent = (el: HTMLDivElement, left: number) => {
    el.style.scrollBehavior = "auto";
    el.scrollLeft = left;
    requestAnimationFrame(() => {
      el.style.scrollBehavior = "smooth";
    });
  };

  /*  infinite loop - fixed to prevent visible jump  */
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const onScroll = () => {
      const singleSetWidth = cardW * FLEET.length;
      const scrollLeft = el.scrollLeft;

      // Jump forward if we've scrolled past the first set
      if (scrollLeft < cardW) {
        silent(el, scrollLeft + singleSetWidth);
        return;
      }

      // Jump backward if we've scrolled past the second set
      if (scrollLeft > singleSetWidth * 2 - cardW) {
        silent(el, scrollLeft - singleSetWidth);
        return;
      }

      // Update active index based on center position
      const centre = scrollLeft + el.clientWidth / 2;
      const rawIndex = Math.round(centre / cardW);
      const i = ((rawIndex % FLEET.length) + FLEET.length) % FLEET.length;
      setIndex(i);
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  /*  initial position - start at middle set  */
  useEffect(() => {
    if (trackRef.current) {
      trackRef.current.scrollLeft = cardW * FLEET.length;
    }
  }, []);

  /*  drag handlers  */
  const down = (e: React.MouseEvent | React.TouchEvent) => {
    if (!trackRef.current) return;
    e.preventDefault();
    setDragging(true);
    const clientX = "touches" in e ? e.touches[0].pageX : e.pageX;
    setStartX(clientX);
    setScrollL(trackRef.current.scrollLeft);
  };

  const move = (e: MouseEvent | TouchEvent) => {
    if (!dragging || !trackRef.current) return;
    e.preventDefault();
    const clientX = "touches" in e ? e.touches[0].pageX : e.pageX;
    const dx = clientX - startX;
    trackRef.current.scrollLeft = scrollL - dx * 1.5;
  };

  const up = () => {
    if (!dragging) return;
    setDragging(false);
    if (!trackRef.current) return;
    const el = trackRef.current;
    const centre = el.scrollLeft + el.clientWidth / 2;
    const target =
      Math.round(centre / cardW) * cardW - el.clientWidth / 2 + cardW / 2;
    el.scrollTo({ left: target, behavior: "smooth" });
  };

  useEffect(() => {
    if (!dragging) return;

    const handleMove = (e: MouseEvent | TouchEvent) => move(e);
    const handleUp = () => up();

    document.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseup", handleUp);
    document.addEventListener("touchmove", handleMove);
    document.addEventListener("touchend", handleUp);

    return () => {
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseup", handleUp);
      document.removeEventListener("touchmove", handleMove);
      document.removeEventListener("touchend", handleUp);
    };
  }, [dragging, startX, scrollL]);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const wheel = (e: WheelEvent) => {
      // Only prevent if scrolling horizontally (shift + wheel or trackpad horizontal gesture)
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        e.preventDefault();
      }
    };
    el.addEventListener("wheel", wheel, { passive: false });
    return () => el.removeEventListener("wheel", wheel);
  }, []);

  /*  arrow navigation  */
  const scroll = (direction: "left" | "right") => {
    if (!trackRef.current) return;
    const el = trackRef.current;
    const scrollAmount = direction === "left" ? -cardW : cardW;
    el.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <section className="w-full select-none bg-black py-20">
      {/* ----------  DESKTOP : keep your original layout ---------- */}
      <div className="relative max-w-7xl mx-auto max-lg:px-4 lg:pr-80">
        {/* arrows */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 mx-3 top-1/2 -translate-y-1/2 z-10
                       bg-white/90 hover:bg-white text-black rounded-full p-3
                       shadow-lg transition hover:scale-110"
          aria-label="Previous"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 lg:right-1/4 mx-3 top-1/2 -translate-y-1/2 z-10
                       bg-white/90 hover:bg-white text-black rounded-full p-3
                       shadow-lg transition hover:scale-110"
          aria-label="Next"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* track */}
        <div
          ref={trackRef}
          onMouseDown={down}
          onTouchStart={down}
          className={`flex gap-6 overflow-x-auto scroll-smooth cursor-grab ${
            dragging ? "cursor-grabbing" : ""
          }`}
          style={{ scrollbarWidth: "none" }}
        >
          <style>{`.xclusive-slider::-webkit-scrollbar{display:none}`}</style>
          <div className="xclusive-slider flex gap-6">
            {Array.from({ length: clones }).flatMap((_, c) =>
              FLEET.map((car, i) => <CarCard key={`${c}-${i}`} car={car} />)
            )}
          </div>
        </div>

        {/* dots */}
        <div className="flex justify-center gap-2 mt-6">
          {FLEET.map((_, i) => (
            <span
              key={i}
              className={`w-2 h-2 rounded-full transition ${
                i === index ? "bg-white" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------- card ---------- */
const CarCard: React.FC<{ car: Car }> = ({ car }) => (
  <article className="w-[306px] shrink-0 snap-center bg-white rounded-2xl shadow-xl overflow-hidden">
    <Image
      src={car.img}
      alt={car.title}
      width={306}
      height={220}
      className="h-[220px] w-full object-contain bg-white"
    />
    <div className="p-5">
      <h4 className="text-lg font-bold text-neutral-900">{car.title}</h4>
      <p className="text-sm text-neutral-500 mb-4">{car.tagline}</p>

      <ul className="space-y-3 text-sm">
        <li className="flex items-center justify-between">
          <span>Hourly rate (minimum 6 hours)</span>
          <b className="text-lg">£{car.hourly}</b>
        </li>
        <li className="flex items-center justify-between">
          <span>Day rate (minimum 8 hours)</span>
          <b className="text-lg">£{car.daily}</b>
        </li>
      </ul>

      <p className="text-xs text-neutral-400 mt-3">Prices subject to VAT</p>

      <button className="w-full mt-4 bg-black text-white py-3 rounded-lg font-semibold hover:bg-neutral-800 transition flex items-center justify-center gap-2">
        BOOK THIS CAR
        <span className="text-xl">→</span>
      </button>
    </div>
  </article>
);
