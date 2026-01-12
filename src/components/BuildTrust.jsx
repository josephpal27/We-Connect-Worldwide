import man from '../assets/images/man.png';

const BuildTrust = () => {
    return (
        <>
            <section className="
                d-flex justify-between items-center flex-wrap
                bg-[#eaeaea]
                px-[7%]
                py-[5rem]
                relative
            ">
                <div className="">
                    <img src={man} alt="Image" loading="lazy" className="
                        w-[29%]
                        absolute bottom-0
                    " />
                </div>
                <div className="
                    w-[55%]
                ">
                    <h5 className="
                        text-[4rem]
                        text-[#0764f9]
                        font-[600]
                    ">
                        Build trust <br /> through <span>real stories.</span>
                    </h5>
                    <p className="
                        text-[1.2rem]
                        mt-[1.5rem]
                        font-[500]
                        text-[#000]
                    ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <p className="
                        text-[1.2rem]
                        mt-[1rem]
                        font-[500]
                        text-[#000]
                    ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
            </section>
        </>
    )
}

export default BuildTrust
