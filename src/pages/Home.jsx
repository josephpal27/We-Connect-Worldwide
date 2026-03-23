import Brands from "../components/home/Brands"
import Consultation from "../components/home/Consultation"
import HomeBanner from "../components/home/HomeBanner"
import OnePlatform from "../components/home/OnePlatform"
import OurServices from "../components/home/OurServices"
import SmartConnections from "../components/home/SmartConnections"
// import Testimonials from "../components/home/Testimonials"

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
