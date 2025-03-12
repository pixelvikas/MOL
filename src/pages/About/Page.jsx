import HeroComponent from "../../components/HeroComponent";

import { IoEarthOutline } from "react-icons/io5";
import { PiTruckTrailer } from "react-icons/pi";

import about1 from "../../assets/aboutus.png";
import aboutprofile from "../../assets/aboutprofile.png";

import Button from "../../components/Button";

import "./style.css";

const About = () => {
  return (
    <>
      <HeroComponent
        title="About Us"
        link="/"
        linkText="HOME"
        current="ABOUT US"
      />

      <div className="about-page-section">
        {/* Left Section */}
        <div className="about-page-content">
          <h4 className="about-page-subtitle">ABOUT US</h4>
          <h1 className="about-page-title">
            We provide full range of transportation
          </h1>
          <p className="about-page-description">
            The efficiency and reliability of transport systems play a crucial
            role in connecting communities.
          </p>
          {/* Services */}
          <div className="about-page-services">
            <div className="about-page-service">
              <IoEarthOutline className="about-page-icon" />
              <div>
                <h3 className="about-page-service-title">Worldwide Service</h3>
                <p className="about-page-service-text">
                  We’re always provide people a complete solution focused of any
                  business.
                </p>
              </div>
            </div>

            <div className="about-page-service">
              <PiTruckTrailer className="about-page-icon" />
              <div>
                <h3 className="about-page-service-title">Local Service</h3>
                <p className="about-page-service-text">
                  We’re always provide people a complete solution focused of any
                  business.
                </p>
              </div>
            </div>
          </div>
          {/* Learn More Button */}
          <Button text="LEARN MORE" className="primary-btn" />
        </div>

        {/* Right Section */}
        <div className="about-page-image-container">
          <img
            src={about1}
            alt="Worker handling boxes"
            className="about-page-image"
          />

          {/* CEO Card */}
          <div className="about-page-ceo-card">
            <img
              src={aboutprofile}
              alt="CEO"
              className="about-page-ceo-image"
            />
            <h3 className="about-page-ceo-name">John R. Holland</h3>
            <p className="about-page-ceo-title">CEO & Founder</p>
            <p className="about-page-ceo-description">
              We pride ourselves on providing best transport services available
              all over the world.
            </p>
            <p className="about-page-ceo-signature">John R. Holland</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
