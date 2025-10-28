import { XclusiveSlider } from "@/components/fleet/servicesFleet";
const Resusablefleet = () => {
  return (
    <div className="h-full w-full pt-30 pb-10 px-20 bg-black flex flex-col items-center justify-center">
      <h1 className="text-white text-3xl md:text-4xl lg:text-[2.7vw] font-extrabold">
        London’s Premier Luxury Chauffeur Service
      </h1>
      <XclusiveSlider />
    </div>
  );
};

export default Resusablefleet;
