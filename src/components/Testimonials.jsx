import person1 from '../assets/images/testimonials/1.png';
import person2 from '../assets/images/testimonials/2.png';
import person3 from '../assets/images/testimonials/3.png';
import person4 from '../assets/images/testimonials/4.png';

let testimonialsData = [
    {
        id: 1,
        image: person1,
        name: "Aaliya Adams",
        message: "We Connect is a leading B2B service provider delivering integrated.",
    },
    {
        id: 2,
        image: person2,
        name: "Aaliya Adams",
        message: "We Connect is a leading B2B service provider delivering integrated.",
    },
    {
        id: 3,
        image: person3,
        name: "Aaliya Adams",
        message: "We Connect is a leading B2B service provider delivering integrated.",
    },
    {
        id: 4,
        image: person4,
        name: "Aaliya Adams",
        message: "We Connect is a leading B2B service provider delivering integrated.",
    }
]

const Testimonials = () => {
    return (
        <>
            <section className="
                px-[7%]
                py-[2rem] lg:py-[1rem] xl:py-[1.5rem] 2xl:py-[2rem]
            ">
                <div className="
                    d-flex flex-col items-center
                ">
                    <h5 className="
                        text-[#0764f9] font-[600]
                        text-[2rem] lg:text-[2.7rem] xl:text-[3.1rem] 2xl:text-[3.5rem]
                    ">
                        Testimonials
                    </h5>
                    <p className="
                        text-center text-[#000] font-[500]
                        text-[1.3rem] lg:text-[1.05rem] xl:text-[1.2rem] 2xl:text-[1.3rem]
                        mt-[1rem] lg:mt-[0.6rem] xl:mt-[0.8rem] 2xl:mt-[1rem]
                        w-[50%]
                    ">
                        We Connect is a leading B2B service provider delivering integrated tech and business solutions to keep your operations secure, connected, and future-ready.
                    </p>
                </div>
                <div className="
                    testimonials-row
                    mt-[5rem] lg:mt-[4rem] xl:mt-[4.5rem] 2xl:mt-[5rem]
                    d-flex flex-wrap justify-center items-start
                    gap-[10%]
                ">
                    {
                        testimonialsData.map((item, index) => (
                            <div key={index} className="
                                testimonial-box
                                w-[37%]
                                mb-[3rem] lg:mb-[3rem] xl:mb-[3.5rem] 2xl:mb-[4rem]
                                relative
                                overflow-hidden
                                rounded-[50px] lg:rounded-[60px] xl:rounded-[65px] 2xl:rounded-[70px]
                                group
                            ">
                                <img src={item.image} alt="Image" loading="lazy" />
                                <div className="
                                    absolute bottom-[0]
                                    bg-[#0764f9cd] text-[#fff]
                                    px-[2rem] lg:px-[2.1rem] xl:px-[2.3rem] 2xl:px-[2.5rem]
                                    pt-[2rem] lg:pt-[2.1rem] xl:pt-[2.3rem] 2xl:pt-[2.5rem]
                                    pb-[2rem] lg:pb-[1.9rem] xl:pb-[2.1rem] 2xl:pb-[2.3rem]
                                    rounded-t-[50px] lg:rounded-t-[55px] xl:rounded-t-[60px] 2xl:rounded-t-[65px]
                                    group-hover:pb-[5rem] lg:group-hover:pb-[4rem] xl:group-hover:pb-[4.5rem] 2xl:group-hover:pb-[5rem]
                                    transition-all duration-200
                                ">
                                    <span className="
                                        font-[700]
                                        text-[1.5rem] lg:text-[1.3rem] xl:text-[1.4rem] 2xl:text-[1.5rem]
                                    ">
                                        {item.name}
                                    </span>
                                    <p className="
                                        text-[1.2rem] lg:text-[0.95rem] xl:text-[1.1rem] 2xl:text-[1.2rem]
                                        mb-0
                                        mt-[0.5rem] lg:mt-[0.5rem] xl:mt-[0.6rem] 2xl:mt-[0.7rem]
                                    ">
                                        {item.message}
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

export default Testimonials