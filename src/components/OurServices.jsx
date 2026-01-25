import ServicesSlider from "./ServicesSlider"
import { servicesData } from "../data/servicesData"

const OurServices = () => {
    return (
        <>
            <section className="
                pt-[1rem] lg:pt-[0] xl:pt-[0.5rem] 2xl:pt-[0.5rem]
                px-[7%]
                pb-[5rem] lg:pb-[4rem] xl:pb-[4.5rem] 2xl:pb-[5rem]
            ">
                <h3 className="
                    text-center text-[#0764f9] font-[600]
                    text-[2rem] lg:text-[2.7rem] xl:text-[3.1rem] 2xl:text-[3.5rem]
                ">
                    Services
                </h3>
                <p className="
                    text-center text-[#000] font-[500]
                    text-[1.3rem] lg:text-[1.05rem] xl:text-[1.2rem] 2xl:text-[1.3rem]
                    mt-[1rem] lg:mt-[0.8rem] xl:mt-[0.9rem] 2xl:mt-[1rem]
                    mx-auto
                    w-[50%]
                ">
                    We Connect partners with businesses to simplify complexity and create meaningful progress.
                </p>

                <div className="services-slider">
                    <ServicesSlider servicesData={servicesData} />
                </div>
            </section>
        </>
    )
}

export default OurServices
