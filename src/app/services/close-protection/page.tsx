import MetricsBanner from "@/components/aboutpagecomponents/metricsbanner";
import CardLikeBanner from "@/components/cardlikebanner";
import Herobg from "@/components/herobg";
import Getaqoutesection from "@/components/services/subpagescomponents/getaqoutesection";
import Resusablefleet from "@/components/services/subpagescomponents/resusablefleet";
import Samecomponent from "@/components/services/subpagescomponents/samecomponent";
import Sendmessagesection from "@/components/services/subpagescomponents/sendmessagesection";
import TextImageSection from "@/components/services/subpagescomponents/textimagesection";

const Page = () => {
  return (
    <>
      <Herobg text="Close Protection" image="/assets/closeprotection.jpeg" />
      <Sendmessagesection
        heading="Unparalleled Close Protection Chauffeur Services by CCS Chauffeurs"
        paragraph="At CCS Chauffeurs, we redefine safety and sophistication with our top-tier close-protection chauffeur services in Manchester and London. With a firm commitment to your security and comfort, our close protection services set the standard for discreet and reliable transportation."
      />
      <Resusablefleet />
      <Getaqoutesection
        heading="Manchester Trusted Close Protection Chauffeurs - Your Safety, Our Priority"
        paragraph="In Manchester, CCS Chauffeurs is the epitome of trust in close protection chauffeur services. Our team of highly trained professionals seamlessly combines security expertise with chauffeur excellence, ensuring you experience peace of mind throughout your journey. Discover the perfect blend of safety and luxury with our close-protection chauffeur service."
      />
      <CardLikeBanner
        colorheading="Ride"
        plainheading="in style"
        paragraph="Place your trust in us for VIP chauffeur hire and enjoy an unforgettable journey."
      />
      <TextImageSection
        heading="London Premier Close Security Chauffeur Services - Unmatched Security, Unrivaled Style"
        paragraph="In the dynamic metropolis of London, CCS Chauffeurs extends its close protection services, providing elite compact security chauffeur solutions. Our discreet and skilled chauffeurs prioritize your safety without compromising on style. From corporate executives to high-profile individuals, our close protection chauffeur service in London is designed to meet the unique security needs of our discerning clientele."
        image="/assets/closeprotectiontextimage.jpg"
      />
      <MetricsBanner />
      <Samecomponent />
    </>
  );
};

export default Page;
