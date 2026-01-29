
import brand1 from '../assets/images/brands/1.png';
import brand2 from '../assets/images/brands/2.png';
import brand3 from '../assets/images/brands/3.png';
import brand4 from '../assets/images/brands/4.png';

let brandsData = [
    {id: 1, image: brand1},
    {id: 2, image: brand2},
    {id: 3, image: brand3},
    {id: 4, image: brand4},
]

const Brands = () => {
    return (
        <>
            <section className="
                brands
                d-flex justify-between
                px-[1rem] sm:px-[5%] lg:px-[7%]
                py-[1.5rem] sm:py-[3rem] lg:py-[3rem] xl:py-[3.5rem] 2xl:py-[4rem]
                mt-[3rem] sm:mt-[5rem] lg:mt-[4rem] xl:mt-[4.5rem] 2xl:mt-[5rem]
                bg-gradient-to-b from-[#eee] from-[10%] to-[#f9f9f9] to-[60%]
            ">
                {
                    brandsData.map((item, index) => (
                        <div key={index} className="
                            brand-image
                            w-[20%]
                            d-flex justify-center
                        "
                            data-aos="zoom-in" data-aos-once="true"
                        >
                            <img src={item.image} alt="Brand Logo" loading="lazy" className="
                                w-[200px] lg:w-[180px] xl:w-[190px] 2xl:w-[200px]
                                h-[50px] lg:h-[40px] xl:h-[45px] 2xl:h-[50px]
                                object-contain
                            " />
                        </div>
                    ))
                }
            </section>
        </>
    )
}

export default Brands
