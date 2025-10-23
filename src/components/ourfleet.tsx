"use client"

import { useRef, useEffect, useState } from "react"
import { FleetCard } from "./fleetcard"

const fleetData = [
  { id: 1, name: "Rolls Royce Ghost", image: "/assets/rolls-royce-ghost.jpg", hourlyRate: "120", dayRate: "1120" },
  { id: 2, name: "Mercedes-Benz S-Class", image: "/mercedes-benz-s-class-luxury-sedan-black.jpg", hourlyRate: "100", dayRate: "900" },
  { id: 3, name: "BMW 7 Series", image: "/bmw-7-series-luxury-sedan-black.jpg", hourlyRate: "95", dayRate: "850" },
  { id: 4, name: "Range Rover", image: "/range-rover-luxury-suv-black.jpg", hourlyRate: "130", dayRate: "1150" },
]

export default function OurFleetSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const carouselRef = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const infiniteFleetData = [...fleetData, ...fleetData, ...fleetData]

  const itemWidthRef = useRef<number>(0)
  const tickingRef = useRef<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.12 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return
    const setInitialScroll = () => {
      const totalItems = infiniteFleetData.length
      if (totalItems === 0) return
      const itemWidth = carousel.scrollWidth / totalItems
      itemWidthRef.current = itemWidth
      const startIndex = fleetData.length
      carousel.scrollLeft = Math.round(itemWidth * startIndex)
      setCurrentSlide(0)
    }
    const ro = new ResizeObserver(() => setTimeout(setInitialScroll, 50))
    ro.observe(carousel)
    setTimeout(setInitialScroll, 50)
    return () => ro.disconnect()
  }, [])

  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    const totalItems = infiniteFleetData.length
    const originalLength = fleetData.length

    const handleScroll = () => {
      if (tickingRef.current) return
      tickingRef.current = requestAnimationFrame(() => {
        tickingRef.current = null
        const scrollLeft = carousel.scrollLeft
        const scrollWidth = carousel.scrollWidth
        const clientWidth = carousel.clientWidth
        const itemWidth = itemWidthRef.current || scrollWidth / totalItems
        itemWidthRef.current = itemWidth

        if (itemWidth > 0) {
          const rawIndex = Math.round(scrollLeft / itemWidth)
          const normalized = ((rawIndex % originalLength) + originalLength) % originalLength
          setCurrentSlide(normalized)
        }

        const threshold = itemWidth * 1.5
        const leftEdge = threshold
        const rightEdge = scrollWidth - clientWidth - threshold

        if (scrollLeft <= leftEdge) {
          const offsetInsideItem = scrollLeft % itemWidth
          const target = scrollLeft + itemWidth * originalLength
          carousel.scrollLeft = Math.round(target + offsetInsideItem)
        } else if (scrollLeft >= rightEdge) {
          const offsetInsideItem = scrollLeft - itemWidth * originalLength
          carousel.scrollLeft = Math.round(offsetInsideItem)
        }
      })
    }

    carousel.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleScroll)
    handleScroll()
    return () => {
      carousel.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
      if (tickingRef.current) cancelAnimationFrame(tickingRef.current)
    }
  }, [])

  const goToSlide = (index: number) => {
    const carousel = carouselRef.current
    if (!carousel) return
    const totalItems = infiniteFleetData.length
    const itemWidth = itemWidthRef.current || carousel.scrollWidth / totalItems
    const targetIndex = index + fleetData.length
    carousel.scrollTo({ left: Math.round(itemWidth * targetIndex), behavior: "smooth" })
  }

  return (
    <section ref={sectionRef} className="w-full bg-white py-20 sm:py-24 lg:py-32">
      <div className=" mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className={`mb-16 text-center transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
          <h2 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold text-black mb-4">
            Our <span className="text-green-600 ">Fleet</span>
          </h2>
          <p className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6">
            Pinnacle of Luxury and Style
          </p>
          <div className="flex justify-center">
            <div className="w-20 h-[0.5] bg-black" />
          </div>
        </div>

        {/* Carousel */}
        <div className="relative flex flex-row justify-between items-center gap-3">
          <div
            ref={carouselRef}
            className="flex gap-2 overflow-x-auto scroll-smooth  hide-scrollbar"
          >
            {infiniteFleetData.map((car, index) => (
              <div key={`${car.id}-${index}`} className="shrink-0 w-60 sm:w-88">
                <FleetCard
                  name={car.name}
                  hourlyRate={car.hourlyRate}
                  dayRate={car.dayRate}
                  image={car.image}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {fleetData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-1.25 h-1.25 rounded-full transition-colors duration-300 ${
                currentSlide === index ? "bg-black" : "bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
