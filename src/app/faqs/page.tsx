import Herobg from "@/components/herobg";
import Link from "next/link";
import { ChevronRight } from "lucide-react"; // 👈 Lucide icon import
import Faq from "@/components/faqs/faqs";
export default function Page() {
  return (
    <>
      <div className="relative min-h-screen flex flex-col items-center justify-center px-6 text-white">
        <Herobg />

        <div className="relative z-10 max-w-5xl text-center space-y-6">
          <h1 className="font-sans text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-5xl">
            FAQ&apos;S
          </h1>
        </div>

        <ul className="relative top-5 z-10 flex items-center space-x-3 text-sm mb-4">
          <li>
            <Link href="\home" className="hover:underline text-gray-200">
              Home
            </Link>
          </li>
          <li>
            <ChevronRight className="w-4 h-4 text-[#a89447]" />{" "}
          </li>
          <li className="text-gray-100 font-medium">FAQ’s</li>
        </ul>
      </div>
      <Faq />
    </>
  );
}
