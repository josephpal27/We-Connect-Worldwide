import { Link } from "react-router-dom"
import logo from '../assets/images/logo/logo.png';
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube, FaPhoneAlt } from "react-icons/fa";
import { RiMailOpenFill } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
    return (
        <>
            <footer className="
                mt-[0.7rem] sm:mt-[1rem] lg:mt-[0.8rem] xl:mt-[0.9rem] 2xl:mt-[1rem]
                bg-[#0764f9] text-[#fff]
                px-[1rem] sm:px-[5%] lg:px-[7%]
            ">
                <div className="
                    d-flex justify-between flex-wrap
                    py-[1.6rem] sm:py-[3rem] lg:py-[3rem] xl:py-[3.5rem] 2xl:py-[4rem]
                ">
                    <div className="
                        w-full sm:w-[40%]
                    ">
                        <div className="
                            bg-[#fff] w-max
                            py-[1rem] lg:py-[0.8rem] xl:py-[0.9rem] 2xl:py-[1rem]
                            px-[1.5rem] lg:px-[1.3rem] xl:px-[1.5rem] 2xl:px-[1.7rem]
                            rounded-[8px] lg:rounded-[6px] xl:rounded-[8px] 2xl:rounded-[10px]
                            mt-[0.5rem] lg:mt-[0.4rem] xl:mt-[0.45rem] 2xl:mt-[0.5rem]
                        ">
                            <img src={logo} alt="Logo" loading="lazy" className="w-[90px] lg:w-[95px] xl:w-[110px] 2xl:w-[120px]" />
                        </div>
                        <p className="
                            mt-[1.3rem] sm:mt-[2rem] lg:mt-[1.8rem] xl:mt-[1.9rem] 2xl:mt-[2rem] 
                            font-[500]
                            text-[1.1rem] sm:text-[1.2rem] lg:text-[0.95rem] xl:text-[1.1rem] 2xl:text-[1.2rem]
                        ">
                            We Connect exists to make business journeys smoother and more connected. We work alongside brands to create solutions that feel aligned, effective, and future-ready.
                        </p>
                        <div className="
                            footer-icons
                            hidden sm:flex
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
                        w-full sm:w-[50%] 
                        d-flex justify-end flex-col sm:flex-row
                        gap-[0] sm:gap-[30%]
                        mt-[1.6rem] sm:mt-[0]
                    ">
                        <div>
                            <span className="
                                d-block font-[700]
                                text-[1.3rem] sm:text-[1.5rem] lg:text-[1.3rem] xl:text-[1.4rem] 2xl:text-[1.5rem]
                                mb-[1rem] sm:mb-[1.5rem] lg:mb-[1.3rem] xl:mb-[1.4rem] 2xl:mb-[1.5rem]
                            ">
                                Quick Links
                            </span>
                            <Link to="/">Home</Link>
                            <Link to="/services">Services</Link>
                            <Link to="/about">About Us</Link>
                            <Link to="/contact">Contact</Link>
                        </div>
                        <div className="contact-info mt-[1rem] sm:mt-[0]">
                            <span className="
                                d-block font-[700]
                                text-[1.3rem] sm:text-[1.5rem] lg:text-[1.3rem] xl:text-[1.4rem] 2xl:text-[1.5rem]
                                mb-[1rem] sm:mb-[1.5rem] lg:mb-[1.3rem] xl:mb-[1.4rem] 2xl:mb-[1.5rem]
                            ">
                                Contact Info
                            </span>
                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=info@weconnectworldwide.com" target="_blank"> <RiMailOpenFill className="icn" /> info@weconnectworldwide.com</a>
                            <a href="#"> <FaPhoneAlt className="icn" /> 212-763-3310 (For Visa)</a>
                            <a href="#"> <FaPhoneAlt className="icn" /> 212-222-0992 (For b2b)</a>
                            <a href="https://maps.app.goo.gl/cEYAHQ9hZV7bECNW8" target="_blank"> <FaLocationDot className="icn" /> 117-20, Queens Blvd, 2nd Floor, <br /> Forest Hills, New York - 11375</a>
                            <div className="
                                footer-icons
                                flex sm:hidden
                                mt-[1.5rem]
                                gap-[0.7rem]
                            ">
                                <a href="#" target="_blank"><FaInstagram /></a>
                                <a href="#" target="_blank"><FaFacebookF /></a>
                                <a href="#" target="_blank"><FaLinkedinIn /></a>
                                <a href="#" target="_blank"><FaYoutube /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="
                    border-t-[1px] border-t-[#ffffff54]
                    py-[0.8rem] sm:py-[1rem] lg:py-[0.8rem] xl:py-[0.9rem] 2xl:py-[1rem]
                ">
                    <p className="
                        font-[500] text-center
                        text-[0.85rem] sm:text-[0.9rem] lg:text-[0.7rem] xl:text-[0.8rem] 2xl:text-[0.9rem]
                    ">
                        2025 © All Rights Reserved | We Connect Worldwide | Empowering Businesses Digitally
                    </p>
                </div>
            </footer>
        </>
    )
}

export default Footer
