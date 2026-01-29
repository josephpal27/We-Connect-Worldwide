import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { servicesHelpsData } from "../data/servicesHelpsData"

const ServiceHelps = () => {
    return (
        <>
            <section className="
                pt-[0.5rem] sm:pt-[0.5rem] lg:pt-[0.3rem] xl:pt-[0.4rem] 2xl:pt-[0.5rem]
                px-[7%]
                pb-[3rem] sm:pb-[12rem] lg:pb-[12rem] xl:pb-[13rem] 2xl:pb-[15rem]
            ">
                <h3 className="
                    text-center text-[#0764f9] font-[600]
                    text-[1.6rem] sm:text-[2rem] lg:text-[2.7rem] xl:text-[3.1rem] 2xl:text-[3.5rem]
                "
                    data-aos="fade-up"
                >
                    Service Helps
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
                    Trust grows when experiences are real. We believe in sharing genuine stories that reflect meaningful partnerships, real outcomes, and the value of working together.
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
                            el: ".services-help-pagination",
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
                            servicesHelpsData.map((item, index) => {
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
                    <div className="services-help-pagination text-center mt-[0.5rem] lg:mt-[0]"></div>
                </div>
            </section>
        </>
    )
}

export default ServiceHelps
