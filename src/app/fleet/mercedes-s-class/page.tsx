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
    <Herobg text='Mercedes S Class' image='/assets/fleetpage/mercedes-s-class/mercedes-s-class-hero.jpg'/>
    <SendMessageSection heading='Hire Mercedes S-class With CCS' paragraph='Mercedes have produced a sumptuous, beautifully appointed interior. Chauffeur driven passengers can enjoy a haven of peace and relaxation. The S-Class is quiet, spacious, and equipped with a wealth of technology which gives the passengers the smoothest ride imaginable. Four passengers can be chauffeured in complete comfort. Our long-wheelbase Mercedes S-Class have plenty of room to stretch out in the back. All have luxurious leather interior and most have Executive adjustable rear seating packages. All vehicles have free Wifi, ambient lighting and rear climate control for your total comfort and many have panoramic sunroofs as well as TV / DVD systems. Chauffeur Drive Car Complimentary Bottled Water Meet & Greet Free WIFI Mercedes S Class / or Similar'/>
    <CardLikeBanner colorheading='Ride' plainheading='in Style' paragraph='Place your trust in us for VIP chauffeur hire and enjoy an unforgettable journey.'/>
    <BookSection
      title="Book Your Mercedes S Class"
      bullets={[
        "2/3 Passengers",
        "Electric option",
        "2 suitcases",
        "Onboard WiFi",
      ]}
      features={[
        "First class Chauffeur",
        "Free 60 mins waiting time for airport pickups, 15 mins for all others",
        "Free cancellation within 24 hours",
        "Free 60 mins airport parking",
      ]}
      rentals={[
        { label: "Hourly rate (minimum 6 hours)", price: "£60" },
        { label: "Day rate (8 hours)", price: "£480" },
        { label: "Manchester Airport to Central Manchester", price: "£125" },
      ]}
      carImage="/assets/fleetpage/mercedes-s-class/bookcar.png"
    />
    <MetricsBanner />
    <CarImageSection title='Business Mercedes S Class' description='The Mercedes S Class is a luxury sedan car from the Mercedes-Benz family. It has a sleek design, comfortable seating, and a powerful engine' images={["/assets/fleetpage/mercedes-s-class/image1.jpg","/assets/fleetpage/mercedes-s-class/image2.jpg","/assets/fleetpage/mercedes-s-class/image3.jpg"]}/>
    <Samecomponent />
    </>
  )
}

export default Page
