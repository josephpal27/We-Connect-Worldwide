import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import service1 from '../assets/images/services/1.png';

const ServicesSlider = ({ servicesData }) => {
    return (
        <>
            <Swiper
                modules={[Pagination, Autoplay]}
                slidesPerView={4}
                centeredSlides={true}
                loop={true}
                grabCursor={true}
                spaceBetween={0}
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
                            <SwiperSlide key={index}>
                                <div>
                                    <img src={item.image} alt={item.title} loading="lazy" />
                                </div>
                                <div>
                                    <span>
                                        {item.title}
                                    </span>
                                    <p>
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
