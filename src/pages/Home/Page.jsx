import React, { useEffect, useState } from "react";
import "./style.css";
import aboutus from "../../assets/homepage-aboutus.png";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { GoPackageDependencies } from "react-icons/go";

import { PiAirplane } from "react-icons/pi";
import { GiCargoShip } from "react-icons/gi";
import { PiTruckTrailer } from "react-icons/pi";

import heroBg1 from "../../assets/herobg.png";
import heroBg2 from "../../assets/herobg2.jpeg";
import heroBg3 from "../../assets/herobg3.jpeg";
import heroBg4 from "../../assets/herobg4.jpeg";

import warehousingImg from "../../assets/projectcontainerservice.png";
import airFreightImg from "../../assets/airfreight.png";
import oceanFreightImg from "../../assets/oceanfreight.png";
import roadFreightImg from "../../assets/roadfreight.png";
import LogisticsSolution from "../../assets/logisticssolutionservice.png";

import workprocess1 from "../../assets/work1.png";
import workprocess2 from "../../assets/work2.png";
import workprocess3 from "../../assets/work3.png";
import workprocess4 from "../../assets/work4.png";

import numberBg from "../../assets/numberbg.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testimonial1 from "../../assets/testimonial1.jpeg";
import testimonial2 from "../../assets/testimonia2.png";

import { Helmet } from "react-helmet-async";

const servicesData = [
  {
    id: "01",
    title: "Ocean Freight",
    icon: <GiCargoShip />,
    image: oceanFreightImg,
    link: "/services/ocean-freight",
    data: "Our ocean freight services offer secure and economical shipping solutions for large and heavy cargo across international waters.",
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
    title: "Road Freight",
    icon: <PiTruckTrailer />,
    image: roadFreightImg,
    link: "/services/road-freight",
    data: "We deliver reliable and flexible road freight solutions for domestic and cross-border transport, ensuring safe and timely delivery of goods.",
  },
  {
    id: "04",
    title: "Logistics Solution",
    icon: <GoPackageDependencies />,
    image: LogisticsSolution,
    link: "/services/logistics-solutions",
    data: "Our ocean freight services offer secure and economical shipping solutions for large and heavy cargo across international waters.",
  },
];
const reviews = [
  {
    name: "Ashton D Souza",
    role: "Kinza, Manager",
    review:
      "My Ocean Logistics consistently delivers prompt and brilliant service. Under Miss Amruta Surve's dynamic leadership, the company's future looks bright and boundless. We wish them all the very best in their journey to continued growth!",
    image: testimonial1,
  },
  {
    name: "Chirag Dattani",
    role: "Kanex, Manager",
    review:
      "The communication & services throughout the shipping process has been clear and effective. Updates were provided in a timely manner, and our queries were promptly addressed by your team.",
    image: testimonial2,
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
  slidesToShow: 1,
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
  const images = [heroBg1, heroBg2, heroBg3, heroBg4];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // 5 seconds per slide
    return () => clearInterval(interval);
  }, []);

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
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === currentImage ? "active" : ""}`}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}

        <div className="hero-overlay">
          <div className="hero-content">
            <p>My Ocean Logistics</p>
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
            title: "Freight Forwarding",
            description:
              "We offer freight service globally with cost effective pricing for you to ship effectively with international shipping",
          },
          {
            id: "02",
            title: "Custom Clearance",
            description:
              "We prioritize safety and quality with strict checks at every step to deliver products in perfect condition.",
          },
          {
            id: "03",
            title: "Transportation",
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
            We provide innovative freight forwarding solutions to effectively
            ship your goods globally.
          </h1>
          <div className="about-features">
            <div className="about-feature">
              <IoCheckmarkCircleOutline className="about-icon" />
              <p>
                We are focused on delivering your goods with specialised skills
                and safety
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

      {/* <section className="work-process" aria-labelledby="workflow-title">
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
      </section> */}

      <div className="number-section">
        <img src={numberBg} alt="Background" className="number-bg" />

        <div className="number-info">
          <div className="product-info">
            <h1>426</h1>
            <p>
              Shipments <br />
              Shipped
            </p>
          </div>
          <div className="call-info">
            <p>Contact Number</p>
            <p>+91 9152599995</p>
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
