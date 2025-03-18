import React from "react";
import { useNavigate } from "react-router-dom";
import "./button.css"; // Import styles

const Button = ({
  text,
  onClick,
  className = "",
  type = "button",
  variant = "primary",
  link = "",
  target = "_self", // For external links or new tabs if needed
}) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }
    if (link) {
      // Check if the link is external or internal
      if (link.startsWith("http")) {
        window.open(link, target);
      } else {
        navigate(link);
      }
    }
  };

  return variant === "underline" ? (
    <button
      className={`underline-btn ${className}`}
      onClick={handleClick}
      type={type}
    >
      {text}
      <span className="underline"></span>
    </button>
  ) : (
    <button
      className={`btn-comp ${variant}-btn ${className}`}
      onClick={handleClick}
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;
