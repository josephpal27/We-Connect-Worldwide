import { Link } from "react-router-dom"

const Consultation = () => {
    return (
        <>
            <section className="
                py-[2rem] sm:py-[3rem] lg:py-[4rem] xl:py-[4.5rem] 2xl:py-[5rem]
                px-[1rem] sm:px-[5%] lg:px-[7%]
                mt-[0.7rem] sm:mt-[1rem] lg:mt-[0.8rem] xl:mt-[0.9rem] 2xl:mt-[1rem]
                bg-[url('/images/consultation-bg.avif')] bg-cover
                d-flex flex-col items-center justify-center
            ">
                <h6 className="
                    text-[#fff] font-[600] text-center
                    text-[1.4rem] sm:text-[2rem] lg:text-[2.7rem] xl:text-[3.1rem] 2xl:text-[3.5rem]
                    w-full sm:w-[65%]
                ">
                    Building <span className="text-[#fff]">Smarter</span> Businesses for a Connected <span className="text-[#fff]">World</span>
                </h6>
                <p className="
                    text-[#fff] font-[500] sm:font-[600] text-center
                    text-[1.1rem] sm:text-[1.3rem] lg:text-[1.05rem] xl:text-[1.2rem] 2xl:text-[1.3rem]
                    w-full sm:w-[50%]
                    mt-[0.7rem] sm:mt-[1rem]
                ">
                    Through thoughtful collaboration, we help brands move forward with clarity, confidence, and consistency.
                </p>
                <Link to="/contact" className="
                    text-[#0764f9] bg-[#fff] rounded-[40px] font-[550] sm:font-[700]
                    py-[0.6rem] sm:py-[1.2rem] lg:py-[1rem] xl:py-[1.1rem] 2xl:py-[1.2rem]
                    px-[1.1rem] sm:px-[2.5rem] lg:px-[2.1rem] xl:px-[2.3rem] 2xl:px-[2.5rem]
                    mt-[1.5rem] sm:mt-[2rem] lg:mt-[1.8rem] xl:mt-[1.9rem] 2xl:mt-[2rem]
                    mb-[0.4rem]
                    text-[1.1rem] sm:text-[1.2rem] lg:text-[0.95rem] xl:text-[1.1rem] 2xl:text-[1.2rem]
                    hover:translate-y-[-5px]
                    shadow-[0_5px_15px_rgba(0,0,0,0.35)]
                    transition
                ">
                    Schedule a Consultation
                </Link>

            </section>
        </>
    )
}

export default Consultation
