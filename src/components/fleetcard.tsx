import Image from "next/image"
import CustomButton from "./custombutton"
import { Button } from "./ui/button"

interface FleetCardProps {
  name: string
  hourlyRate: string
  dayRate: string
  image: string
}

export function FleetCard({ name, hourlyRate, dayRate, image }: FleetCardProps) {
  return (
    <div className="flex flex-col items-start bg-white border border-gray-200 p-3">
      <div className="relative w-full h-60 sm:h-56 mb-4">
        <Image
          src={image}
          alt={name}
          fill
          className="object-contain"
          priority
        />
      </div>
      <h3 className="text-md sm:text-xl font-bold  text-black mb-1">{name}</h3>
      <div className=" sm:text-base text-gray-700  space-y-1 mb-2">
        <p className="text-sm">
          Hourly rate (minimum 6 hours): <br />
          <span className="font-semibold text-black text-sm">£{hourlyRate}</span>
        </p>
        <hr className="my-2 border-gray-300" />
        <p className="text-sm">
          Day rate (minimum 8 hours): <br />
          <span className="font-semibold text-black text-sm">£{dayRate}</span>
        </p>
        <p className="text-xs text-gray-600 mt-2">Prices subject to VAT</p>
      </div>
      <Button className="w-full bg-black text-white rounded-full py-2 font-bold text-sm sm:text-base hover:bg-gray-900">
        BOOK THIS CAR →
      </Button>
      {/* <CustomButton text="Book this car →" variant="black"/> */}
    </div>
  )
}
