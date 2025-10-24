import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface WhyChooseUsCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function WhyChooseUsCard({
  icon: Icon,
  title,
  description,
}: WhyChooseUsCardProps) {
  return (
    <Card className="bg-[#111111] border-none text-white p-6 md:p-8 rounded-none hover:bg-[#1c1c1c] transition-all duration-300 ">
      <CardContent className="p-0 flex flex-col items-center gap-4">
        <div className="bg-amber-400/10 p-3 rounded-md mx-auto">
          <Icon className="text-[#a89447] w-12 h-12" />
        </div>
        <h3 className="text-lg font-semibold text-center">{title}</h3>
        <p className="text-md text-white leading-relaxed text-center">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}
