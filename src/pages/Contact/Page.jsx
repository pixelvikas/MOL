import React from "react";
import "./style.css";
import HeroComponent from "../../components/HeroComponent";
import Button from "../../components/Button";

import { IoCallOutline } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";
import { CiMail } from "react-icons/ci";
import {
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaEnvelope,
} from "react-icons/fa6";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>
          Contact Us | My Ocean Logistics - Get in Touch for Freight & Logistics
          Solutions
        </title>
        <meta
          name="description"
          content="Reach out to My Ocean Logistics for expert assistance with air, ocean, road, and rail freight services. Contact us for inquiries, custom quotes, or any logistics solutions tailored to your needs."
        />
        <meta
          name="keywords"
          content="Contact My Ocean Logistics, logistics company contact, freight service inquiries, global shipping assistance, warehousing support, air freight quotes, ocean freight solutions, road freight, rail logistics help"
        />
        <meta
          property="og:title"
          content="Contact Us | My Ocean Logistics - Freight & Logistics Experts"
        />
        <meta
          property="og:description"
          content="Have questions or need logistics solutions? Contact My Ocean Logistics today for quick support, expert advice, and customized freight services worldwide."
        />
        <meta property="og:image" content="/src/assets/mol.png" />
        <meta property="og:url" content="https://mol-one.vercel.app/contact" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Contact Us | My Ocean Logistics - Freight & Logistics Experts"
        />
        <meta
          name="twitter:description"
          content="Get in touch with My Ocean Logistics for logistics solutions and freight services tailored to your business needs — fast, reliable, and global."
        />
        <meta name="twitter:image" content="/src/assets/mol.png" />
      </Helmet>
      <HeroComponent
        title="Contact us"
        link="/"
        linkText="HOME"
        current="CONTACT US"
      />

      <div className="contact-container">
        {/* Left Form Section */}
        <div className="contact-form-section">
          <h1 className="contact-subtitle">CONTACT</h1>
          <h1 className="contact-title">Get in Touch</h1>

          <form className="contact-form">
            <div className="contact-input-group">
              <div className="contact-input-field">
                <label>Your Name *</label>
                <input type="text" placeholder="Your name here" />
              </div>
              <div className="contact-input-field">
                <label>Your Email *</label>
                <input type="email" placeholder="Your email here" />
              </div>
            </div>

            <div className="contact-input-group">
              <div className="contact-input-field">
                <label>Your Subject *</label>
                <input type="text" placeholder="Your subject here" />
              </div>
              <div className="contact-input-field">
                <label>Contact Number</label>
                <input type="text" placeholder="Your phone here" />
              </div>
            </div>

            <div className="contact-textarea-field">
              <label>Message *</label>
              <textarea placeholder="Tell us a few words"></textarea>
            </div>

            <Button text="SEND MESSAGE" className="primary-btn" />
          </form>
        </div>

        {/* Right Contact Details Section */}
        <div className="contact-details-section">
          <div className="contact-bg-overlay">
            <h1 className="contact-details-title">Our contact detail</h1>
            <p className="contact-details-subtext">
              Need any consultations? Contact us.
            </p>

            <div className="contact-info">
              <IoCallOutline className="contact-icon" />
              <div className="contact-info-data">
                <h1>Phone Number</h1>
                <p>+9152599995</p>
              </div>
            </div>

            <div className="contact-info">
              <CiMail className="contact-icon" />
              <div className="contact-info-data">
                <h1>Email Address</h1>
                <p>info@myoceanlogistics.com</p>
              </div>
            </div>

            <div className="contact-info">
              <SlLocationPin className="contact-icon" />
              <div className="contact-info-data">
                <h1>Location</h1>
                <p>Andheri East Mumbai - 59</p>
              </div>
            </div>

            <div className="social-icons">
              <a href="#" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href="#" aria-label="Twitter (X)">
                <FaXTwitter />
              </a>
              <a href="#" aria-label="Email">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="map-container">
        <iframe
          title="Our Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3131.9994078278883!2d72.8667327!3d19.0997093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c84449930093%3A0x44760442773a5fce!2sAero%20View%20Society%2C%202%2C%20Church%20Pakhadi%20Rd%2C%20Sahar%20Village%2C%20Andheri%20East%2C%20Mumbai%2C%20Maharashtra%20400099!5e1!3m2!1sen!2sin!4v1746712041015!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default Contact;
