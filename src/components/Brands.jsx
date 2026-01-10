
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
                px-[7%]
                py-[4rem]
                bg-[]
            ">
                {
                    brandsData.map((item, index) => (
                        <div key={index} className="
                            brand-image
                            w-[20%]
                            d-flex justify-center
                        ">
                            <img src={item.image} alt="Brand Logo" loading="lazy" className="
                                w-[200px]
                                h-[50px]
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
