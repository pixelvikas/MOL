import HeroComponent from "../../components/HeroComponent";

import { IoEarthOutline } from "react-icons/io5";
import { PiTruckTrailer } from "react-icons/pi";

import about1 from "../../assets/aboutus.png";
import aboutprofile from "../../assets/aboutprofile.png";

import Button from "../../components/Button";

import aboutuscontactbg from "../../assets/aboutuscontactbg.png";
import history1 from "../../assets/history1.png";
import history2 from "../../assets/history2.png";
import history3 from "../../assets/history3.png";

import aboutusnobg from "../../assets/aboutusnobg.png";

import aboutno1 from "../../assets/aboutno1.png";
import aboutno2 from "../../assets/aboutno2.png";
import aboutno3 from "../../assets/aboutno3.png";
import aboutno4 from "../../assets/aboutno4.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import testimonialbg1 from "../../assets/testimonialbg1.png";
import testimonialbg2 from "../../assets/testimonialbg2.png";
import testimonialbg3 from "../../assets/testimonialbg3.png";
import testimonialbg4 from "../../assets/testimonialbg4.png";
import testimonial1 from "../../assets/testimonial1.png";

import client1 from "../../assets/client1.png";
import client2 from "../../assets/client2.png";
import client3 from "../../assets/client3.png";
import client4 from "../../assets/client4.png";
import client5 from "../../assets/client5.png";
import client6 from "../../assets/client6.png";

import "./style.css";

const About = () => {
  const historyData = [
    {
      year: "2023",
      title: "We Have Expert Team",
      text: "We've been using My Ocean Logistics for our international shipments, and they never disappoint.",
      image: history1,
    },
    {
      year: "2022",
      title: "Expansion to New Markets",
      text: "Our company expanded into Europe and Asia, making logistics smoother and faster for our clients.",
      image: history2,
    },
    {
      year: "2021",
      title: "Innovative Logistics Solutions",
      text: "We introduced AI-powered tracking systems to optimize efficiency and reduce delays.",
      image: history3,
    },
  ];

  const aboutData = [
    { icon: aboutno1, value: "35", label: "+ Years of Experience" },
    { icon: aboutno2, value: "528", label: "+ Cities served worldwide" },
    { icon: aboutno3, value: "475", label: "+ Satisfied clients" },
    { icon: aboutno4, value: "45", label: "+ Companies we help" },
  ];

  const reviews = [
    {
      name: "Aditya Sharma",
      role: "Chief Technology Officer",
      review:
        "We've been using My Ocean Logistics for our international shipments, and they never disappoint. Their team ensures on-time deliveries and smooth customs clearance. Highly recommended!",
      image: testimonial1,
    },
    {
      name: "Priya Verma",
      role: "Operations Manager",
      review:
        "Exceptional service! The team at My Ocean Logistics is always available to assist and make shipping stress-free. Highly professional and efficient.",
      image: testimonial1,
    },
    {
      name: "Rahul Gupta",
      role: "Logistics Head",
      review:
        "Reliable and on-time! I have been using My Ocean Logistics for years, and their commitment to excellence is commendable.",
      image: testimonial1,
    },
  ];

  // Review Card Component
  const ReviewCard = ({ name, role, review, image }) => {
    return (
      <div className="about-testimonial-card">
        <p className="about-testimonial-text">"{review}"</p>
        <div className="about-testimonial-client">
          <img
            src={image}
            alt={name}
            className="about-testimonial-client-img"
          />
          <div className="about-testimonial-client-info">
            <h3 className="about-testimonial-client-name">{name}</h3>
            <p className="about-testimonial-client-position">{role}</p>
          </div>
        </div>
      </div>
    );
  };
  // Slick Slider Settings
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // Hide arrows for cleaner look
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

  const clients = [client1, client2, client3, client4, client5, client6];

  return (
    <>
      <HeroComponent
        title="About Us"
        link="/"
        linkText="HOME"
        current="ABOUT US"
      />

      <div className="about-page-section">
        {/* Left Section */}
        <div className="about-page-content">
          <h4 className="about-page-subtitle">ABOUT US</h4>
          <h1 className="about-page-title">
            We provide full range of transportation
          </h1>
          <p className="about-page-description">
            The efficiency and reliability of transport systems play a crucial
            role in connecting communities.
          </p>
          {/* Services */}
          <div className="about-page-services">
            <div className="about-page-service">
              <IoEarthOutline className="about-page-icon" />
              <div>
                <h3 className="about-page-service-title">Worldwide Service</h3>
                <p className="about-page-service-text">
                  We’re always provide people a complete solution focused of any
                  business.
                </p>
              </div>
            </div>

            <div className="about-page-service">
              <PiTruckTrailer className="about-page-icon" />
              <div>
                <h3 className="about-page-service-title">Local Service</h3>
                <p className="about-page-service-text">
                  We’re always provide people a complete solution focused of any
                  business.
                </p>
              </div>
            </div>
          </div>
          {/* Learn More Button */}
          <Button text="LEARN MORE" className="primary-btn" />
        </div>

        {/* Right Section */}
        <div className="about-page-image-container">
          <img
            src={about1}
            alt="Worker handling boxes"
            className="about-page-image"
          />

          {/* CEO Card */}
          <div className="about-page-ceo-card">
            <img
              src={aboutprofile}
              alt="CEO"
              className="about-page-ceo-image"
            />
            <h3 className="about-page-ceo-name">John R. Holland</h3>
            <p className="about-page-ceo-title">CEO & Founder</p>
            <p className="about-page-ceo-description">
              We pride ourselves on providing best transport services available
              all over the world.
            </p>
            <p className="about-page-ceo-signature">John R. Holland</p>
          </div>
        </div>
      </div>

      <div className="about-section">
        <img src={aboutuscontactbg} alt="" className="about-bg" />

        <div className="about-content">
          <h1>We are proud to deliver excellence & success</h1>
          <p>
            Our company has grown into a dynamic force in transportation across
            the world. Equipped with state-of-the-art technologies, warehouse
            services, carrier-partners, and dedicated employees.
          </p>

          <Button text="CONTACT US" className="primary-btn" />
        </div>
      </div>
      <div className="history-section">
        <div className="history-header">
          <h1 className="history-main-title">HISTORY</h1>
          <h2 className="history-subtitle">Our Company History</h2>
        </div>
        <div className="history-card-section">
          {historyData.map((item, index) => (
            <div
              key={index}
              className={`history-item history-mobile ${
                index % 2 === 0 ? "history-item-odd" : "history-item-even"
              }`}
            >
              <h1 className="history-year">{item.year}</h1>
              <h3 className="history-title">{item.title}</h3>
              <p className="history-text">{item.text}</p>
              <div className="timeline">
                <div className="timeline-dot"></div>
              </div>
              <img
                src={item.image}
                alt={item.title}
                className="history-image"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="aboutno-section">
        <img src={aboutusnobg} alt="Background" className="aboutno-bg" />

        <div className="aboutno-overlay">
          <div className="aboutno-stats">
            {aboutData.map((item, index) => (
              <div key={index} className="aboutno-stat">
                <div className="aboutno-icon-box">
                  <img
                    src={item.icon}
                    alt={item.label}
                    className="aboutno-icon"
                  />
                </div>
                <h1>{item.value}</h1>
                <p>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="about-testimonial-section">
        {/* Title Section */}
        <div className="about-testimonial-header">
          <h1 className="about-testimonial-title">TESTIMONIALS</h1>
          <h2 className="about-testimonial-subtitle">What people say?</h2>
        </div>

        {/* Floating Images */}
        <div className="about-testimonial-floating-images">
          <img
            src={testimonialbg1}
            alt="Client 1"
            className="about-testimonial-float about-testimonial-float-top-left"
          />
          <img
            src={testimonialbg2}
            alt="Client 2"
            className="about-testimonial-float about-testimonial-float-top-right"
          />
          <img
            src={testimonialbg3}
            alt="Client 3"
            className="about-testimonial-float about-testimonial-float-bottom-left"
          />
          <img
            src={testimonialbg4}
            alt="Client 4"
            className="about-testimonial-float about-testimonial-float-bottom-right"
          />
        </div>

        {/* Slider */}
        <Slider {...settings} className="about-testimonial-slider">
          {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </Slider>
      </div>
      <div className="about-client-section">
        {/* Title Section */}
        <div className="about-client-header">
          <h1 className="about-client-title">CLIENTS</h1>
          <h2 className="about-client-subtitle">Our happy clients?</h2>
        </div>

        {/* Clients Logo Grid */}
        <div className="about-client-logos">
          {clients.map((client, index) => (
            <img
              key={index}
              src={client}
              alt={`Client ${index + 1}`}
              className="about-client-logo"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
