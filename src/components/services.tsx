import { ServiceCard } from "./service-card";

const services = [
  {
    title: "Airport Chauffeur Manchester",
    description:
      "Professional airport transfers with punctual, reliable service. Experience seamless travel to and from Manchester Airport with our premium fleet.",
    imageSrc: "/assets/Services/1.jpg",
  },
  {
    title: "Corporate Services",
    description:
      "Executive transportation for business professionals. Impress clients and colleagues with our sophisticated corporate chauffeur solutions.",
    imageSrc: "/assets/Services/2.jpg",
  },
  {
    title: "Event Chauffeur",
    description:
      "Elegant transportation for weddings, galas, and special occasions. Arrive in style and make your event unforgettable with our premium service.",
    imageSrc: "/assets/Services/3.jpg",
  },
  {
    title: "Close Protection",
    description:
      "Discreet and professional security-focused transportation. Our trained chauffeurs provide secure, confidential travel for VIP clients.",
    imageSrc: "/assets/Services/4.jpg",
  },
  {
    title: "Wedding Chauffeur",
    description:
      "Make your special day unforgettable with our dedicated wedding chauffeur service. Premium vehicles and professional drivers for your celebration.",
    imageSrc: "/assets/Services/5.jpg",
  },
  {
    title: "Luxury Car Rent",
    description:
      "Rent our exclusive fleet of luxury vehicles for any occasion. Experience premium comfort and style with our high-end automobile collection.",
    imageSrc: "/assets/Services/6.jpg",
  },
];

export function OurServicesSection() {
  return (
    <section className="w-full py-20 px-6 md:px-12 bg-black">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-balance text-white">
          Our <span className="text-[#c1b16e]">Services</span>{" "}
        </h2>
        <div className="w-25 h-1 bg-white text-center mx-auto" />
      </div>

      <div className="max-w-8xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            imageSrc={service.imageSrc}
          />
        ))}
      </div>
    </section>
  );
}
