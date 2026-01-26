import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const ServicesSlider = ({ servicesData }) => {
    return (
        <>
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
            >

                {
                    servicesData.map((item, index) => {
                        return (
                            <SwiperSlide key={index} className="
                                d-flex flex-col items-center
                                mt-[3.5rem]
                            ">
                                <div className="
                                    bg-white
                                    p-[2.5rem]
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
                                        text-[1.3rem] lg:text-[1.05rem] xl:text-[1.2rem] 2xl:text-[1.3rem]
                                        mt-[1.5rem]
                                    " />
                                    <p className="
                                        text-center
                                        text-[1.1rem] sm:text-[1.2rem] lg:text-[0.95rem] xl:text-[1.1rem] 2xl:text-[1rem]
                                        mt-[0.8rem]
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
            <div className="custom-pagination"></div>
        </>
    )
}

export default ServicesSlider
