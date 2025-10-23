import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface ServiceCardProps {
  title: string
  description: string
  imageSrc: string
}

export function ServiceCard({ title, description, imageSrc }: ServiceCardProps) {
  return (
    <Card className="flex flex-col h-full hover:shadow-xl transition-all duration-300 border-none rounded-none bg-[#1f1f1f] overflow-hidden">
      {/* Image Container */}
      <div className="relative w-full h-30 md:h-38 lg:h-46">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content Container */}
      <div className="flex flex-col flex-1 justify-between p-4 md:p-6 gap-3">
        <div>
          <h3 className="font-semibold text-lg text-white mb-2 hover:text-green-500">{title}</h3>
          <p className="text-sm text-gray-300 line-clamp-3">{description}</p>
        </div>

        {/* View Service Button */}
        <p className="text-white text-sm mt-4 cursor-pointer transition-colors">
          View Service →
        </p>
      </div>
    </Card>
  )
}
