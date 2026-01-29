import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { servicesData } from "../data/servicesData"

const OurServices = () => {
    return (
        <>
            <section className="
                pt-[2.5rem] sm:pt-[2rem] lg:pt-[4rem] xl:pt-[4.5rem] 2xl:pt-[5rem]
                px-[7%]
            ">
                <h3 className="
                    text-center text-[#0764f9] font-[600]
                    text-[1.7rem] sm:text-[2rem] lg:text-[2.7rem] xl:text-[3.1rem] 2xl:text-[3.5rem]
                "
                    data-aos="fade-up"
                >
                    Services
                </h3>
                <p className="
                    text-center text-[#000] font-[500]
                    text-[1.1rem] sm:text-[1.3rem] lg:text-[1.05rem] xl:text-[1.2rem] 2xl:text-[1.3rem]
                    mt-[0.5rem] sm:mt-[1rem] lg:mt-[0.8rem] xl:mt-[0.9rem] 2xl:mt-[1rem]
                    mx-auto
                    w-[100%] sm:w-[50%]
                "
                    data-aos="fade"
                >
                    We Connect partners with businesses to simplify complexity and create meaningful progress.
                </p>

                <div className="services-slider" data-aos="fade-up" data-aos-once="true">
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        slidesPerView={4}
                        centeredSlides={false}
                        loop={true}
                        grabCursor={true}
                        spaceBetween={20}
                        speed={1000}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            el: ".custom-pagination",
                            clickable: true,
                        }}
                        breakpoints={{
                            0: {
                                slidesPerView: 1, // for mobile
                                spaceBetween: 0,
                            },
                            640: {
                                slidesPerView: 3, // tablet
                                spaceBetween: 30,
                            },
                            991: {
                                slidesPerView: 4, // tablet and up
                                spaceBetween: 20,
                            },
                        }}
                    >

                        {
                            servicesData.map((item, index) => {
                                return (
                                    <SwiperSlide key={index} className="
                                        d-flex flex-col items-center
                                        mt-[2.2rem] sm:mt-[3rem] lg:mt-[3.1rem] xl:mt-[3.3rem] 2xl:mt-[3.5rem]
                                    ">
                                        <div className="
                                            bg-white
                                            p-[2.2rem] sm:p-[2.5rem] lg:p-[2.3rem] xl:p-[2.4rem] 2xl:p-[2.5rem]
                                            d-flex justify-center
                                            aspect-square
                                            w-[55%]
                                            rounded-[20px]
                                            shadow-[0_4px_15px_rgba(0,0,0,0.25)]
                                            transition
                                            hover:translate-y-[-5px]
                                            hover:shadow-[0_4px_15px_#0764f96f]
                                        ">
                                            <img src={item.image} alt={item.title} loading="lazy" className="
                                                w-full
                                            " />
                                        </div>
                                        <div>
                                            <span dangerouslySetInnerHTML={{
                                                __html: item.title,
                                            }} className="
                                                text-center text-[#0764f9] font-[600]
                                                d-block
                                                text-[1.3rem] sm:text-[1.3rem] lg:text-[1rem] xl:text-[1.15rem] 2xl:text-[1.3rem]
                                                mt-[1.3rem] sm:mt-[1.5rem] lg:mt-[1.1rem] xl:mt-[1.3rem] 2xl:mt-[1.5rem]
                                            " />
                                            <p className="
                                                text-center
                                                text-[1.1rem] sm:text-[0.8rem] lg:text-[0.8rem] xl:text-[0.9rem] 2xl:text-[1rem]
                                                mt-[0.5rem] sm:mt-[0.8rem] lg:mt-[0.6rem] xl:mt-[0.7rem] 2xl:mt-[0.8rem]
                                            ">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }

                    </Swiper>

                    {/* Custom Pagination */}
                    <div className="custom-pagination text-center"></div>
                </div>
            </section>
        </>
    )
}

export default OurServices
