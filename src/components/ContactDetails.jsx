import ContactForm from './ContactForm'

import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const contactData = [
    {
        id: 1,
        title: "Call Us",
        items: [
            { label: "For visa", value: " 212-763-3310", link: "tel:2127633310" },
            { label: "For b2b", value: " 212-222-0992", link: "tel:2122220992" },
        ],
    },
    {
        id: 2,
        title: "Location",
        items: [
            {
                value: "Lorem ipsum is simply dummy text of the",
                link: "https://maps.google.com",
            },
        ],
    },
    {
        id: 3,
        title: "Email Us",
        items: [
            {
                value: "info@weconnectworldwide.com",
                link: "mailto:info@weconnectworldwide.com",
            },
        ],
    },
    {
        id: 4,
        title: "Social Media",
        socials: [
            { icon: <FaInstagram />, link: "https://instagram.com" },
            { icon: <FaFacebookF />, link: "https://facebook.com" },
            { icon: <FaLinkedinIn />, link: "https://linkedin.com" },
        ],
    },
];


const ContactDetails = () => {
    return (
        <>
            <section className="
                px-[7%]
                py-[3rem] lg:py-[4rem] xl:py-[4.5rem] 2xl:py-[5rem]
                d-flex flex-wrap justify-between
            ">
                <div className="
                    w-[50%]
                ">
                    <h2 className="
                        text-[3.5rem]
                        text-[#0764f9]
                        font-[600]
                    ">
                        Lorem <span>ipsum dolor sit</span> amet, consectetur <span>adipiscing elit</span> sed do
                    </h2>
                    <p className="
                        text-[1.2rem]
                        mt-[1.5rem]
                        font-[500]
                        text-[#000]
                    ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <div className="
                        mt-[3rem]
                        d-flex flex-wrap justify-between
                    ">
                        {contactData.map((item) => (
                            <div key={item.id} className="
                                w-[48.5%]
                                p-[1rem]
                                border
                                rounded-[12px]
                                mb-[1.25rem]
                            ">
                                <span className="
                                    text-[#0764f9] 
                                    text-[1.3rem] 
                                    font-[600] 
                                    mb-[1rem]
                                    d-block
                                ">
                                    {item.title}
                                </span>

                                {/* Normal text / links */}
                                {item.items &&
                                    item.items.map((data, i) => (
                                        <p key={i} className="
                                            text-[1.1rem] 
                                            mb-[0.5rem]
                                        ">
                                            {data.label &&
                                                <b className="
                                                text-[1.1rem]
                                            ">
                                                    {data.label} :
                                                </b>}
                                            <a
                                                href={data.link}
                                                className="
                                                    text-[#000] font-[500]
                                                    hover:text-[#0764f9]
                                                    text-[1.1rem]
                                            ">
                                                {data.value}
                                            </a>
                                        </p>
                                    ))}

                                {/* Social icons */}
                                {item.socials && (
                                    <div className="
                                        d-flex 
                                        gap-[1rem] 
                                        mt-[0.5rem]
                                    ">
                                        {item.socials.map((social, i) => (
                                            <a key={i} href={social.link} target="_blank" rel="noopener noreferrer" className="
                                                text-[#fff]
                                                text-[1.2rem]
                                                bg-[#0764f9]
                                                hover:bg-[#0459e2]
                                                transition
                                                w-[35px]
                                                h-[35px]
                                                rounded-full
                                                d-flex justify-center items-center
                                            ">
                                                {social.icon}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="
                    w-[44%]
                ">
                    <ContactForm />
                </div>
            </section>
        </>
    )
}

export default ContactDetails
