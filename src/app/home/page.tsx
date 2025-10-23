import AboutSection from "@/components/about"
import CardLikeBanner from "@/components/cardlikebanner"
import HeroSection from "@/components/hero"
import OurFleetSection from "@/components/ourfleet"
import { OurServicesSection } from "@/components/services"

export default function Home() {

  return (<><HeroSection />
    <AboutSection />
    <CardLikeBanner colorheading="Ride " plainheading="in Style" paragraph="Place your trust in us for VIP chauffeur hire and enjoy an unforgettable journey." />
    <OurFleetSection />
    <CardLikeBanner colorheading="Schedule " plainheading=" Your Chauffeur Today!" paragraph="If you want to take your travel experience to new heights, you can contact our experts to schedule your luxury ride now."/>
    <OurServicesSection />
    </>)
}
