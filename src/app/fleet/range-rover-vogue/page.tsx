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
    <Herobg text='Range Rover Vogue' image='/assets/fleetpage/range-rover-vogue/heroimage.jpg'/>
    <SendMessageSection heading='Hire Luxury Range Rover' paragraph='The Range Rover is so peaceful. The Range Rover Vogue Chauffeur Driven Car from Xclusive highlights the new fourth-age four-wheel drive, off-road Range Rover. An astoundingly flexible driver driven vehicle now with broadened back legroom makes the Range Rover a car for the individuals who like to be driven. The Range Rover Vogue chauffeur driver vehicle makes it ideal for games just as the Airport moves and evenings out. Enormous and roomy, it offers extravagance and style, however, with standard Land Rover all-wheel-drive abilities. Chauffeur Drive Car Meet & Greet Free WIFI Complimentary Bottled Water'/>
    <CardLikeBanner colorheading='Ride' plainheading='in Style' paragraph='Place your trust in us for VIP chauffeur hire and enjoy an unforgettable journey.'/>
    <BookSection
      title="Book Your Range Rover Vogue"
      bullets={[
        "Seat 4 Adults",
        "2 large suitcases",
        "Plugin Hybrid",
        "Onboard WiFi",
      ]}
      features={[
        "First class Chauffeur",
        "Free 60 mins waiting time for airport pickups, 15 mins for all others",
        "Free cancellation within 24 hours",
        "Free 60 mins airport parking",
      ]}
      rentals={[
        { label: "Hourly rate (minimum 6 hours)", price: "£90" },
        { label: "Day rate (8 hours)", price: "£720" },
        { label: "Manchester Airport to Central Manchester", price: "£275" },
      ]}
      carImage="/assets/fleetpage/range-rover-vogue/bookcar.png"
    />
    <MetricsBanner />
    <CarImageSection title='Business Mercedes E Class' description='The Mercedes E Class is a luxury sedan car from the Mercedes-Benz family. It has a sleek design, comfortable seating, and a powerful engine.' images={["/assets/fleetpage/range-rover-vogue/image1.jpg","/assets/fleetpage/range-rover-vogue/image2.jpg"]}/>
    <Samecomponent />
    </>
  )
}

export default Page
