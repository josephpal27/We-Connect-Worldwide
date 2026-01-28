import man from '../assets/images/man.png';

const BuildTrust = () => {
    return (
        <>
            <section className="
                d-flex justify-between items-center flex-wrap
                bg-[#eaeaea]
                px-[7%]
                py-[3rem] lg:py-[4rem] xl:py-[4.5rem] 2xl:py-[5rem]
                relative
            ">
                <div className="">
                    <img src={man} alt="Image" loading="lazy" className="
                        w-[27%]
                        absolute bottom-0
                    " />
                </div>
                <div className="
                    w-[55%]
                ">
                    <h5 className="
                        text-[1rem] lg:text-[3.2rem] xl:text-[3.6rem] 2xl:text-[4rem]
                        text-[#0764f9]
                        font-[600]
                    ">
                        Build trust <br /> through <span>real stories.</span>
                    </h5>
                    <p className="
                        text-[1.2rem] lg:text-[0.95rem] xl:text-[1.1rem] 2xl:text-[1.2rem]
                        mt-[1.5rem] lg:mt-[1.3rem] xl:mt-[1.4rem] 2xl:mt-[1.5rem]
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
