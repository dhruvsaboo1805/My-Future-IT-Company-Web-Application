import React from "react";
import "./Footer.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope } from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa";
import company_logo from "../../assets/company_logo.png";
import { useRef } from "react";
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";
import { NavLink } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";

const Footer = () => {

    const form = useRef();
    // problem on process.env
    // const service_id = process.env.REACT_APP_SERVICE_ID;
    // const public_id = process.env.REACT_APP_PUBLIC_ID;
    // const feedback_template_id = process.env.REACT_APP_FEEDBACK_TEMPLATE_ID;

    const handleFeedbackSumbit = (e) => {
        e.preventDefault();
        emailjs
            .sendForm('service_ttvw8si', 'template_ktc2yqg', form.current, {
                publicKey: 'nP2m46ScHPCwe9_fi',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    toast.success("Your Message is Sent");

                },
                (error) => {
                    console.log('FAILED...', error.text);
                    toast.error("Something Went Wrong");
                },
            );
        e.target.reset();
    }
    return (
        <div className="footer-wrapper">
            <div className="footer-section">
                <div className="footer-left">
                    <div className="site-links">
                        <ScrollToTop></ScrollToTop>
                        <NavLink to="/" target="blank">
                            <p>Home</p>
                        </NavLink>
                        <NavLink to="/services" target="blank">
                            <p>Services</p>
                        </NavLink>
                        <NavLink to="/about-us" target="blank">
                            <p>About Us</p>
                        </NavLink>
                        <NavLink to="/contact" target="blank">
                            <p>Contact Us</p>
                        </NavLink>
                    </div>
                    <div className="company-details">
                        <div className="company-logo">
                            <img src={company_logo} alt="Company Logo" />
                        </div>
                        <div className="contact-info">
                            <p><FaPhone /> +1 123 456 7890</p>
                            <p><FaEnvelope /> info@example.com</p>
                            <p><FaLocationDot />12 Main Street, City, Country</p>
                        </div>
                    </div>
                    <div className="social-links">
                        <a href="#"><FaFacebook /></a>
                        <a href="#"><FaTwitter /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaLinkedin /></a>
                    </div>
                </div>
                <div className="footer-right">
                    <div className="feedback-form">
                        <h3>Feedback Form</h3>
                        <form onSubmit={handleFeedbackSumbit} ref={form}>
                            <div className="form-group">
                                <label htmlFor="name">Name:</label>
                                <input type="text" id="name" name="user_name" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input type="email" id="email" name="user_email" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message:</label>
                                <textarea id="message" name="message" rows="4" required></textarea>
                            </div>
                            <button type="submit" value="Send" >Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <hr />
                <p><FaRegCopyright /> 2024 Techy Software. All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer;
