import brickImg from '../assets/images/brick.png';
import keyImg from '../assets/images/key.png';

let whyChooseUsData = [
    {
        id: 1,
        data: "Dedicated B2B-focused service model",
    },
    {
        id: 2,
        data: "Comprehensive range of integrated business solutions",
    },
    {
        id: 3,
        data: "Reliable, secure, and scalable services",
    },
    {
        id: 4,
        data: "Experienced professionals and industry expertise",
    },
    {
        id: 5,
        data: "Single-point management for multiple business needs",
    },
]

const WhyChooseUs = () => {
    return (
        <>
            <section className="
                px-[7%]
                py-[2rem] lg:py-[1rem] xl:py-[1.5rem] 2xl:py-[2rem]
                d-flex justify-between flex-wrap
            ">
                <div className="
                    w-[50%]
                ">
                    <h3 className="
                        text-[1rem] lg:text-[3.2rem] xl:text-[3.6rem] 2xl:text-[4rem]
                        font-[600] text-[#0764f9]
                    ">
                        Why <br /> <span className="text-[#0764f9]">Choose Us</span>
                    </h3>
                    <ul className="
                        mt-[2rem] lg:mt-[1.6rem] xl:mt-[1.8rem] 2xl:mt-[2rem]
                        list-disc
                    ">
                        {
                            whyChooseUsData.map((item, index) => (
                                <li key={index} className="
                                    text-[1.2rem] lg:text-[0.95rem] xl:text-[1.1rem] 2xl:text-[1.2rem]
                                    text-[#000] font-[500]
                                    mb-[0.5rem]
                                ">
                                    {item.data}
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="
                    w-[45%]
                    d-flex
                ">
                    <div className="
                        w-[50%]
                        mt-[1rem]
                    ">
                        <img src={brickImg} alt="Brick Image" loading="lazy" className="
                            w-full 
                            scale-[1.2]
                            shadow-[0_5px_15px_0px_rgba(0,0,0,0.15)]
                            rounded-[40px] lg:rounded-[40px] xl:rounded-[45px] 2xl:rounded-[50px]
                        " />
                    </div>
                    <div className="
                        d-flex
                        w-[50%]
                        items-end
                        mt-[12rem] lg:mt-[10rem] xl:mt-[11rem] 2xl:mt-[12rem]
                        mr-[1.7rem] lg:mr-[1.4rem] xl:mr-[1.5rem] 2xl:mr-[1.7rem]
                    ">
                        <img src={keyImg} alt="Key Image" loading="lazy" className="
                            w-full 
                            scale-[1.2]
                            shadow-[0_5px_15px_0px_rgba(0,0,0,0.15)]
                            rounded-[40px] lg:rounded-[40px] xl:rounded-[45px] 2xl:rounded-[50px]
                        " />
                    </div>
                </div>
            </section>
        </>
    )
}

export default WhyChooseUs
