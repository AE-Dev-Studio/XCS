import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface ConatctInfoCardProps {
  icon: LucideIcon;
  link : string
  description: string;
}

export function ContactInfoCard({
  icon: Icon,
  link,
  description,
}: ConatctInfoCardProps) {
  return (
    <Card className="bg-[#111111] border-none text-white p-6 md:p-8 rounded-none hover:bg-[#1c1c1c] transition-all duration-300 ">
      <CardContent className="p-0 flex flex-col items-center gap-4">
        <div className="bg-amber-400/10 p-3 rounded-md mx-auto">
          <Icon className="text-[#a89447] w-8 h-8" />
        </div>
        <Link href ={link} className="text-sm text-muted-foreground leading-relaxed text-center">
          {description}
        </Link>
      </CardContent>
    </Card>
  );
}
