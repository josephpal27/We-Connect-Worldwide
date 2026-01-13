import MissionVision from "../components/MissionVision"
import OurTeam from "../components/OurTeam"
import WhyChooseUs from "../components/WhyChooseUs"

const About = () => {
    return (
        <>
            {/* Banner */}
            <section className="relative">
                <img src="/images/about-banner.png" alt="About Banner" className="
                    w-[100%] h-[88vh] object-cover
                " />
                <div className="
                    absolute top-0 left-0 w-[100%] h-[100%] px-[7%] d-flex flex-col justify-end
                    pb-[5rem]
                ">
                    <h1 className="
                        text-[1rem] lg:text-[3.2rem] xl:text-[3.6rem] 2xl:text-[4rem]
                        text-[#fff] font-[600] 
                        mt-[1rem] lg:mt-[0.5rem] xl:mt-[0.8rem] 2xl:mt-[1rem]
                    ">
                        About <span className="text-[#fff]">Us</span>
                    </h1>
                    <p className="
                        w-[55%] 
                        text-[#fff] font-[600] 
                        text-[1.2rem] lg:text-[0.95rem] xl:text-[1.1rem] 2xl:text-[1.2rem]
                        mt-[1rem] lg:mt-[0.5rem] xl:mt-[0.8rem] 2xl:mt-[1rem]
                    ">
                        We are a comprehensive B2B service provider committed to enabling businesses to operate smarter, faster, and more securely in an increasingly connected world. Our strength lies in delivering integrated business solutions that support communication, connectivity, security, mobility, financial operations, and digital transformation — all under one trusted umbrella.
                    </p>
                </div>
            </section>

            {/* Mission Vision */}
            <MissionVision />

            {/* Why Choose Us */}
            <WhyChooseUs />

            {/* Our Team */}
            <OurTeam />
        </>
    )
}

export default About
