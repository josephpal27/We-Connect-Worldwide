import ContactForm from './ContactForm'

import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const contactData = [
    {
        id: 1,
        title: "Call Us",
        items: [
            { label: "For visa", value: "212-763-3310", link: "tel:2127633310" },
            { label: "For b2b", value: "212-222-0992", link: "tel:2122220992" },
        ],
    },
    {
        id: 2,
        title: "Location",
        items: [
            {
                value: "Lorem Ipsum is simply dummy text of the",
                link: "https://maps.google.com",
            },
        ],
    },
    {
        id: 3,
        title: "Emails",
        items: [
            {
                value: "info@weconnectworldwide.com",
                link: "mailto:info@weconnectworldwide.com",
            },
        ],
    },
    {
        id: 4,
        title: "Socials Media",
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
                py-[5rem]
                d-flex flex-wrap justify-between
            ">
                <div className="
                    w-[45%]
                ">
                    <h2 className="
                        text-[3rem]
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
                                w-[47%]
                                p-[2rem]
                                border
                                rounded-[12px]
                                mb-[1.5rem]
                            ">
                                <h4 className="text-[#0764f9] text-[1.4rem] font-[600] mb-[1rem]">
                                    {item.title}
                                </h4>

                                {/* Normal text / links */}
                                {item.items &&
                                    item.items.map((data, i) => (
                                        <p key={i} className="text-[1rem] mb-[0.5rem]">
                                            {data.label && <strong>{data.label}: </strong>}
                                            <a
                                                href={data.link}
                                                className="text-black hover:text-[#0764f9]"
                                            >
                                                {data.value}
                                            </a>
                                        </p>
                                ))}

                                {/* Social icons */}
                                {item.socials && (
                                    <div className="d-flex gap-[1rem] mt-[0.5rem]">
                                        {item.socials.map((social, i) => (
                                            <a key={i} href={social.link} target="_blank" rel="noopener noreferrer" className="
                                                text-[#0764f9]
                                                text-[1.6rem]
                                                hover:scale-110
                                                transition
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
                    w-[48%]
                ">
                    <ContactForm />
                </div>
            </section>
        </>
    )
}

export default ContactDetails
