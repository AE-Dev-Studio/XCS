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
      <Herobg
        text="Airport Chauffeur Manchester"
        image="/assets/airporthero.jpg"
      />
      <Sendmessagesection
        heading="Exquisite Journeys with CCS Chauffeurs: Seamless Luxury Airport Transfers"
        paragraph="Experience travel at its finest with CCS clusiveChauffeurs, your trusted partner for exclusive luxury airport transfer services that epitomize sophistication and unrivaled comfort. We specialize in opulent Manchester airport transfers and ensure a seamless flight from your flight to your desired destination."
      />
      <Resusablefleet />
      <Getaqoutesection
        heading="Elevated Excellence in Executive Airport Transfers"
        paragraph="Uncover the pinnacle of service with CCS Chauffeurs’ executive airport transfers, meticulously designed for the most discerning travelers. Our commitment to excellence permeates every detail, promising an indulgent experience for business and leisure trips. Immerse yourself in the epitome of comfort and style as we redefine the standards of airport transfers in Manchester."
      />
      <CardLikeBanner
        colorheading="Ride"
        plainheading="in style"
        paragraph="Place your trust in us for VIP chauffeur hire and enjoy an unforgettable journey."
      />
      <TextImageSection
        heading="Cosmopolitan Luxury Beyond Manchester: Private Airport Transfers with CCS Chauffeurs"
        paragraph="Embrace the cosmopolitan allure with CCS Chauffeurs as our private airport transfer services extend beyond Manchester, providing an equally luxurious experience in London. From the moment you land at the airport, our chauffeurs ensure a prompt and polished service, reflecting our dedication to providing an unforgettable journey. Redefine your travel experience with CCS Chauffeurs’ exclusive airport transfer solutions, seamlessly merging luxury with convenience."
        image="/assets/airporthero.jpg"
      />
      <MetricsBanner />
      <Samecomponent />
    </>
  );
};

export default Page;
