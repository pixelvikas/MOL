import React from "react";
import "./Button.css"; // Import styles

const Button = ({
  text,
  onClick,
  className = "",
  type = "button",
  variant = "primary",
}) => {
  return variant === "underline" ? (
    <button
      className={`underline-btn ${className}`}
      onClick={onClick}
      type={type}
    >
      {text}
      <span className="underline"></span>
    </button>
  ) : (
    <button
      className={`btn-comp ${variant}-btn ${className}`}
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;
