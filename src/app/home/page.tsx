import AboutSection from "@/components/about";
import CardLikeBanner from "@/components/cardlikebanner";
import HeroSection from "@/components/hero";
import { OurServicesSection } from "@/components/services";
import { XclusiveSlider } from "@/components/ourfleet";
export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <CardLikeBanner
        colorheading="Ride "
        plainheading="in Style"
        paragraph="Place your trust in us for VIP chauffeur hire and enjoy an unforgettable journey."
      />
      <main className="min-h-screen bg-neutral-900 flex items-center">
        <XclusiveSlider />
      </main>
      <CardLikeBanner
        colorheading="Schedule "
        plainheading=" Your Chauffeur Today!"
        paragraph="If you want to take your travel experience to new heights, you can contact our experts to schedule your luxury ride now."
      />
      <OurServicesSection />
    </>
  );
}
