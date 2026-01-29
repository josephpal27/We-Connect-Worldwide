import man from '../assets/images/man.avif';

const BuildTrust = () => {
    return (
        <>
            <section className="
                d-flex justify-between items-center flex-wrap
                flex-col-reverse sm:flex-row
                bg-[#eaeaea]
                px-[1rem] sm:px-[5%] lg:px-[7%]
                pt-[2.5rem] sm:pt-[3rem] lg:pt-[4rem] xl:pt-[4.5rem] 2xl:pt-[5rem]
                pb-[0] sm:pb-[3rem] lg:pb-[4rem] xl:pb-[4.5rem] 2xl:pb-[5rem]
                relative
            ">
                <div className="
                    mt-[2rem] sm:mt-[0]
                ">
                    <img src={man} alt="Image" loading="lazy" className="
                        w-[50%] sm:w-[27%]
                        relative sm:absolute 
                        bottom-0
                    " />
                </div>
                <div className="
                    w-full sm:w-[55%]
                ">
                    <h5 className="
                        text-[1.4rem] sm:text-[1rem] lg:text-[3.2rem] xl:text-[3.6rem] 2xl:text-[4rem]
                        text-[#0764f9]
                        font-[600]
                    ">
                        Build trust <br /> through <span className="text-[#000]">real stories.</span>
                    </h5>
                    <p className="
                        text-[1.1rem] sm:text-[1.2rem] lg:text-[0.95rem] xl:text-[1.1rem] 2xl:text-[1.2rem]
                        mt-[0.5rem] sm:mt-[1.5rem] lg:mt-[1.3rem] xl:mt-[1.4rem] 2xl:mt-[1.5rem]
                        font-[500]
                        text-[#000]
                    ">
                        We believe trust comes from transparency and real experiences. Our people share stories shaped by hands-on work and honest outcomes. No exaggeration, just real journeys and real impact.
                    </p>
                </div>
            </section>
        </>
    )
}

export default BuildTrust
