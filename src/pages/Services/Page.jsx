import React from "react";
import "./style.css";
import HeroComponent from "../../components/HeroComponent";

import service1 from "../../assets/projectcontainerservice1.png";
import service2 from "../../assets/airfreightservice.png";
import service3 from "../../assets/oceanfreightservice.png";
import service4 from "../../assets/roadfreightservice.png";
import service5 from "../../assets/railfreightservice.png";
import service6 from "../../assets/logisticssolutionservice1.png";

import { FaArrowRight } from "react-icons/fa6";

import Button from "../../components/Button";
import { Helmet } from "react-helmet-async";

const services = [
  { img: service3, title: "Ocean Freight", link: "/services/ocean-freight" },
  { img: service2, title: "Air Freight", link: "/services/air-freight" },
  { img: service4, title: "Road Freight", link: "/services/road-freight" },
  { img: service5, title: "Rail Freight", link: "/services/rail-freight" },
  { img: service1, title: "Project Cargo", link: "/services/project-cargo" },
  {
    img: service6,
    title: "Logistics Solution",
    link: "/services/logistics-solutions",
  },
];

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Logistics & Freight Services | My Ocean Logistics</title>
        <meta
          name="description"
          content="Explore premium logistics and freight services with My Ocean Logistics. We specialize in Air Freight, Ocean Freight, Road Freight, Rail Freight, Warehousing, and tailored Logistics Solutions for businesses worldwide."
        />
        <meta
          name="keywords"
          content="Logistics services, freight services, air freight, ocean freight, road transport, rail freight, warehousing, global logistics solutions, supply chain management, My Ocean Logistics"
        />
        <meta
          property="og:title"
          content="Logistics & Freight Services | My Ocean Logistics"
        />
        <meta
          property="og:description"
          content="Discover comprehensive logistics and freight services from My Ocean Logistics. Your trusted partner for air, ocean, road, and rail transport, plus secure warehousing and custom logistics solutions."
        />
        <meta property="og:image" content="/src/assets/mol.png" />
        <meta property="og:url" content="https://mol-one.vercel.app/services" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Logistics & Freight Services | My Ocean Logistics"
        />
        <meta
          name="twitter:description"
          content="Explore end-to-end logistics and freight services with My Ocean Logistics — your expert partner for air, ocean, rail, and road transportation, warehousing, and supply chain solutions."
        />
        <meta name="twitter:image" content="/src/assets/mol.png" />
      </Helmet>

      <HeroComponent
        title="Services"
        link="/"
        linkText="HOME"
        current="SERVICES"
      />

      <div className="servicepage-section">
        <div className="servicepage-header">
          <h1 className="servicepage-title">OUR SERVICES</h1>
          <h2 className="servicepage-subtitle">Logistics services</h2>
        </div>

        <div className="servicepage-grid">
          {services.map((service, index) => (
            <div key={index} className="servicepage-card">
              <a href={service.link}>
                <div className="servicepage-image-container">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="servicepage-image"
                  />
                  <div className="servicepage-overlay">
                    <FaArrowRight className="servicepage-arrow" />
                  </div>
                </div>

                <div className="servicepage-title-container">
                  <h3 className="servicepage-service-title">{service.title}</h3>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="servicepage-contact">
        <div className="servicepage-overlay"></div>

        <div className="servicepage-content">
          <h1>Looking for the best logistics transport service?</h1>
          <Button text="CONTACT US" className="primary-btn" link="/contact" />
        </div>
      </div>
    </>
  );
};

export default Services;
