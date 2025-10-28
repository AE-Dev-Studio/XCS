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
      <Herobg text="Corporate Services" image="/assets/aboutimage.jpg" />
      <Sendmessagesection
        heading="Premier Corporate Car Rental Solutions for Manchester and London"
        paragraph="Explore the epitome of corporate luxury with our distinguished corporate car rental services, meticulously designed to meet the unique demands of businesses in Manchester and London. As your trusted partner in executive transportation, our corporate chauffeur service stands out as the epitome of professionalism, ensuring a seamless and stylish journey for your corporate events."
      />
      <Resusablefleet />
      <Getaqoutesection
        image="\assets\Luxury\3lamborghini-aventador-svj-roadster.jpeg"
        heading="Refined Corporate Car Services in Manchester and Beyond"
        paragraph="Our corporate car rental services in Manchester redefine the standards of executive travel. Tailored to the distinctive needs of businesses, our chauffeur service for corporate events guarantees an unparalleled blend of reliability, elegance, and efficiency. Whether you’re attending conferences, meetings, or other corporate functions, our fleet of top-tier vehicles and professional chauffeurs make every journey a statement of corporate sophistication.r."
      />
      <CardLikeBanner
        colorheading="Ride"
        plainheading="in style"
        paragraph="Place your trust in us for VIP chauffeur hire and enjoy an unforgettable journey."
      />
      <TextImageSection
        heading="Corporate Car Hire Excellence in London"
        paragraph="Extend your corporate experience to the cosmopolitan heart of London with our corporate car hire services. Seamlessly blending style and functionality, our chauffeur service ensures you arrive at your destination in absolute comfort and sophistication. Trust us to provide corporate car service that aligns with London’s dynamic and fast-paced business environment. Elevate your corporate travel experience with our premium car rental solutions, setting the benchmark for excellence in Manchester and London."
        image="/assets/aboutimage.jpg"
      />
      <MetricsBanner />
      <Samecomponent />
    </>
  );
};

export default Page;
