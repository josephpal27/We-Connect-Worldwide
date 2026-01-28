import { Link } from "react-router-dom"
import logo from '../assets/images/logo/logo.png';
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <footer className="
                mt-[1rem] lg:mt-[0.8rem] xl:mt-[0.9rem] 2xl:mt-[1rem]
                bg-[#0764f9] text-[#fff] px-[7%]
            ">
                <div className="
                    d-flex justify-between flex-wrap
                    py-[3rem] lg:py-[3rem] xl:py-[3.5rem] 2xl:py-[4rem]
                ">
                    <div className="
                        w-[40%]
                    ">
                        <div className="
                            bg-[#fff] w-max
                            py-[1rem] lg:py-[0.8rem] xl:py-[0.9rem] 2xl:py-[1rem]
                            px-[1.5rem] lg:px-[1.3rem] xl:px-[1.5rem] 2xl:px-[1.7rem]
                            rounded-[8] lg:rounded-[6px] xl:rounded-[8px] 2xl:rounded-[10px]
                            mt-[0.5rem] lg:mt-[0.4rem] xl:mt-[0.45rem] 2xl:mt-[0.5rem]
                        "> 
                            <img src={logo} alt="Logo" loading="lazy" className="w-[100] lg:w-[95px] xl:w-[110px] 2xl:w-[120px]" />
                        </div>
                        <p className="
                            mt-[2rem] lg:mt-[1.8rem] xl:mt-[1.9rem] 2xl:mt-[2rem] 
                            font-[500]
                            text-[1.2rem] lg:text-[0.95rem] xl:text-[1.1rem] 2xl:text-[1.2rem]
                        ">
                            We Connect exists to make business journeys smoother and more connected. We work alongside brands to create solutions that feel aligned, effective, and future-ready.
                        </p>
                        <div className="
                            footer-icons
                            d-flex
                            mt-[1rem] lg:mt-[0.8rem] xl:mt-[0.9rem] 2xl:mt-[1rem]
                            gap-[0.5rem] lg:gap-[0.4rem] xl:gap-[0.5rem] 2xl:gap-[0.6rem]
                        ">
                            <a href="#" target="_blank"><FaInstagram /></a>
                            <a href="#" target="_blank"><FaFacebookF /></a>
                            <a href="#" target="_blank"><FaLinkedinIn /></a>
                            <a href="#" target="_blank"><FaYoutube /></a>
                        </div>
                    </div>
                    <div className="
                        w-[50%] 
                        d-flex justify-end
                        gap-[30%]
                    ">
                        <div>
                            <span className="
                                d-block font-[700]
                                text-[1.5rem] lg:text-[1.3rem] xl:text-[1.4rem] 2xl:text-[1.5rem]
                                mb-[1.5rem] lg:mb-[1.3rem] xl:mb-[1.4rem] 2xl:mb-[1.5rem]
                            ">
                                Quick Links
                            </span>
                            <Link to="/">Home</Link>
                            <Link to="/services">Services</Link>
                            <Link to="/about">About Us</Link>
                            <Link to="/contact">Contact</Link>
                        </div>
                        <div>
                            <span className="
                                d-block font-[700]
                                text-[1.5rem] lg:text-[1.3rem] xl:text-[1.4rem] 2xl:text-[1.5rem]
                                mb-[1.5rem] lg:mb-[1.3rem] xl:mb-[1.4rem] 2xl:mb-[1.5rem]
                            ">
                                Contact Info
                            </span>
                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=info@weconnectworldwide.com" target="_blank">info@weconnectworldwide.com</a>
                            <a href="#">212-763-3310 (For Visa)</a>
                            <a href="#">212-222-0992 (For b2b)</a>
                            <a href="https://maps.app.goo.gl/cEYAHQ9hZV7bECNW8" target="_blank">117-20, Queens Blvd, 2nd Floor, <br /> Forest Hills, New York - 11375</a>
                        </div>
                    </div>
                </div>
                <div className="
                    border-t-[1px] border-t-[#ffffff54]
                    py-[1rem] lg:py-[0.8rem] xl:py-[0.9rem] 2xl:py-[1rem]
                ">
                    <p className="
                        font-[500] text-center
                        text-[0.9rem] lg:text-[0.7rem] xl:text-[0.8rem] 2xl:text-[0.9rem]
                    ">
                        2025 © All Rights Reserved | We Connect Worldwide | Empowering Businesses Digitally
                    </p>
                </div>
            </footer>
        </>
    )
}

export default Footer
