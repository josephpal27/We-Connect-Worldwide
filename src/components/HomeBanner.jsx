import { Link } from 'react-router-dom';

const HomeBanner = () => {
  return (
    <>
      <section className="relative">
        <img
          src="/images/home-banner.png"
          alt="Home Banner"
          className="
          w-[100%] object-cover
          h-[auto] sm:h-[88vh]
        "
        />
        <div
          className="
          relative sm:absolute
          top-0 left-0 w-[100%] h-[100%] d-flex flex-col justify-center sm:bg-[#0155dc56]
          px-[1rem] sm:px-[5%] lg:px-[7%]
        "
        >
          <h1
            className="
            text-[1.3rem] sm:text-[1rem] lg:text-[3.2rem] xl:text-[3.6rem] 2xl:text-[4rem]
            text-[#fff]
            font-[600] 
            mt-[-4.2rem] sm:mt-[1rem] lg:mt-[0.5rem] xl:mt-[0.8rem] 2xl:mt-[1rem]
          "
          >
            Connecting <span>Businesses</span> <br /> and People Through <span>Smart Solutions</span>
          </h1>
          <p
            className="
            w-[100%] sm:w-[45%]
            text-[#000] sm:text-[#fff] 
            text-[1.1rem] sm:text-[1.2rem] lg:text-[0.95rem] xl:text-[1.1rem] 2xl:text-[1.2rem]
            font-[500] sm:font-[600]
            mt-[2rem] lg:mt-[1.5rem] xl:mt-[1.8rem] 2xl:mt-[2rem]
          "
          >
            From high-performance technology and cybersecurity to trusted visa
            and passport services, we enable seamless connectivity, secure
            systems, and global mobility.
          </p>
          <Link
            to="/services"
            className="
            w-max 
            bg-[#fff]
            text-[#0764f9] 
            text-[1.1rem] sm:text-[1.2rem] lg:text-[0.95rem] xl:text-[1.1rem] 2xl:text-[1.2rem]
            font-[500] sm:font-[600]
            px-[1.1rem] sm:px-[2.8rem] lg:px-[2.4rem] xl:px-[2.6rem] 2xl:px-[2.8rem]
            py-[0.5rem] sm:py-[1rem] lg:py-[0.8rem] xl:py-[0.9rem] 2xl:py-[1rem]
            rounded-[30px] 
            mt-[1.2rem] sm:mt-[2rem] lg:mt-[1.5rem] xl:mt-[1.8rem] 2xl:mt-[2rem]
            hover:translate-y-[-5px]
            shadow-[0_5px_15px_rgba(0,0,0,0.35)]
            transition
          "
          >
            Explore Services
          </Link>
        </div>
      </section>
    </>
  );
};

export default HomeBanner;
