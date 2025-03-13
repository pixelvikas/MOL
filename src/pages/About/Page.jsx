import HeroComponent from "../../components/HeroComponent";

import { IoEarthOutline } from "react-icons/io5";
import { PiTruckTrailer } from "react-icons/pi";

import about1 from "../../assets/aboutus.png";
import aboutprofile from "../../assets/aboutprofile.png";

import Button from "../../components/Button";

import aboutuscontactbg from "../../assets/aboutuscontactbg.png";
import history1 from "../../assets/history1.png";
import history2 from "../../assets/history2.png";
import history3 from "../../assets/history3.png";

import "./style.css";

const About = () => {
  const historyData = [
    {
      year: "2023",
      title: "We Have Expert Team",
      text: "We've been using My Ocean Logistics for our international shipments, and they never disappoint.",
      image: history1,
    },
    {
      year: "2022",
      title: "Expansion to New Markets",
      text: "Our company expanded into Europe and Asia, making logistics smoother and faster for our clients.",
      image: history2,
    },
    {
      year: "2021",
      title: "Innovative Logistics Solutions",
      text: "We introduced AI-powered tracking systems to optimize efficiency and reduce delays.",
      image: history3,
    },
  ];
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

      <div className="about-section">
        <img src={aboutuscontactbg} alt="" className="about-bg" />

        <div className="about-content">
          <h1>We are proud to deliver excellence & success</h1>
          <p>
            Our company has grown into a dynamic force in transportation across
            the world. Equipped with state-of-the-art technologies, warehouse
            services, carrier-partners, and dedicated employees.
          </p>

          <Button text="CONTACT US" className="primary-btn" />
        </div>
      </div>
      <div className="history-section">
        <div className="history-header">
          <h1 className="history-main-title">HISTORY</h1>
          <h2 className="history-subtitle">Our Company History</h2>
        </div>
        <div className="history-card-section">
          {historyData.map((item, index) => (
            <div
              key={index}
              className={`history-item history-mobile ${
                index % 2 === 0 ? "history-item-odd" : "history-item-even"
              }`}
            >
              <h1 className="history-year">{item.year}</h1>
              <h3 className="history-title">{item.title}</h3>
              <p className="history-text">{item.text}</p>
              <div className="timeline">
                <div className="timeline-dot"></div>
              </div>
              <img
                src={item.image}
                alt={item.title}
                className="history-image"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
