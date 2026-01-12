import BuildTrust from "../components/BuildTrust"
import OnePlatform from "../components/OnePlatform"
import WhyUs from "../components/WhyUs"


const Services = () => {
    return (
        <>
            {/* Banner */}
            <section className="relative">
                <img src="/images/services-banner.png" alt="Services Banner" className="
                    w-[100%] h-[88vh] object-cover
                " />
                <div className="
                    absolute top-0 left-0 w-[100%] h-[100%] px-[7%] d-flex flex-col justify-end bg-gradient-to-b from-[#00000016] to-[#000000d1]
                    pb-[5rem]
                ">
                    <h1 className="
                        text-[1rem] lg:text-[3.2rem] xl:text-[3.6rem] 2xl:text-[4rem]
                        text-[#fff] font-[600] 
                        mt-[1rem] lg:mt-[0.5rem] xl:mt-[0.8rem] 2xl:mt-[1rem]
                    ">
                        Powering Businesses <br /> with <span className="text-[#fff]">Reliable Connectivity</span> & <br /> <span className="text-[#fff]">Smart Solutions</span>
                    </h1>
                    <p className="
                        w-[40%] 
                        text-[#fff] font-[600] 
                        text-[1.2rem] lg:text-[0.95rem] xl:text-[1.1rem] 2xl:text-[1.2rem]
                        mt-[1rem] lg:mt-[0.5rem] xl:mt-[0.8rem] 2xl:mt-[1rem]
                    ">
                        Supporting seamless operations and confident growth across every stage of business.
                    </p>
                </div>
            </section>

            {/* Why Us */}
            <WhyUs />

            {/* Build Trust */}
            <BuildTrust />
        </>
    )
}

export default Services
