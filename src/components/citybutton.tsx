import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

export default function CityButton({ city }: { city: string }) {
  return (
    <Button
      className="w-full h-12 flex items-center rounded-none  justify-start gap-2 bg-[#a89447] text-black font-medium hover:bg-[#a89447] hover:text-black"
      variant="default"
    >
      <MapPin className="w-4 h-4" />
      {city}
    </Button>
  );
}
