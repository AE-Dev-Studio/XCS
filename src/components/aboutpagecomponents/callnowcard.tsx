import { PhoneCall } from "lucide-react"
import Link from "next/link"



const Callnowcard = () => {
  return (

    <div className="absolute bottom-0 left-[80%] -translate-x-1/2 bg-black border-10 border-white p-4 flex gap-3 items-center w-3/4 sm:w-1/2">
      <PhoneCall size={24} color="#a89447" />
      <div className="flex flex-col">
        <h2 className="text-[#a89447] text-xl sm:text-2xl font-semibold">Contact Us</h2>
        <Link href="tel:07497363737" className="text-muted-foreground hover:text-[#a89447] transition">
          074 9736 3737
        </Link>
      </div>
    </div>

  )
}

export default Callnowcard

