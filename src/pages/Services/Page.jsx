import React from "react";
import HeroComponent from "../../components/HeroComponent";

import service1 from "../../assets/warehousingservice.png";
import service2 from "../../assets/airfreightservice.png";
import service3 from "../../assets/oceanfreightservice.png";
import service4 from "../../assets/roadfreightservice.png";
import service5 from "../../assets/railfreightservice.png";
import service6 from "../../assets/logisticssolutionservice.png";

import { FaArrowRight } from "react-icons/fa6";
import serviceContact from "../../assets/aboutusnobg.png";

import Button from "../../components/Button";
import "./style.css";

const services = [
  { img: service1, title: "Warehousing" },
  { img: service2, title: "Air Freight" },
  { img: service3, title: "Ocean Freight" },
  { img: service4, title: "Road Freight" },
  { img: service5, title: "Rail Freight" },
  { img: service6, title: "Logistics Solution" },
];

const Services = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroComponent
        title="Services"
        link="/"
        linkText="HOME"
        current="SERVICES"
      />

      {/* Services Section */}
      <div className="servicepage-section">
        {/* Titles */}
        <div className="servicepage-header">
          <h1 className="servicepage-title">OUR SERVICES</h1>
          <h2 className="servicepage-subtitle">Logistics services</h2>
        </div>

        {/* Services Grid */}
        <div className="servicepage-grid">
          {services.map((service, index) => (
            <div key={index} className="servicepage-card">
              <div className="servicepage-image-container">
                <img
                  src={service.img}
                  alt={service.title}
                  className="servicepage-image"
                />
                {/* Arrow appears at center on hover */}
                <div className="servicepage-overlay">
                  <FaArrowRight className="servicepage-arrow" />
                </div>
              </div>

              {/* Service Title */}
              <div className="servicepage-title-container">
                <h3 className="servicepage-service-title">{service.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="servicepage-contact">
        {/* Background Image */}
        <div className="servicepage-overlay"></div>

        {/* Content Section */}
        <div className="servicepage-content">
          <h1>Looking for the best logistics transport service?</h1>
          <Button text="CONTACT US" className="primary-btn" />
        </div>
      </div>

      <div className="servicepage-history">
        <h2 className="servicepage-history-title">HISTORY</h2>
        <h1 className="servicepage-history-subtitle">Our Company History</h1>

        <div className="servicepage-timeline">
          <div className="servicepage-timeline-step">
            <h3 className="servicepage-step-title">Step 01</h3>
            <div className="servicepage-timeline-dot"></div>
            <h1 className="servicepage-step-number">01</h1>
            <p className="servicepage-step-description">Order Processing</p>
          </div>

          <div className="servicepage-timeline-step">
            <h3 className="servicepage-step-title">Step 02</h3>
            <div className="servicepage-timeline-dot"></div>
            <h1 className="servicepage-step-number">02</h1>
            <p className="servicepage-step-description">Warehousing</p>
          </div>

          <div className="servicepage-timeline-step">
            <h3 className="servicepage-step-title">Step 03</h3>
            <div className="servicepage-timeline-dot"></div>
            <h1 className="servicepage-step-number">03</h1>
            <p className="servicepage-step-description">Order Tracking</p>
          </div>

          <div className="servicepage-timeline-step">
            <h3 className="servicepage-step-title">Step 04</h3>
            <div className="servicepage-timeline-dot"></div>
            <h1 className="servicepage-step-number">04</h1>
            <p className="servicepage-step-description">Product Delivery</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
