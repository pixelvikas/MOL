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

const Contact = () => {
  return (
    <>
      <HeroComponent
        title="Contact us"
        link="/"
        linkText="HOME"
        current="CONTACT US"
      />

      <div className="contact-container">
        {/* Left Form Section */}
        <div className="contact-form-section">
          <h1 className="contact-subtitle">01 _ CONTACT</h1>
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
                <p>+1 (888) 123-5678</p>
                <p>(+44)123 456 789</p>
              </div>
            </div>

            <div className="contact-info">
              <CiMail className="contact-icon" />
              <div className="contact-info-data">
                <h1>Email Address</h1>
                <p>info@example.com</p>
                <p>contact@example.com</p>
              </div>
            </div>

            <div className="contact-info">
              <SlLocationPin className="contact-icon" />
              <div className="contact-info-data">
                <h1>Location</h1>
                <p>Guild Street 51, North Town, London-06192, UK</p>
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7539.824060116297!2d72.89296369091318!3d19.1115147746523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c80ae62566a9%3A0x84580ff1332a9b61!2sEkta%20CHS!5e0!3m2!1sen!2sin!4v1742240338797!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default Contact;
