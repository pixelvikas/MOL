import React from "react";
import aboutus from "../../assets/homepage-aboutus.png";
import Button from "../../components/Button"; // Import button component
import warehousing from "../../assets/warehousing.png";

import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { PiWarehouse } from "react-icons/pi";
import { PiAirplane } from "react-icons/pi";
import { GiCargoShip } from "react-icons/gi";
import { PiTruckTrailer } from "react-icons/pi";

import warehousingImg from "../../assets/warehousing.png";
import airFreightImg from "../../assets/airfreight.png";
import oceanFreightImg from "../../assets/oceanfreight.png";
import roadFreightImg from "../../assets/roadfreight.png";

import "./style.css";

const servicesData = [
  {
    id: "01",
    title: "Warehousing",
    icon: <PiWarehouse />,
    image: warehousingImg,
    data: "It must be aligned within a firm to have the most efficient...",
  },
  {
    id: "02",
    title: "Air Freight",
    icon: <PiAirplane />,
    image: airFreightImg,
    data: "It must be aligned within a firm to have the most efficient...",
  },
  {
    id: "03",
    title: "Ocean Freight",
    icon: <GiCargoShip />,
    image: oceanFreightImg,
    data: "It must be aligned within a firm to have the most efficient...",
  },
  {
    id: "04",
    title: "Road Freight",
    icon: <PiTruckTrailer />,
    image: roadFreightImg,
    data: "It must be aligned within a firm to have the most efficient...",
  },
];

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="homepage">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Reliable & Express Logistics Solutions</h1>
            <Button text="GET STARTED" className="primary-btn" />
          </div>
        </div>
      </div>

      {/* Features Section - Overlapping Hero */}
      <section className="features-container">
        {[
          { id: "01", title: "Packaging & Storage" },
          { id: "02", title: "Safety & Quality" },
          { id: "03", title: "Delivery On Time" },
        ].map((feature) => (
          <div className="feature-card" key={feature.id}>
            <div className="feature-number">{feature.id}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">
              We understand the importance of timely delivery.
            </p>
            <div className="feature-line"></div>
          </div>
        ))}
      </section>

      <section className="about-us">
        {/* Left Content */}
        <div className="about-content">
          <h3 className="about-subtitle">MORE ABOUT US</h3>
          <h1 className="about-title">We get solutions to grow transport.</h1>
          <div className="about-features">
            <div className="about-feature">
              <IoCheckmarkCircleOutline className="about-icon" />
              <p>Is always more than our expectation due to your support.</p>
            </div>
            <div className="about-feature">
              <IoCheckmarkCircleOutline className="about-icon" />
              <p>
                We guarantee trusted service for us to grow more around the
                world.
              </p>
            </div>
          </div>
          <div className="about-buttons">
            <Button text="ABOUT COMPANY" className="primary-btn" />
            <Button text="HOW WE WORK" variant="underline" />
          </div>
        </div>

        {/* Right Image */}
        <div className="about-image">
          <img src={aboutus} alt="About Us" loading="lazy" />
        </div>
      </section>

      <section className="services-section">
        {servicesData.map((service) => (
          <div key={service.id} className="services-card">
            <img
              src={service.image}
              alt={service.title}
              className="services-img"
            />
            <div className="services-overlay">
              {/* Normal State Content */}
              <div className="services-header">
                <h1 className="services-number">{service.id}</h1>
                <h2 className="services-title">{service.title}</h2>
              </div>
              <div className="services-icon">{service.icon}</div>

              {/* Hover Content (Initially Hidden) */}
              <div className="services-hover-content">
                <p className="services-text">{service.data}</p>
                <a href="#" className="services-link">
                  READ MORE
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Home;
