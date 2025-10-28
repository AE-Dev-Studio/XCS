import MetricsBanner from '@/components/aboutpagecomponents/metricsbanner'
import CardLikeBanner from '@/components/cardlikebanner'
import BookSection from '@/components/fleet/fleetsubpagecomponents/booksection'
import CarImageSection from '@/components/fleet/fleetsubpagecomponents/carimagesection'
import Herobg from '@/components/herobg'
import Samecomponent from '@/components/services/subpagescomponents/samecomponent'
import SendMessageSection from '@/components/services/subpagescomponents/sendmessagesection'
import React from 'react'

const Page = () => {
  return (
    <>
    <Herobg text='Mercedes V Class' image='/assets/fleetpage/mercedes-v-class/heroimage.jpg'/>
    <SendMessageSection heading='Mercedes V-Class: The Luxury People Carrier' paragraph='Experience the ultimate blend of luxury, comfort, and practicality with the Mercedes V-Class. This premium MPV offers spacious seating for up to eight passengers, making it perfect for family outings or corporate travel. With its elegant design, advanced safety features, and state-of-the-art technology, the V-Class redefines travel, ensuring every journey is as enjoyable as it is stylish. Whether you’re navigating city streets or embarking on long road trips, the Mercedes V-Class is your ideal companion for any adventure'/>
    <CardLikeBanner colorheading='Ride' plainheading='in Style' paragraph='Place your trust in us for VIP chauffeur hire and enjoy an unforgettable journey.'/>
    <BookSection
      title="Book Your Mercedes V Class"
      bullets={[
        "Seat 6 Passengers",
        "Electric option",
        "6 suitcases",
        "Onboard WiFi",
      ]}
      features={[
        "First class Chauffeur",
        "Free 60 mins waiting time for airport pickups, 15 mins for all others",
        "Includes meet & greet",
        "Free 60 mins airport parking",
      ]}
      rentals={[
        { label: "Hourly rate (minimum 6 hours)", price: "£55" },
        { label: "Day rate (8 hours)", price: "£440" },
        { label: "Manchester Airport to Central Manchester", price: "£100" },
      ]}
      carImage="/assets/fleetpage/mercedes-v-class/bookcar.png"
    />
    <MetricsBanner />
    <CarImageSection title='Mercedes V-Class: The Pinnacle of Luxury and Versatility' description='The Mercedes V-Class combines elegance and versatility, offering spacious seating for up to eight passengers. With advanced technology and premium features, it ensures every journey is comfortable and stylish, perfect for both family outings and corporate travel' images={["/assets/fleetpage/mercedes-v-class/image1.jpg","/assets/fleetpage/mercedes-v-class/image2.jpg","/assets/fleetpage/mercedes-v-class/image3.jpg"]}/>
    <Samecomponent />
    </>
  )
}

export default Page
