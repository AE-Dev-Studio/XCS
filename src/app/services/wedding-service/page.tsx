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
      <Herobg text="Wedding Service" image="/assets/airporthero.jpg" />
      <Sendmessagesection
        heading="Elegance Redefined with CCS Chauffeurs - Your Premier Wedding Car Service"
        paragraph="Welcome to CSS Chauffeurs, where we bring dreams to life with our exceptional wedding car services in Manchester and London. As luxury wedding car hire specialists, we understand the importance of creating a memorable and enchanting experience for your special day."
      />
      <Resusablefleet />
      <Getaqoutesection
        heading="Luxury Wedding Car Hire in Manchester - Your Journey to Forever Begins Here"
        paragraph="At CCS Chauffeurs, we pride ourselves on offering a captivating array of luxury wedding car hire options in Manchester. From timeless classics to modern marvels, our fleet is meticulously maintained to ensure your journey to the altar is as glamorous and unforgettable as the day itself. Trust our chauffeur wedding services to add a touch of sophistication to your wedding day.."
      />
      <CardLikeBanner
        colorheading="Ride"
        plainheading="in style"
        paragraph="Place your trust in us for VIP chauffeur hire and enjoy an unforgettable journey."
      />
      <TextImageSection
        heading="Chic Wedding Transport in London - Exclusive Elegance Unveiled"
        paragraph="Extend the enchantment to London with our luxury wedding car hire services. Our chauffeur service for weddings in London is tailored to complement the city’s cosmopolitan charm. With CCS Chauffeurs, your wedding chauffeur ensures a seamless and stylish journey, making your entrance as memorable as the celebration."
        image="/assets/weddingeventcar.jpg"
      />
      <MetricsBanner />
      <Samecomponent />
    </>
  );
};

export default Page;
