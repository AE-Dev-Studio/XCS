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
    <Herobg text='Mercedes E Class' image='/assets/fleetpage/mercedes-e-class/heroimage.jpg'/>
    <SendMessageSection heading='Hire Mercedes E-class With CCS' paragraph='All of our Mercedes E-Class cars are regularly maintained by Mercedes-Benz and feature many high-spec accessories. Wherever you want to travel to in and around Manchester or beyond , this Mercedes chauffeur car will be perfect for the task. From chauffeur-driven Manchester airport transfers to Corporate hire and “as directed” private hire for comfort and luxury.MERCEDES E CLASS CHAUFFEUR CAR INTERIOR The E-Class offers luxurious leather trim with space for up to four passengers. Comfortable and stylish business class transport. The affordable Mercedes-Benz E Class Chauffeur Car has a wonderful interior space. Leather trim and air-conditioning make the E Class a very comfortable and luxurious transport. AFFORDABLE EXECUTIVE TRAVEL The E-Class Mercedes chauffeur car offers top-notch luxury at a very affordable price. The leather interior and air-conditioning, great ride and comfort. The in car entertainment alone will help make even the longest journeys more pleasurable. If you prefer things a little quieter, the acoustic design, and low cabin noise all help in keeping the sounds out so you can enjoy a silent and serene ride.'/>
    <CardLikeBanner colorheading='Ride' plainheading='in Style' paragraph='Place your trust in us for VIP chauffeur hire and enjoy an unforgettable journey.'/>
    <BookSection
      title="Book Your Mercedes E Class"
      bullets={[
        "Seat 4 Adults",
        "2 med. suitcases",
        "Hybrid Option",
        "Onboard WiFi",
      ]}
      features={[
        "First class Chauffeur",
        "Free 60 mins waiting time for airport pickups, 15 mins for all others",
        "Free cancellation within 24 hours",
        "Free 60 mins airport parking",
      ]}
      rentals={[
        { label: "Hourly rate (minimum 6 hours)", price: "£40" },
        { label: "Day rate (8 hours)", price: "£320" },
        { label: "Manchester Airport to Central Manchester", price: "£750" },
      ]}
      carImage="/assets/fleetpage/mercedes-e-class/bookcar.png"
    />
    <MetricsBanner />
    <CarImageSection title='Business Mercedes E Class' description='The Mercedes E Class is a luxury sedan car from the Mercedes-Benz family. It has a sleek design, comfortable seating, and a powerful engine.' images={["/assets/fleetpage/mercedes-e-class/image1.jpg","/assets/fleetpage/mercedes-e-class/image2.jpg"]}/>
    <Samecomponent />
    </>
  )
}

export default Page
