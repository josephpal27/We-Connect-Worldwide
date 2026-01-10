import Brands from "../components/Brands"
import OnePlatform from "../components/OnePlatform"
import OurServices from "../components/OurServices"
import SmartConnections from "../components/SmartConnections"
import Testimonials from "../components/Testimonials"

const Home = () => {
  return (
    <>
      {/* Banner */}
      <section className="relative">
        <img src="/images/home-banner.png" alt="Home Banner" className="
          w-[100%] h-[88vh] object-cover
        " />
        <div className="
          absolute top-0 left-0 w-[100%] h-[100%] px-[7%] d-flex flex-col justify-center bg-[#0155dc56]
        ">
          <h1 className="
            text-[1rem] lg:text-[3.2rem] xl:text-[3.6rem] 2xl:text-[4rem]
            text-[#fff] 
            font-[600] 
            mt-[1rem] lg:mt-[0.5rem] xl:mt-[0.8rem] 2xl:mt-[1rem]
          ">
            Connecting <span>Businesses</span> <br /> and People Through <span>Smart Solutions</span>
          </h1>
          <p className="
            w-[45%] 
            text-[#fff] 
            text-[1.2rem] lg:text-[0.95rem] xl:text-[1.1rem] 2xl:text-[1.2rem]
            font-[600] 
            mt-[2rem] lg:mt-[1.5rem] xl:mt-[1.8rem] 2xl:mt-[2rem]
          ">
            From high-performance technology and cybersecurity to trusted visa and passport services, we enable seamless connectivity, secure systems, and global mobility.
          </p>
          <button className="
            w-max 
            bg-[#fff]
            text-[#0764f9] 
            text-[1.2rem] lg:text-[0.95rem] xl:text-[1.1rem] 2xl:text-[1.2rem]
            font-[600] 
            px-[2.8rem] lg:px-[2.4rem] xl:px-[2.6rem] 2xl:px-[2.8rem]
            py-[1rem] lg:py-[0.8rem] xl:py-[0.9rem] 2xl:py-[1rem]
            rounded-[30px] 
            mt-[2rem] lg:mt-[1.5rem] xl:mt-[1.8rem] 2xl:mt-[2rem]
            hover:bg-[#0764f9] hover:text-[#fff]
            shadow-[0_5px_15px_rgba(0,0,0,0.35)]
            transition
          ">
            Explore Services
          </button>
        </div>
      </section>

      {/* Smart Connections */}
      <SmartConnections />

      {/* Services */}
      <OurServices />

      {/* Brands */}
      <Brands />

      {/* One Platform */}
      <OnePlatform />

      {/* Testimonials */}
      <Testimonials />
    </>
  )
}

export default Home
