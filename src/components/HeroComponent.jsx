import React from "react";
import heroCompBG from "../assets/herocompbg.png"; // Adjust the path as needed

const HeroComponent = ({ title, link, linkText, current }) => {
  return (
    <div className="hero-component-section">
      <img
        src={heroCompBG}
        alt="Hero Background"
        className="hero-component-image"
      />
      <div className="hero-component-overlay">
        <h1 className="hero-component-title">{title}</h1>
        <div className="hero-component-breadcrumb">
          <a href={link} className="hero-component-breadcrumb-link">
            {linkText}
          </a>
          <span className="hero-component-breadcrumb-separator"> - </span>
          <span className="hero-component-breadcrumb-current">{current}</span>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
