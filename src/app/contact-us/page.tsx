"use client"

import ContactDetails from "@/components/contactpagecomponents/contactdetails"
import Contactsectionhero from "@/components/contactpagecomponents/contactsectionhero"
import LetsConnectSection from "@/components/contactpagecomponents/letsconnnectsection"
import Footer from "@/components/footer/footer"

function ContactUs() {
  return (
    <>
    <Contactsectionhero />
    <ContactDetails />
    <LetsConnectSection />
    <Footer />
    </>
  )
}

export default ContactUs
