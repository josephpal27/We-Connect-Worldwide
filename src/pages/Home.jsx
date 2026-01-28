import Brands from "../components/Brands"
import Consultation from "../components/Consultation"
import HomeBanner from "../components/HomeBanner"
import OnePlatform from "../components/OnePlatform"
import OurServices from "../components/OurServices"
import SmartConnections from "../components/SmartConnections"
// import Testimonials from "../components/Testimonials"

const Home = () => {
  return (
    <>
      <HomeBanner />
      <SmartConnections />
      <OurServices />
      <Brands />
      <OnePlatform />
      {/* <Testimonials /> */}
      <Consultation />
    </>
  )
}

export default Home
