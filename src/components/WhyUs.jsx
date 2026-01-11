import { useState } from 'react';
import handshake from '../assets/images/handshake-2.png';

const WhyUs = () => {

    let [textShow, setTextShow] = useState(false);

    let toggleText = () => {
        setTextShow(true);
    }

    return (
        <>
            <section className="
                px-[7%]
                py-[6rem]
                d-flex justify-between items-center flex-wrap
            ">
                <div className="
                    w-[45%]
                ">
                    <img src={handshake} alt="One Platform Image" loading="lazy" className="w-full rounded-[75px]" />
                </div>
                <div className="
                    w-[45%]
                ">
                    <h4 className="
                        text-[4rem]
                    ">
                        Why our service <br /> <span className="text-[#0764f9]">Key Points of the Services</span>
                    </h4>
                    <p className="
                        text-[1.3rem]
                        mt-[1.5rem]
                        font-[500]
                        text-[#000]
                    ">
                        We believe strong businesses are built on reliability, understanding, and long-term thinking. Our approach is not just about delivering solutions, but about working closely with you to understand your goals and challenges.
                    </p>
                    <p className="
                        text-[1.3rem]
                        mt-[1.5rem]
                        font-[500]
                        text-[#000]
                    " style={textShow ? {display: 'block'} : {display: 'none'}}>
                        By combining consistency with thoughtful execution, we help businesses operate smoothly and grow with confidence. Every partnership is guided by transparency, accountability, and a commitment to creating real, lasting value.
                    </p>
                    <button onClick={toggleText} className="
                        w-max 
                        bg-[#0764f9]
                        text-[#fff] 
                        text-[1.2rem] lg:text-[0.95rem] xl:text-[1.1rem] 2xl:text-[1.2rem]
                        font-[600] 
                        px-[2.8rem] lg:px-[2.4rem] xl:px-[2.6rem] 2xl:px-[2.8rem]
                        py-[1rem] lg:py-[0.8rem] xl:py-[0.9rem] 2xl:py-[1rem]
                        rounded-[30px] 
                        mt-[2rem] lg:mt-[1.5rem] xl:mt-[1.8rem] 2xl:mt-[2rem]
                        hover:bg-[#0459e2] hover:translate-y-[-5px]
                        shadow-[0_5px_15px_rgba(0,0,0,0.35)]
                        transition
                    ">
                        {
                            textShow ? "Read Less" : "Read More"
                        }
                    </button>
                </div>
            </section>
        </>
    )
}

export default WhyUs
