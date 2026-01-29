import userM from '../assets/images/team/user-m.avif';
import userF from '../assets/images/team/user-f.avif';

let teamData = [
    {
        id: 1,
        image: userF,
        name: "Tashi Palmo",
        designation: "(Team head)",
        para: "Brings strategic vision and hands-on expertise",
    },
    {
        id: 2,
        image: userM,
        name: "Nishant Nick Garg",
        designation: "(Team head)",
        para: "Leads with clarity, experience, and purpose",
    },
    {
        id: 3,
        image: userF,
        name: "Sonam Garg",
        designation: "(Team head)",
        para: "Focused on building quality at every level",
    },
]

const OurTeam = () => {
    return (
        <>
            <section className="
                px-[1rem] sm:px-[5%] lg:px-[7%]
                pt-[4rem] sm:pt-[2rem] lg:pt-[2rem] xl:pt-[2.5rem] 2xl:pt-[3rem]
                pb-[2rem] sm:pb-[4rem] lg:pb-[4rem] xl:pb-[4.5rem] 2xl:pb-[5rem]
            ">
                <div className="
                    d-flex flex-col items-center
                ">
                    <h4 className="
                        text-[1.5rem] sm:text-[1rem] lg:text-[3.2rem] xl:text-[3.6rem] 2xl:text-[4rem]
                        font-[600] text-[#0764f9]
                    ">
                        Our Team
                    </h4>
                    <p className="
                        text-[1.1rem] sm:text-[1.2rem] lg:text-[0.95rem] xl:text-[1.1rem] 2xl:text-[1.2rem]
                        font-[500] text-[#000]
                        w-full sm:w-[60%]
                        mt-[0.5rem] sm:mt-[1rem] lg:mt-[0.6rem] xl:mt-[0.8rem] 2xl:mt-[1rem]
                        text-center
                    ">
                        A team that works together with purpose and trust. <br className="hidden sm:inline" /> Connected by values, driven by results.
                    </p>
                </div>
                <div className="
                    d-flex justify-between flex-wrap
                    mt-[2rem] lg:mt-[2.3rem] xl:mt-[2.6rem] 2xl:mt-[3rem]
                ">
                    {
                        teamData.map((item, index) => (
                            <div key={index} className="
                                w-full sm:w-[31.5%]
                                rounded-[20px] lg:rounded-[20px] xl:rounded-[25px] 2xl:rounded-[30px]
                                overflow-hidden
                                shadow-[0_5px_15px_rgba(0,0,0,0.35)]
                                mb-[1.2rem] sm:mb-[0]
                            ">
                                <div className="px-[1rem] lg:p-[0.8rem] xl:p-[0.9rem] 2xl:p-[1rem]">
                                    <img src={item.image} alt="Team Member" loading="lazy" className="
                                        w-full
                                    " />
                                </div>
                                <div className="
                                    bg-[#0764f9]
                                    px-[1rem] lg:px-[0.9rem] xl:px-[1.1rem] 2xl:px-[1.3rem]
                                    py-[1rem] sm:py-[1.5rem] lg:py-[1.6rem] xl:py-[1.8rem] 2xl:py-[2rem]
                                    text-[#fff]
                                    d-flex flex-col items-center
                                ">
                                    <span className="
                                        text-[1.3rem] sm:text-[1.5rem] lg:text-[1.3rem] xl:text-[1.4rem] 2xl:text-[1.5rem]
                                        font-[600]
                                    ">
                                        {item.name}
                                    </span>
                                    <span className="
                                        text-[1rem] lg:text-[0.8rem] xl:text-[0.9rem] 2xl:text-[1rem]
                                        mt-[0.2rem]
                                    ">
                                        {item.designation}
                                    </span>
                                    <p className="
                                        text-center
                                        mt-[0.5rem] sm:mt-[0.7rem]
                                        text-[1.1rem] sm:text-[1rem] lg:text-[0.8rem] xl:text-[0.9rem] 2xl:text-[1rem]
                                    ">
                                        {item.para}
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

export default OurTeam