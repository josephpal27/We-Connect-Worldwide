import ContactForm from './ContactForm'

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
                    <div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
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
