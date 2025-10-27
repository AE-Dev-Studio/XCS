import MessageForm from "./messageform";
import Link from "next/link";

interface Props {
  heading: string;
  paragraph: string;
  buttonText?: string;
  buttonLink?: string;
}

const SendMessageSection = ({
  heading,
  paragraph,
  buttonText = "Call Now!",
  buttonLink = "tel: 07803553793",
}: Props) => {
  return (
    <section className="w-full h-full py-20 px-25 grid lg:grid-cols-2 grid-cols-1 gap-10 items-center bg-white">
      {/* Left Side: Text Content */}
      <div className="flex flex-col gap-6">
        <h1 className="font-extrabold text-3xl md:text-4xl lg:text-[2.7vw] leading-snug text-black">
          {heading}
        </h1>
        <p className="text-gray-700 leading-relaxed text-base md:text-lg">
          {paragraph}
        </p>
        <Link
          href={buttonLink}
          className="mt-4 inline-block bg-black text-white font-semibold px-8 py-3 rounded-full shadow-md hover:bg-gray-900 transition-all duration-300 w-fit"
        >
          {buttonText.toUpperCase()}
        </Link>
      </div>

      {/* Right Side: Form */}

        <MessageForm />

    </section>
  );
};

export default SendMessageSection;
