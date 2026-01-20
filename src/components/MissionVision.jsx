import moneyIcon from '../assets/images/money.png';

let missionVisionData = [
    {
        id: 1,
        image: moneyIcon,
        title: "Our Vision",
        desc: "We envision a future where businesses grow with clarity, stability, and confidence in an increasingly connected world.",
    },
    {
        id: 2,
        image: moneyIcon,
        title: "Our Mission",
        desc: "Our mission is to support businesses by simplifying complexity and delivering solutions that are reliable, thoughtful, and aligned with real business needs.",
    },
    {
        id: 3,
        image: moneyIcon,
        title: "Our Purpose",
        desc: "Our purpose is to create meaningful value for businesses by being a dependable presence they can rely on.",
    },
]

const MissionVision = () => {
    return (
        <>
            <section className="
                py-[3rem] lg:py-[4rem] xl:py-[4.5rem] 2xl:py-[5rem]
                px-[7%]
            ">
                <div className="
                    d-flex justify-between flex-wrap
                ">
                    <div className="
                        w-[45%]
                    ">
                        <h2 className="
                            text-[1rem] lg:text-[3.2rem] xl:text-[3.6rem] 2xl:text-[4rem]
                            font-[600] text-[#0764f9]
                        ">
                            Introducing <span className="text-[#0764f9]">The Best</span> World Wide <span className="text-[#0764f9]">Network Services</span>
                        </h2>
                    </div>
                    <div className="
                        w-[50%]
                    ">
                        <p className="
                            text-[1.2rem] lg:text-[0.95rem] xl:text-[1.1rem] 2xl:text-[1.2rem]
                            text-[#000] font-[500]
                        ">
                            With a deep understanding of enterprise requirements, we work exclusively with businesses to simplify complex operations, reduce operational risks, and enhance overall efficiency. From startups and growing enterprises to large organizations, we partner with our clients at every stage of their journey, providing reliable, scalable, and future-ready solutions tailored to their unique needs.
                        </p>
                    </div>
                </div>
                <div className="
                    d-flex justify-between flex-wrap
                    mt-[3rem] lg:mt-[3.2rem] xl:mt-[3.6rem] 2xl:mt-[4rem]
                ">
                    {
                        missionVisionData.map((item, index) => (
                            <div key={index} className="
                                w-[32%]
                                bg-[#0764f9]
                                d-flex justify-between items-center flex-wrap
                                py-[1rem] lg:py-[0.8rem] xl:py-[0.9rem] 2xl:py-[1rem]
                                px-[1.2rem] lg:px-[1.3rem] xl:px-[1.4rem] 2xl:px-[1.5rem]
                                rounded-[30px]
                                text-[#fff]
                                transition
                                hover:translate-y-[-5px]
                            ">
                                <div className="
                                    w-[17%]
                                ">
                                    <img src={item.image} alt="Icon" loading="lazy" className="w-full" />
                                </div>
                                <div className="
                                    w-[78%]
                                ">
                                    <span className="
                                        font-[700]
                                        text-[1.5rem] lg:text-[1.3rem] xl:text-[1.4rem] 2xl:text-[1.5rem]
                                    ">
                                        {item.title}
                                    </span>
                                    <p className="
                                        text-[1rem] lg:text-[0.8rem] xl:text-[0.9rem] 2xl:text-[1rem]
                                        mt-[0.7rem] lg:mt-[0.5rem] xl:mt-[0.6rem] 2xl:mt-[0.7rem]
                                    ">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
        </>
    )
}

export default MissionVision
