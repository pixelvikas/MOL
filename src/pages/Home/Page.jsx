import React from "react";
import "./style.css";
import aboutus from "../../assets/homepage-aboutus.png";
import Button from "../../components/Button"; // Import button component

import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { PiWarehouse } from "react-icons/pi";
import { PiAirplane } from "react-icons/pi";
import { GiCargoShip } from "react-icons/gi";
import { PiTruckTrailer } from "react-icons/pi";

import warehousingImg from "../../assets/warehousing.png";
import airFreightImg from "../../assets/airfreight.png";
import oceanFreightImg from "../../assets/oceanfreight.png";
import roadFreightImg from "../../assets/roadfreight.png";

import workprocessBg from "../../assets/workbg.png";
import workprocess1 from "../../assets/work1.png";
import workprocess2 from "../../assets/work2.png";
import workprocess3 from "../../assets/work3.png";
import workprocess4 from "../../assets/work4.png";

import numberBg from "../../assets/numberbg.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import testimonial1 from "../../assets/testimonial1.png";



const servicesData = [
  {
    id: "01",
    title: "Warehousing",
    icon: <PiWarehouse />,
    image: warehousingImg,
    link: "/services/warehousing",
    data: "It must be aligned within a firm to have the most efficient...",
  },
  {
    id: "02",
    title: "Air Freight",
    icon: <PiAirplane />,
    image: airFreightImg,
    link: "/services/air-freight",
    data: "It must be aligned within a firm to have the most efficient...",
  },
  {
    id: "03",
    title: "Ocean Freight",
    icon: <GiCargoShip />,
    image: oceanFreightImg,
    link: "/services/ocean-freight",
    data: "It must be aligned within a firm to have the most efficient...",
  },
  {
    id: "04",
    title: "Road Freight",
    icon: <PiTruckTrailer />,
    image: roadFreightImg,
    link: "/services/road-freight",
    data: "It must be aligned within a firm to have the most efficient...",
  },
];

const steps = [
  {
    id: "01",
    title: "Order Processing",
    description: "The logistics process begins with the receipt of customer...",
    image: workprocess1,
  },
  {
    id: "02",
    title: "Warehousing",
    description:
      "Goods that are ready for shipment are stored in warehouses or...",
    image: workprocess2,
  },
  {
    id: "03",
    title: "Order Tracking",
    description: "Real-time tracking systems are used to monitor the...",
    image: workprocess3,
  },
  {
    id: "04",
    title: "Product Delivery",
    description: "In the final stage of logistics services.",
    image: workprocess4,
  },
];

const reviews = [
  {
    name: "Priya Sharma",
    role: "Home Loan",
    rating: 4.5,
    review:
      "I'm so glad I chose this consultancy for my home loan. They guided me through every step, making the process smooth and stress-free.",
    image: testimonial1,
  },
  {
    name: "Amit Verma",
    role: "Business Loan",
    rating: 5,
    review:
      "Exceptional service! The team provided me with the best financial advice and helped me secure my business loan effortlessly.",
    image: testimonial1,
  },
  {
    name: "Neha Gupta",
    role: "Education Loan",
    rating: 4,
    review:
      "The team was highly professional and made my education loan process hassle-free. Highly recommend their services!",
    image: testimonial1,
  },
  {
    name: "Priya Sharma",
    role: "Home Loan",
    rating: 4.5,
    review:
      "I'm so glad I chose this consultancy for my home loan. They guided me through every step, making the process smooth and stress-free.",
    image: testimonial1,
  },
  {
    name: "Amit Verma",
    role: "Business Loan",
    rating: 5,
    review:
      "Exceptional service! The team provided me with the best financial advice and helped me secure my business loan effortlessly.",
    image: testimonial1,
  },
  {
    name: "Neha Gupta",
    role: "Education Loan",
    rating: 4,
    review:
      "The team was highly professional and made my education loan process hassle-free. Highly recommend their services!",
    image: testimonial1,
  },
];
const ReviewCard = ({ name, role, review, image }) => {
  return (
    <div className="testimonial-content">
      <img src={image} alt={name} className="testimonial-image" />
      <div className="testimonial-text">
        <p className="testimonial-quote">"{review}"</p>
        <h1 className="testimonial-name">{name}</h1>
        <h2 className="testimonial-designation">{role}</h2>
      </div>
    </div>
  );
};
const settings = {
  infinite: true,
  speed: 200,
  slidesToShow: 1, // Show 1 slide at a time (matches reference image)
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="homepage">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Reliable & Express Logistics Solutions</h1>
            <Button
              text="GET STARTED"
              className="primary-btn"
              link="/contact"
            />
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
            <Button
              text="ABOUT COMPANY"
              className="primary-btn"
              link="/about"
            />
            <Button text="HOW WE WORK" variant="underline" link="/about" />
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
                <a href={service.link} className="services-link">
                  READ MORE
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="work-process">
        {/* Section Title */}
        <h3 className="work-process-subtitle">WORK PROCESS</h3>
        <h1 className="work-process-title">Logistics Workflow</h1>

        {/* Background Image */}
        <div className="workflow-container">
          <img
            src={workprocessBg}
            alt="Workflow Background"
            className="workflow-bg"
          />

          {/* Steps */}
          <div className="workflow-steps">
            {steps.map((step, index) => (
              <div className="workflow-step" key={index}>
                <div className="workflow-step-number">{step.id}</div>
                <img
                  src={step.image}
                  alt={step.title}
                  className="workflow-step-image"
                />
                <h2 className="workflow-step-title">{step.title}</h2>
                <p className="workflow-step-description">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="number-section">
        <img src={numberBg} alt="Background" className="number-bg" />

        <div className="number-info">
          <div className="product-info">
            <h1>426</h1>
            <p>
              Products <br />
              Transport
            </p>
          </div>
          <div className="call-info">
            <p>Toll Free call</p>
            <p>+022-22334455</p>
          </div>
        </div>
      </div>

      {/* <div className="reviews">
        <div className="reviews-section">
          <h1>
            Client <span className="highlight">Reviews</span>
          </h1>
          <Slider {...settings} className="reviews-container">
            {reviews.map((review, index) => (
              <ReviewCard key={index} {...review} />
            ))}
          </Slider>
        </div>
      </div> */}

      <div className="testimonial-section">
        <div className="testimonial-container">
          {/* Left Section */}
          <div className="testimonial-header">
            <h3 className="testimonial-subtitle">WHAT PEOPLE SAY</h3>
            <h1 className="testimonial-title">
              What our clients <br /> say about us
            </h1>
          </div>

          {/* Right Section - Testimonial Slider */}
          <Slider {...settings} className="testimonial-slider">
            {reviews.map((review, index) => (
              <ReviewCard key={index} {...review} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Home;
