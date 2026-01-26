import ServicesSlider from "./ServicesSlider"
import { servicesData } from "../data/servicesData"

const ServiceHelps = () => {
    return (
        <>
            <section className="
                pt-[0.5rem] sm:pt-[0.5rem] lg:pt-[0.3rem] xl:pt-[0.4rem] 2xl:pt-[0.5rem]
                px-[7%]
                pb-[0.5rem] sm:pb-[0.5rem] lg:pb-[0.3rem] xl:pb-[0.4rem] 2xl:pb-[15rem]
                bg-red-200
            ">
                <h3 className="
                    text-center text-[#0764f9] font-[600]
                    text-[1.6rem] sm:text-[2rem] lg:text-[2.7rem] xl:text-[3.1rem] 2xl:text-[3.5rem]
                ">
                    Service Helps
                </h3>
                <p className="
                    text-center text-[#000] font-[500]
                    text-[1.1rem] sm:text-[1.3rem] lg:text-[1.05rem] xl:text-[1.2rem] 2xl:text-[1.3rem]
                    mt-[0.5rem] sm:mt-[1rem] lg:mt-[0.8rem] xl:mt-[0.9rem] 2xl:mt-[1rem]
                    mx-auto
                    w-[100%] sm:w-[50%]
                ">
                    Trust grows when experiences are real. We believe in sharing genuine stories that reflect meaningful partnerships, real outcomes, and the value of working together.
                </p>

                <div className="services-slider">
                    <ServicesSlider servicesData={servicesData} />
                </div>
            </section>
        </>
    )
}

export default ServiceHelps
