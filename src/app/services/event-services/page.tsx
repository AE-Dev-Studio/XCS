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
      <Herobg text="Event Services" image="/assets/aboutimage.jpg" />
      <Sendmessagesection
        heading="Premier Event Transport Services in Manchester and London"
        paragraph="Elevate your event with our exceptional event transport services, seamlessly blending luxury, reliability, and style. As your go-to provider in Manchester and London, we specialize in crafting unforgettable transportation experiences for various occasions"
      />
      <Resusablefleet />
      <Getaqoutesection
        image="/assets/Luxury/3lamborghini-aventador-svj-roadster.jpeg"
        heading="Exquisite Event Chauffeur Services in Manchester"
        paragraph="Experience the epitome of elegance with our event chauffeur services in Manchester. Whether it is a corporate function or a special celebration, our professional chauffeurs ensure a sophisticated and seamless journey. From precise logistics to luxurious vehicles, we take pride in delivering unparalleled service, making your event transportation a highlight of the occasion."
      />
      <CardLikeBanner
        colorheading="Ride"
        plainheading="in style"
        paragraph="Place your trust in us for VIP chauffeur hire and enjoy an unforgettable journey."
      />
      <TextImageSection
        heading="Hire Event Car - Tailored Luxury Transportation"
        paragraph="When you hire an event car with us, you choose a bespoke transportation solution tailored to your event’s unique needs. Our diverse fleet caters to various preferences, ensuring the perfect vehicle for every occasion. Trust us to enhance your event with our premium hire event car services, delivering an unparalleled blend of style and substance in Manchester and London."
        image="/assets/weddingeventcar.jpg"
      />
      <MetricsBanner />
      <Samecomponent />
    </>
  );
};

export default Page;
