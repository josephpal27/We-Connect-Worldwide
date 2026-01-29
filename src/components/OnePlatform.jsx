import { Link } from 'react-router-dom';
import handshake from '../assets/images/handshake.avif';

const OnePlatform = () => {
    return (
        <>
            <section className="
                px-[1rem] sm:px-[5%] lg:px-[7%]
                py-[3rem] sm:py-[3rem] lg:py-[5rem] xl:py-[5.5rem] 2xl:py-[6rem]
                d-flex justify-between items-center flex-wrap
            ">
                <div className="
                    w-full sm:w-[45%]
                ">
                    <img src={handshake} alt="One Platform Image" loading="lazy" className="
                        w-full 
                        rounded-[45px] sm:rounded-[75px]
                        shadow-[0_10px_20px_rgba(0,0,0,0.19),_0_6px_6px_rgba(0,0,0,0.23)]
                    " />
                </div>
                <div className="
                    w-full sm:w-[45%]
                    mt-[2.2rem] sm:mt-0
                ">
                    <h4 className="
                        text-[1.4rem] sm:text-[1rem] lg:text-[3.2rem] xl:text-[3.6rem] 2xl:text-[4rem]
                    "
                        data-aos="fade-up"
                    >
                        One Platform. <br /> <span className="text-[#0764f9]">Unlimited Reach.</span>
                    </h4>
                    <p className="
                        text-[1.1rem] sm:text-[1.3rem] lg:text-[1.05rem] xl:text-[1.2rem] 2xl:text-[1.3rem]
                        mt-[0.5rem] sm:mt-[1.5rem] lg:mt-[1.3rem] xl:mt-[1.4rem] 2xl:mt-[1.5rem]
                        font-[500]
                        text-[#000]
                    "
                        data-aos="fade"
                    >
                        Technology solutions, business services, and visa & passport assistance—unified in one connected ecosystem.
                    </p>
                    <Link to="/services" className="
                        d-block
                        w-max 
                        bg-[#0764f9]
                        text-[#fff] 
                        text-[1.1rem] sm:text-[1.2rem] lg:text-[0.95rem] xl:text-[1.1rem] 2xl:text-[1.2rem]
                        font-[500] sm:font-[600]
                        px-[1.1rem] sm:px-[2.8rem] lg:px-[2.4rem] xl:px-[2.6rem] 2xl:px-[2.8rem]
                        py-[0.5rem] sm:py-[1rem] lg:py-[0.8rem] xl:py-[0.9rem] 2xl:py-[1rem]
                        rounded-[30px] 
                        mt-[1.5rem] sm:mt-[2rem] lg:mt-[1.5rem] xl:mt-[1.8rem] 2xl:mt-[2rem]
                        hover:bg-[#0459e2] hover:translate-y-[-5px]
                        shadow-[0_5px_15px_rgba(0,0,0,0.35)]
                        transition
                    ">Explore Services</Link>
                </div>
            </section>
        </>
    )
}

export default OnePlatform
