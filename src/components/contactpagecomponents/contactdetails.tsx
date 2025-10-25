import { Mail, MapPin, PhoneCall } from "lucide-react"
import { ContactInfoCard } from "./contactinfocard"

const details = [
    {
        icon: PhoneCall,
        link: "https://www.google.com", //replace with actual link
        description:
            "074 9736 3737 , 0161 327 4241, 0800 061 4940",
    },
    {
        icon: Mail,
        link: "https://www.google.com", //replace with actual link
        description:
            "info@xclusivechauffeurs.co.uk",
    },
    {
        icon: MapPin,
        link: "https://www.google.com", //replace with actual link
        description:
            "Xclusive Chauffeur Services, United Kingdom",
    },
 
]


const ContactDetails = () => {
    return (
        <div className='h-full  bg-gray-200 py-10 flex flex-col gap-5 items-center justify-center'>
            <h1 className=' font-extrabold text-center text-4xl  tracking-wide'>Contact Details</h1>
            <p className="text-center mx-2">Connect with us for any queries or to book your ride</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 px-3">
            {details.map((item, index) => (
                                    <ContactInfoCard key={index} {...item} />
            ))}
            </div>
        </div>
    )
}

export default ContactDetails
