import AboutSection from "@/components/about";
import AreasWeCover from "@/components/areaswecover";
import CardLikeBanner from "@/components/cardlikebanner";
import ContactNowSection from "@/components/contactnow";
import ExperienceSection from "@/components/experiencesection";
import HeroSection from "@/components/hero";
import { OurServicesSection } from "@/components/services/services";
import SingleImageSection from "@/components/singleimagesection";
import WhyChooseUsSection from "@/components/whychooseussection";
import Fleet from "@/components/fleet/fleet";
import Footer from "@/components/footer/footer";
import Faq from "@/components/faqs/faqs";
import CustomerReviews from "@/components/reviews/reviews";
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
      <Fleet />
      <CardLikeBanner
        colorheading="Schedule "
        plainheading=" Your Chauffeur Today!"
        paragraph="If you want to take your travel experience to new heights, you can contact our experts to schedule your luxury ride now."
      />
      <SingleImageSection />
      <OurServicesSection />
      <WhyChooseUsSection />
      <ExperienceSection />
      <AreasWeCover />
      <CustomerReviews />
      <Faq />
      <ContactNowSection />
      <Footer />
    </>
  );
}
