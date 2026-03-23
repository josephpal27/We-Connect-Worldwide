
const smartConnectionsContent = [
    {
        id: 1,
        title: "Vision",
        desc: "To become a trusted growth partner for businesses, enabling them to scale with clarity, confidence, and consistency in an ever-evolving market. We envision a future where businesses grow smarter, stronger, and more sustainably."
    },
    {
        id: 2,
        title: "Mission",
        desc: "To deliver reliable, result-driven solutions that simplify operations and empower businesses to focus on what truly matters—growth and impact. We work closely with our partners to turn challenges into opportunities through insight, innovation, and execution."
    },
    {
        id: 3,
        title: "Purpose",
        desc: "Our purpose is to support businesses at every stage by providing solutions that create long-term value, not just short-term results. We exist to build meaningful partnerships that help businesses move forward with clarity and trust."
    },
]

const SmartConnections = () => {
    return (
        <>
            <section className="
                pt-[2.5rem] sm:pt-[2rem] lg:pt-[4rem] xl:pt-[4.5rem] 2xl:pt-[5rem]
                px-[1rem] sm:px-[5%] lg:px-[7%]
            ">
                <h2 className="
                    text-center
                    font-[600] sm:font-[500]
                    text-[1.4rem] sm:text-[1rem] lg:text-[3.2rem] xl:text-[3.6rem] 2xl:text-[4rem]
                "
                    data-aos="fade-up"
                >
                    We Build <span className="text-[#000]">Smart Connections</span> for the <br /> <span className="text-[#0764f9]">Future of Business</span>
                </h2>
                <p className="
                    text-[#000] 
                    text-[1.1rem] sm:text-[1.3rem] lg:text-[1.05rem] xl:text-[1.2rem] 2xl:text-[1.3rem]
                    font-[500] 
                    text-center
                    w-[100%] sm:w-[50%]
                    mx-auto
                    mt-[0.7rem] sm:mt-[1rem]
                "
                    data-aos="fade"
                >
                    We Connect is a leading B2B service provider delivering integrated tech and business solutions to keep your operations secure, connected, and future-ready.
                </p>
                <div className="
                    d-flex justify-between flex-wrap
                    mt-[1.5rem] sm:mt-[3rem] lg:mt-[2.6rem] xl:mt-[2.8rem] 2xl:mt-[3rem]
                ">
                    {
                        smartConnectionsContent.map((item, index) => (
                            <div className="
                                w-[100%] sm:w-[31%] 
                                p-[0.6rem] sm:p-[1rem] lg:p-[1rem] xl:p-[1.1rem] 2xl:p-[1.2rem]
                                border
                                rounded-[12px]
                                shadow-[0_1px_4px_rgba(0,0,0,0.16)]
                                mb-[1rem] sm:mb-[0]

                            " 
                                key={index}
                                data-aos="fade"
                                >
                                <span className="
                                    d-block text-center text-[#0764f9] font-[600]
                                    text-[1.5rem] sm:text-[2rem] lg:text-[1.8rem] xl:text-[1.9rem] 2xl:text-[2rem]
                                ">
                                    {item.title}
                                </span>
                                <p className="
                                    text-center text-[#000] font-[500]
                                    text-[1.1rem] sm:text-[1.2rem] lg:text-[0.95rem] xl:text-[1.1rem] 2xl:text-[1.2rem]
                                    mt-[0.5rem] lg:mt-[0.4rem] xl:mt-[0.45rem] 2xl:mt-[0.5rem]
                                ">
                                    {item.desc}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </section>
        </>
    )
}

export default SmartConnections
