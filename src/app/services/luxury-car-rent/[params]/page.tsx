import Herobg from "@/components/herobg";
import Getaqoutesection from "@/components/services/subpagescomponents/getaqoutesection";
import CardLikeBanner from "@/components/cardlikebanner";
import UrusPerformantePage from "@/components/carcard";
import MetricsBanner from "@/components/aboutpagecomponents/metricsbanner";
import Samecomponent from "@/components/services/subpagescomponents/samecomponent";
import { existsSync } from "fs";
import { join } from "path";
import QuoteForm from "@/components/forms/quoteform";
function findLuxuryFile(base: string): string {
  const root = join(process.cwd(), "public", "assets", "Luxury");
  for (const ext of ["avif", "webp", "jpg", "jpeg", "png"]) {
    const file = join(root, `${base}.${ext}`);
    if (existsSync(file)) return `/assets/Luxury/${base}.${ext}`;
  }
  return `/assets/Luxury/fallback.jpg`; // ← always have a fallback
}
export default async function Page({
  params,
}: {
  params: Promise<{ params: string }>;
}) {
  const raw = (await params).params;
  const formatted = raw
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
  const img1 = findLuxuryFile(`1${raw}`);
  const img2 = findLuxuryFile(`2${raw}`);
  const img3 = findLuxuryFile(`3${raw}`);
  return (
    <>
      <Herobg text={formatted} image={img1} />
      <UrusPerformantePage text={formatted} image={img2} />
      <CardLikeBanner
        colorheading="Ride"
        plainheading="in style"
        paragraph="Place your trust in us for VIP chauffeur hire and enjoy an unforgettable journey."
      />
      <Getaqoutesection
        heading="Luxury Car Rental in London - Your Memorable Journey Begins Here"
        paragraph="With CSS Chauffeurs, you can enjoy a smooth and stress-free experience as our professional chauffeurs handle all your transportation needs. Each vehicle is maintained to the highest standards, offering you the utmost reliability and sophistication. We cater to both short-term and long-term luxury car rentals, ensuring flexible packages that suit your needs."
        image={img3}
      />
      <MetricsBanner />
      <QuoteForm />
      <Samecomponent />
    </>
  );
}
