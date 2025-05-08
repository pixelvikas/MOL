import React from "react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaEnvelope,
} from "react-icons/fa6";
import { SlLocationPin } from "react-icons/sl";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import MOLlogo from "../assets/logo.png";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          {/* Logo and Social Media Section */}
          <div className="footer-logo">
            <img src={MOLlogo} alt="Thrift Concepts LLP" className="logo" />
            <p className="footer-text">
              "When you’re moving from your old house to a new location, there
              are thousands of things to betaken care of. We’ll be your
              assistants, helping you move all your belongings fast wherever you
              wish."
            </p>
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

          {/* Quick Links Section */}

          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About us</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/team">Our Team</a>
              </li>
            </ul>
          </div>

          <div className="footer-links">
            <h3>Services</h3>
            <ul>
              <li>
                <a href="/services/ocean-freight">Ocean Freight</a>
              </li>
              <li>
                <a href="/services/air-freight">Air Freight</a>
              </li>
              <li>
                <a href="/services/road-freight">Road Freight</a>
              </li>
              <li>
                <a href="/services/rail-freight">Rail Freight</a>
              </li>
              <li>
                <a href="/services/project-cargo">Project Cargo</a>
              </li>
              <li>
                <a href="/services/logistics-solutions">Logistics Solution</a>
              </li>
            </ul>
          </div>
          <div className="footer-links">
            <h3>Contact</h3>

            <ul>
              <li>
                <SlLocationPin className="footer-contact" />
                <span>Namami Family, Mumbai</span>
              </li>
              <li>
                <IoCallOutline className="footer-contact" />
                <a href="tel:+02245158999" aria-label="Call us">
                  +02245158999
                </a>
              </li>
              <li>
                <CiMail className="footer-contact" />
                <a
                  href="mailto:Info@myoceanlogistics.com"
                  aria-label="Email us"
                >
                  support@myoceanlogistics.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
      </footer>
      <div className="footer-bottom">
        <p>© 2024 Pixel Vikas</p>
        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Services</a>
        </div>
        <p>All Rights Reserved</p>
      </div>
    </>
  );
};

export default Footer;
