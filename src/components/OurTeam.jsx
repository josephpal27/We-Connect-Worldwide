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
                pt-[3rem]
                pb-[5rem]
            ">
                <div className="
                    d-flex flex-col items-center
                ">
                    <h4 className="
                        text-[4rem]
                        font-[600] text-[#0764f9]
                    ">
                        Our Team
                    </h4>
                    <p className="
                        text-[1.2rem]
                        font-[500] text-[#000]
                        w-[60%]
                        mt-[1rem]
                        text-center
                    ">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                    </p>
                </div>
                <div className="
                    d-flex justify-between flex-wrap
                    mt-[3rem]
                ">
                    {
                        teamData.map((item, index) => (
                            <div key={index} className="
                                w-[31.5%]
                                rounded-[70px]
                                overflow-hidden
                            ">
                                <div>
                                    <img src={item.image} alt="Team Member" loading="lazy" className="
                                        w-full mt-[-2px]
                                    " />
                                </div>
                                <div className="
                                    bg-[#0764f9]
                                    px-[1.3rem]
                                    py-[2rem]
                                    text-[#fff]
                                    d-flex flex-col items-center
                                ">
                                    <span className="
                                        text-[1.5rem]
                                        font-[600]
                                    ">
                                        {item.name}
                                    </span>
                                    <span className="
                                        text-[1rem]
                                        mt-[0.2rem]
                                    ">
                                        {item.designation}
                                    </span>
                                    <p className="
                                        text-center
                                        mt-[0.7rem]
                                        text-[1.1rem]
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