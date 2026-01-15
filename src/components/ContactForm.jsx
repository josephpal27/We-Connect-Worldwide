
const ContactForm = () => {
    return (
        <>
            <div className="
                bg-[#0764f9]
                pt-[2rem]
                p-[2.5rem]
                rounded-[40px]
            ">
                <span className="
                    text-[#fff] font-[700]
                    text-[1.8rem]
                ">
                    Get In Touch
                </span>
                <p className="
                    text-[1.2rem]
                    mt-[1rem]
                    text-[#eee]
                ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod consectetur tempor incididunt adipiscing ut labore et dolore magna aliqua.
                </p>
                <form action="" className="
                    contact-form
                    mt-[2.7rem]
                ">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" name="name" id="name" required />
                    <label htmlFor="email">Email Id</label>
                    <input type="email" name="email" id="email" required />
                    <label htmlFor="msg">Message</label>
                    <textarea name="message" id="msg" required></textarea>
                    <button type="submit" className="
                        bg-[#fff] text-[#0764f9]
                        py-[1rem]
                        px-[3rem]
                        text-[1.2rem]
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
