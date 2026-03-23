

const AboutBanner = () => {
    return (
        <>
            <section className="relative">
                <img src="/images/about-banner.avif" alt="About Banner" loading="eager" className="
                    w-full object-cover
                    h-[auto] sm:h-[88vh]
                " />
                <div className="
                    relative sm:absolute
                    px-[1rem] sm:px-[5%] lg:px-[7%]
                    top-0 left-0 w-[100%] h-[100%] d-flex flex-col justify-end
                    pb-[0] sm:pb-[5rem]
                ">
                    <h1 className="
                        text-[1.7rem] sm:text-[1rem] lg:text-[3.2rem] xl:text-[3.6rem] 2xl:text-[4rem]
                        text-[#fff] font-[600] 
                        mt-[-2.9rem] sm:mt-[1rem] lg:mt-[0.5rem] xl:mt-[0.8rem] 2xl:mt-[1rem]
                    "
                        data-aos="fade-up"
                    >
                        About <span className="text-[#fff]">Us</span>
                    </h1>
                    <p className="
                        w-[100%] sm:w-[55%]
                        text-[#000] sm:text-[#fff]  font-[500] sm:font-[600]
                        text-[1.1rem] sm:text-[1.2rem] lg:text-[0.95rem] xl:text-[1.1rem] 2xl:text-[1.2rem]
                        mt-[1.85rem] sm:mt-[1rem] lg:mt-[0.5rem] xl:mt-[0.8rem] 2xl:mt-[1rem]
                    "
                        data-aos="fade"
                    >
                        We are a comprehensive B2B service provider committed to enabling businesses to operate smarter, faster, and more securely in an increasingly connected world. Our strength lies in delivering integrated business solutions that support communication, connectivity, security, mobility, financial operations, and digital transformation — all under one trusted umbrella.
                    </p>
                </div>
            </section>
        </>
    )
}

export default AboutBanner
