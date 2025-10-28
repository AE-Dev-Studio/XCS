
import Image from "next/image";

interface CarSectionProps {
  title: string;
  description: string;
  images: string[];
}

const CarImageSection = ({ title, description, images }: CarSectionProps) => {
  return (
    <section className="bg-[#f2f2f2] py-12 px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-[#a89447] mb-4">
        {title}
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-10">{description}</p>

      <div className="flex justify-center flex-wrap gap-6 max-w-7xl mx-auto">
        {images.map((src, index) => (
          <div key={index} className="flex justify-center">
            <Image
              src={src}
              alt={`${title} image ${index + 1}`}
              width={400}
              height={300}
              className="rounded-lg shadow-md object-cover max-h-[50vh]"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CarImageSection;
