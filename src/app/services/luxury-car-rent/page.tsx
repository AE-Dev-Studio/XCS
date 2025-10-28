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
      <Herobg text="Luxury Car Rent" image="/assets/aboutimage.jpg" />
      <Sendmessagesection
        heading="Luxury Car Rental in Manchester with CCS Chauffeurs"
        paragraph="Experience travel at its finest with CCS Chauffeurs, your trusted partner for exclusive luxury airport transfer services that epitomize sophistication and unrivaled comfort. We specialize in opulent Manchester airport transfers and ensure a seamless flight from your flight to your desired destination."
      />
      <Resusablefleet />
      <Getaqoutesection
        heading="Luxury Car Rental in London - Your Memorable Journey Begins Here"
        paragraph="With CSS Chauffeurs, you can enjoy a smooth and stress-free experience as our professional chauffeurs handle all your transportation needs. Each vehicle is maintained to the highest standards, offering you the utmost reliability and sophistication. We cater to both short-term and long-term luxury car rentals, ensuring flexible packages that suit your needs."
      />
      <CardLikeBanner
        colorheading="Ride"
        plainheading="in style"
        paragraph="Place your trust in us for VIP chauffeur hire and enjoy an unforgettable journey."
      />
      <TextImageSection
        heading="CCS Chauffeurs: Manchester Luxury Car Rentals for Special Occasions"
        paragraph="Book your exclusive ride with Xclusive Chauffeurs Services today and travel in style, class, and ultimate luxury. Let us make your special events or business trips memorable with our luxury car rental services in Manchester."
        image="/assets/carinner.jpeg"
      />
      <MetricsBanner />
      <Samecomponent />
    </>
  );
};

export default Page;
