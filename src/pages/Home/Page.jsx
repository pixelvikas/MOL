import React from "react";
import aboutus from "../../assets/homepage-aboutus.png";
import Button from "../../components/Button"; // Import button component

import { IoCheckmarkCircleOutline } from "react-icons/io5";

import "./style.css";

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
    </>
  );
};

export default Home;
