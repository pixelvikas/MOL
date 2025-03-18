import React from "react";
import "./loadingpage.css"; // Add the styles for the loading spinner
import logo from "../assets/logo.png";

const LoadingPage = () => {
  return (
    <div className="loading-page">
      <div className="logo-loader-container">
        <img className="logo-loader" src={logo} alt="Loading..." />
      </div>
    </div>
  );
};

export default LoadingPage;
