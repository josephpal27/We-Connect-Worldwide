import team1 from '../assets/images/team/1.png';
import team2 from '../assets/images/team/2.png';
import team3 from '../assets/images/team/3.png';

let teamData = [
    {
        id: 1,
        image: team1,
        name: "John Elia",
        designation: "(Team head)",
        para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut.",
    },
    {
        id: 2,
        image: team2,
        name: "John Elia",
        designation: "(Team head)",
        para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut.",
    },
    {
        id: 3,
        image: team3,
        name: "John Elia",
        designation: "(Team head)",
        para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut.",
    },
]

const OurTeam = () => {
    return (
        <>
            <section className="
                px-[7%]
                pt-[2rem] lg:pt-[2rem] xl:pt-[2.5rem] 2xl:pt-[3rem]
                pb-[4rem] lg:pb-[4rem] xl:pb-[4.5rem] 2xl:pb-[5rem]
            ">
                <div className="
                    d-flex flex-col items-center
                ">
                    <h4 className="
                        text-[1rem] lg:text-[3.2rem] xl:text-[3.6rem] 2xl:text-[4rem]
                        font-[600] text-[#0764f9]
                    ">
                        Our Team
                    </h4>
                    <p className="
                        text-[1.2rem] lg:text-[0.95rem] xl:text-[1.1rem] 2xl:text-[1.2rem]
                        font-[500] text-[#000]
                        w-[60%]
                        mt-[1rem] lg:mt-[0.6rem] xl:mt-[0.8rem] 2xl:mt-[1rem]
                        text-center
                    ">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                    </p>
                </div>
                <div className="
                    d-flex justify-between flex-wrap
                    mt-[2rem] lg:mt-[2.3rem] xl:mt-[2.6rem] 2xl:mt-[3rem]
                ">
                    {
                        teamData.map((item, index) => (
                            <div key={index} className="
                                w-[31.5%]
                                rounded-[50px] lg:rounded-[60px] xl:rounded-[65px] 2xl:rounded-[70px]
                                overflow-hidden
                            ">
                                <div>
                                    <img src={item.image} alt="Team Member" loading="lazy" className="
                                        w-full mt-[-2px]
                                    " />
                                </div>
                                <div className="
                                    bg-[#0764f9]
                                    px-[1rem] lg:px-[0.9rem] xl:px-[1.1rem] 2xl:px-[1.3rem]
                                    py-[1.5rem] lg:py-[1.6rem] xl:py-[1.8rem] 2xl:py-[2rem]
                                    text-[#fff]
                                    d-flex flex-col items-center
                                ">
                                    <span className="
                                        text-[1.5rem] lg:text-[1.3rem] xl:text-[1.4rem] 2xl:text-[1.5rem]
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
                                        mt-[0.7rem]
                                        text-[1.1rem] lg:text-[0.9rem] xl:text-[1rem] 2xl:text-[1.1rem]
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