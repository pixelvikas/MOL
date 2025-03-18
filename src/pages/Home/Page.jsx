import React from "react";
import "./style.css";
import aboutus from "../../assets/homepage-aboutus.png";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

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

import { Helmet } from "react-helmet-async";

const servicesData = [
  {
    id: "01",
    title: "Warehousing",
    icon: <PiWarehouse />,
    image: warehousingImg,
    link: "/services/warehousing",
    data: "Our secure and modern warehousing solutions ensure efficient inventory management, safe storage, and timely distribution for businesses of all sizes.",
  },
  {
    id: "02",
    title: "Air Freight",
    icon: <PiAirplane />,
    image: airFreightImg,
    link: "/services/air-freight",
    data: "We provide fast, reliable, and cost-effective air freight services to help your business meet global shipping deadlines with ease.",
  },
  {
    id: "03",
    title: "Ocean Freight",
    icon: <GiCargoShip />,
    image: oceanFreightImg,
    link: "/services/ocean-freight",
    data: "Our ocean freight services offer secure and economical shipping solutions for large and heavy cargo across international waters.",
  },
  {
    id: "04",
    title: "Road Freight",
    icon: <PiTruckTrailer />,
    image: roadFreightImg,
    link: "/services/road-freight",
    data: "We deliver reliable and flexible road freight solutions for domestic and cross-border transport, ensuring safe and timely delivery of goods.",
  },
];
const steps = [
  {
    id: "01",
    title: "Order Processing",
    description:
      "The logistics process begins with efficient order processing, verifying customer requests, and preparing shipments for fast delivery.",
    image: workprocess1,
  },
  {
    id: "02",
    title: "Warehousing",
    description:
      "All goods are securely stored in modern warehouses with proper inventory management, ensuring product safety and readiness for dispatch.",
    image: workprocess2,
  },
  {
    id: "03",
    title: "Order Tracking",
    description:
      "Real-time order tracking systems are used to monitor each shipment’s journey, offering full visibility and timely updates.",
    image: workprocess3,
  },
  {
    id: "04",
    title: "Product Delivery",
    description:
      "The final stage includes safe, on-time product delivery to the customer’s location with quality checks and confirmation.",
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
      <Helmet>
        <title>
          My Ocean Logistics | Global Logistics, Freight & Supply Chain Experts
        </title>
        <meta
          name="description"
          content="Discover world-class logistics solutions with My Ocean Logistics. We offer professional air freight, ocean freight, road and rail transportation, warehousing, and complete supply chain management tailored to your business."
        />
        <meta
          name="keywords"
          content="My Ocean Logistics, global logistics, freight solutions, air freight services, ocean freight services, road freight, rail transportation, warehousing solutions, supply chain management, international shipping"
        />
        <meta
          property="og:title"
          content="My Ocean Logistics | Global Logistics & Freight Experts"
        />
        <meta
          property="og:description"
          content="Explore reliable and efficient logistics solutions with My Ocean Logistics. From freight forwarding to warehousing, we simplify your supply chain and connect your business to the world."
        />
        <meta property="og:image" content="/src/assets/mol.png" />
        <meta property="og:url" content="https://mol-one.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="My Ocean Logistics | Trusted Freight & Logistics Partner"
        />
        <meta
          name="twitter:description"
          content="Get seamless freight and logistics solutions with My Ocean Logistics. We provide air, ocean, road, and rail transport and warehousing services tailored for global businesses."
        />
        <meta name="twitter:image" content="/src/assets/mol.png" />
      </Helmet>

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

      <section className="features-container">
        {[
          {
            id: "01",
            title: "Packaging & Secure Storage",
            description:
              "We offer professional packaging and secure storage solutions to protect your products and ensure safe delivery.",
          },
          {
            id: "02",
            title: "Safety & Quality Assurance",
            description:
              "We prioritize safety and quality with strict checks at every step to deliver products in perfect condition.",
          },
          {
            id: "03",
            title: "Timely & Reliable Delivery",
            description:
              "Our expert logistics team ensures fast, on-time delivery with real-time tracking and dependable service.",
          },
        ].map((feature) => (
          <article className="feature-card" key={feature.id}>
            <header>
              <div className="feature-number">{feature.id}</div>
              <h2 className="feature-title">{feature.title}</h2>
            </header>
            <p className="feature-description">{feature.description}</p>
            <div className="feature-line"></div>
          </article>
        ))}
      </section>

      <section className="about-us" aria-labelledby="about-title">
        <article className="about-content">
          <h3 className="about-subtitle">
            More About Our Logistics & Transport Services
          </h3>
          <h1 id="about-title" className="about-title">
            We provide innovative solutions to grow global transport and
            logistics.
          </h1>
          <div className="about-features">
            <div className="about-feature">
              <IoCheckmarkCircleOutline className="about-icon" />
              <p>
                Our customer satisfaction is always beyond expectations thanks
                to your continued trust and support.
              </p>
            </div>
            <div className="about-feature">
              <IoCheckmarkCircleOutline className="about-icon" />
              <p>
                We guarantee reliable and secure transport services that help us
                expand across the world.
              </p>
            </div>
          </div>
          <div className="about-buttons">
            <Button
              text="Learn More About Our Company"
              className="primary-btn"
              link="/about"
              aria-label="Learn more about our company"
            />
            <Button
              text="See How We Work"
              variant="underline"
              link="/about"
              aria-label="See how we work"
            />
          </div>
        </article>

        <figure className="about-image">
          <img
            src={aboutus}
            alt="Professional logistics team managing global transport solutions"
            loading="lazy"
          />
        </figure>
      </section>

      <section className="services-section" aria-labelledby="services-heading">
        {servicesData.map((service) => (
          <Link
            to={service.link}
            key={service.id}
            className="services-card-link"
            aria-label={`Learn more about our ${service.title} service`}
          >
            <article className="services-card">
              <img
                src={service.image}
                alt={`${service.title} - Professional logistics service`}
                className="services-img"
                loading="lazy"
              />
              <div className="services-overlay">
                <div className="services-header">
                  <h3 className="services-number">{service.id}</h3>
                  <h3 className="services-title">{service.title}</h3>
                </div>
                <div className="services-icon">{service.icon}</div>
                <div className="services-hover-content">
                  <p className="services-text">{service.data}</p>
                  <span className="services-link">LEARN MORE</span>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </section>

      <section className="work-process" aria-labelledby="workflow-title">
        <h3 className="work-process-subtitle">Work Process Overview</h3>
        <h2 id="workflow-title" className="work-process-title">
          Our Logistics Workflow for Reliable Delivery
        </h2>

        <div className="workflow-container">
          <img
            src={workprocessBg}
            alt="Logistics workflow background visual"
            className="workflow-bg"
            loading="lazy"
          />

          <div className="workflow-steps">
            {steps.map((step) => (
              <article className="workflow-step" key={step.id}>
                <div className="workflow-step-number">{step.id}</div>
                <img
                  src={step.image}
                  alt={`${step.title} illustration`}
                  className="workflow-step-image"
                  loading="lazy"
                />
                <h3 className="workflow-step-title">{step.title}</h3>
                <p className="workflow-step-description">
                  {step.description.split(" ").slice(0, 10).join(" ")}
                  {step.description.split(" ").length > 10 ? "..." : ""}
                </p>
              </article>
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
