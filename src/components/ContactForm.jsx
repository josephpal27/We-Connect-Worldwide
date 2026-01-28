
const ContactForm = () => {
    return (
        <>
            <div className="
                bg-[#0764f9]
                pt-[2rem] lg:pt-[1.6rem] xl:pt-[1.8rem] 2xl:pt-[2rem]
                p-[2.5rem] lg:p-[2.1rem] xl:p-[2.3rem] 2xl:p-[2.5rem]
                rounded-[40px]
            ">
                <span className="
                    text-[#fff] font-[700]
                    text-[1.8rem] lg:text-[1.6rem] xl:text-[1.7rem] 2xl:text-[1.8rem]
                ">
                    Get In Touch
                </span>
                <p className="
                    text-[1.2rem] lg:text-[0.95rem] xl:text-[1.1rem] 2xl:text-[1.2rem]
                    mt-[1rem] lg:mt-[0.8rem] xl:mt-[0.9rem] 2xl:mt-[1rem]
                    text-[#eee]
                ">
                    You’ll be heard by people who care and respond. <br /> Get in touch with our team.
                </p>
                <form action="" className="
                    contact-form
                    mt-[2.5rem] lg:mt-[2.3rem] xl:mt-[2.5rem] 2xl:mt-[2.7rem]
                ">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" name="name" id="name" required />
                    <label htmlFor="email">Email Id</label>
                    <input type="email" name="email" id="email" required />
                    <label htmlFor="msg">Message</label>
                    <textarea name="message" id="msg" required></textarea>
                    <button type="submit" className="
                        bg-[#fff] text-[#0764f9]
                        py-[1rem] lg:py-[0.8rem] xl:py-[0.9rem] 2xl:py-[1rem]
                        px-[3rem] lg:px-[2.6rem] xl:px-[2.8rem] 2xl:px-[3rem]
                        text-[1.2rem] lg:text-[0.95rem] xl:text-[1.1rem] 2xl:text-[1.2rem]
                        font-[600]
                        rounded-full
                        transition
                        hover:translate-y-[-3px]
                    ">
                        Send Message
                    </button>
                </form>
            </div>
        </>
    )
}

export default ContactForm
