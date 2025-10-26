import AboutSectionAbout from "@/components/aboutpagecomponents/aboutsectionabout"
import Aboutsectionhero from "@/components/aboutpagecomponents/aboutsectionhero"
import Conveniencesection from "@/components/aboutpagecomponents/conveniencesection"
import MetricsBanner from "@/components/aboutpagecomponents/metricsbanner"
import XclusiveChauffers from "@/components/aboutpagecomponents/xclusivechauffers"
import CardLikeBanner from "@/components/cardlikebanner"
import Footer from "@/components/footer/footer"
import WhyChooseUsSection from "@/components/whychooseussection"

const Aboutus = () => {
  return (
    <>
        <Aboutsectionhero />
        <AboutSectionAbout />
        <CardLikeBanner colorheading="Book" plainheading="Your Chauffeur Today" paragraph="Reach out to us and book your luxury ride now."/>
        <Conveniencesection />
        <WhyChooseUsSection />
        <MetricsBanner />
        <XclusiveChauffers />
        <Footer />
    </>
  )
}

export default Aboutus
