
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
                py-[5rem] px-[7%]
            ">
                <h2 className="
                    text-center
                    text-[4rem]
                ">
                    We Build <span>Smart Connections</span> for the <br /> <span className="text-[#0764f9]">Future of Business</span>
                </h2>
                <p className="
                    text-[#000] 
                    text-[1.3rem]
                    font-[500] 
                    text-center
                    w-[50%]
                    mx-auto
                    mt-[1rem]
                ">
                    We Connect is a leading B2B service provider delivering integrated tech and business solutions to keep your operations secure, connected, and future-ready.
                </p>
                <div className="
                    d-flex justify-between flex-wrap
                    mt-[3rem]
                ">
                    {
                        smartConnectionsContent.map((item, index) => (
                            <div className="
                                w-[31%]
                                px-[1rem]

                            " key={index}>
                                <span className="
                                    d-block text-center text-[#0764f9] font-[600]
                                    text-[2rem]
                                ">
                                    {item.title}
                                </span>
                                <p className="
                                    text-center text-[#000] font-[500]
                                    text-[1.2rem]
                                    mt-[0.5rem]
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
