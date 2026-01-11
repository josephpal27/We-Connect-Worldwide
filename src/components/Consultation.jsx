
const Consultation = () => {
    return (
        <>
            <section className="
                py-[5rem]
                px-[7%]
                mt-[1rem]
                bg-[url('/images/consultation-bg.png')] bg-cover
                d-flex flex-col items-center justify-center
            ">
                <h6 className="
                    text-[#fff] font-[600] text-center
                    text-[3.5rem]
                    w-[65%]
                ">
                    Building <span className="text-[#fff]">Smarter</span> Businesses for a Connected <span className="text-[#fff]">World</span>
                </h6>
                <p className="
                    text-[#fff] font-[600] text-center
                    text-[1.3rem]
                    w-[50%]
                    mt-[1rem]
                ">
                    Through thoughtful collaboration, we help brands move forward with clarity, confidence, and consistency.
                </p>
                <button className="
                    text-[#0764f9] bg-[#fff] rounded-[40px] font-[700]
                    py-[1.2rem]
                    px-[2.5rem]
                    mt-[2rem]
                    text-[1.2rem]
                    hover:translate-y-[-5px]
                    shadow-[0_5px_15px_rgba(0,0,0,0.35)]
                    transition
                ">
                    Schedule a Consultation
                </button>

            </section>
        </>
    )
}

export default Consultation
