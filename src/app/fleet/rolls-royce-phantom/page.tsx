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
    <Herobg text='Rolls Royce Phantom' image='/assets/fleetpage/rolls-royce-phantom/heroimage.jpg'/>
    <SendMessageSection heading='Hire Rolls Royce Phantom With CCS' paragraph='The blend of plan and hand made production make this Rolls-Royce Phantom a dazzling and excellent driver driven vehicle. Worked to pamper its travelers in lavish luxury, you will realize you have shown up. Recruit a Rolls Royce Phantom escort driven vehicle, and you are ensured to show up in style. Everything about this widely praised configuration makes the Rolls-Royce Phantom the undisputed ‘best vehicle on the planet.’ From the hand made inside to the tremendous wheels, this vehicle deserves admiration like no other.Chauffeur Drive Car Meet & Greet Free WIFI Complimentary Bottled Water'/>
    <CardLikeBanner colorheading='Ride' plainheading='in Style' paragraph='Place your trust in us for VIP chauffeur hire and enjoy an unforgettable journey.'/>
    <BookSection
      title="Book Your Rolls Royce Phantom"
      bullets={[
        "Seat 3 Adults",
        "2 large suitcases",
        "Carry on bags",
        "Onboard WiFi",
      ]}
      features={[
        "First class Chauffeur",
        "Free 60 mins waiting time for airport pickups, 15 mins for all others",
        "Free cancellation within 24 hours",
        "Free 60 mins airport parking",
      ]}
      rentals={[
        { label: "Hourly rate (minimum 6 hours)", price: "£185" },
        { label: "Day rate (8 hours)", price: "£1480" },
        { label: "Manchester Airport to Central Manchester", price: "£550" },
      ]}
      carImage="/assets/fleetpage/rolls-royce-phantom/bookcar.png"
    />
    <MetricsBanner />
    <CarImageSection title='Luxury RR Phantom' description='The blend of plan and hand made production make this Rolls Royce Phantom a dazzling and excellent driver vehicle. Worked to pamper its travelers in lavish luxury, you will realize you have shown up.' images={["/assets/fleetpage/rolls-royce-phantom/image1.jpg","/assets/fleetpage/rolls-royce-phantom/image2.jpg","/assets/fleetpage/rolls-royce-phantom/image3.jpg"]}/>
    <Samecomponent />
    </>
  )
}

export default Page
