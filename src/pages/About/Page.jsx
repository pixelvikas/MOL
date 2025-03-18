import "./style.css";
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

import { Helmet } from "react-helmet-async";

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
      <Helmet>
        <title>
          About Us | My Ocean Logistics - Global Freight & Logistics Experts
        </title>
        <meta
          name="description"
          content="Learn about My Ocean Logistics, a leader in global freight services including warehousing, air, ocean, road, and rail logistics. Discover our mission, values, and dedication to delivering efficient and reliable supply chain solutions worldwide."
        />
        <meta
          name="keywords"
          content="About My Ocean Logistics, logistics company, global freight, supply chain solutions, transportation services, warehousing, air freight, ocean freight, road freight, rail freight, logistics experts"
        />
        <meta
          property="og:title"
          content="About Us | My Ocean Logistics - Global Freight & Logistics Experts"
        />
        <meta
          property="og:description"
          content="Explore the mission, vision, and expertise of My Ocean Logistics. We deliver top-tier logistics and global freight services tailored to your business needs."
        />
        <meta property="og:image" content="/src/assets/mol.png" />
        <meta property="og:url" content="https://mol-one.vercel.app/about" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="About Us | My Ocean Logistics - Freight & Logistics Experts"
        />
        <meta
          name="twitter:description"
          content="Get to know My Ocean Logistics — trusted logistics partners for warehousing, shipping, and freight solutions worldwide."
        />
        <meta name="twitter:image" content="/src/assets/mol.png" />
      </Helmet>

      <HeroComponent
        title="About Us"
        link="/"
        linkText="HOME"
        current="ABOUT US"
      />

      <section
        className="about-page-section"
        aria-labelledby="about-page-title"
      >
        {/* Left Section */}
        <div className="about-page-content">
          <h4 className="about-page-subtitle">ABOUT US</h4>
          <h1 id="about-page-title" className="about-page-title">
            Reliable and Comprehensive Transportation Solutions
          </h1>
          <p className="about-page-description">
            At My Ocean Logistics, we specialize in connecting communities and
            businesses through efficient, timely, and secure logistics and
            transport services across the globe.
          </p>

          {/* Services */}
          <div className="about-page-services">
            <article className="about-page-service">
              <IoEarthOutline className="about-page-icon" aria-hidden="true" />
              <div>
                <h2 className="about-page-service-title">
                  Worldwide Logistics Service
                </h2>
                <p className="about-page-service-text">
                  We offer global transportation and freight solutions tailored
                  for international businesses, ensuring safe and timely
                  delivery across borders.
                </p>
              </div>
            </article>

            <article className="about-page-service">
              <PiTruckTrailer className="about-page-icon" aria-hidden="true" />
              <div>
                <h2 className="about-page-service-title">
                  Local Freight and Transport Solutions
                </h2>
                <p className="about-page-service-text">
                  Our local logistics services are designed to support regional
                  businesses with reliable and cost-effective transport
                  solutions.
                </p>
              </div>
            </article>
          </div>

          {/* Learn More Button */}
          <Button
            text="CONTACT US"
            className="primary-btn"
            link="/contact"
            aria-label="Learn more about our transportation and logistics services"
          />
        </div>

        {/* Right Section */}
        <div className="about-page-image-container">
          <figure>
            <img
              src={about1}
              alt="Logistics worker handling cargo boxes for global transport"
              className="about-page-image"
            />
            <figcaption>
              Efficient cargo handling by our dedicated logistics team.
            </figcaption>
          </figure>

          {/* CEO Card */}
          <article
            className="about-page-ceo-card"
            aria-labelledby="ceo-card-title"
          >
            <img
              src={aboutprofile}
              alt="John R. Holland, CEO of Global Transport Services"
              className="about-page-ceo-image"
            />
            <h2 id="ceo-card-title" className="about-page-ceo-name">
              John R. Holland
            </h2>
            <p className="about-page-ceo-title">
              Founder & Chief Executive Officer
            </p>
            <p className="about-page-ceo-description">
              At My Ocean Logistics, we are committed to delivering top-tier
              global transportation and logistics solutions. Our mission is to
              ensure safe, timely, and cost-effective cargo services worldwide.
            </p>
            <p className="about-page-ceo-signature">John R. Holland</p>
          </article>
        </div>
      </section>

      <div className="about-section" aria-labelledby="about-section-title">
        <img
          src={aboutuscontactbg}
          alt="Global logistics and transportation background image"
          className="about-bg"
        />

        <div className="about-content">
          <h1 id="about-section-title">
            We are proud to deliver excellence in global transport & logistics
            services
          </h1>
          <p>
            At My Ocean Logistics, we have evolved into a trusted leader in
            global transportation, logistics, and freight forwarding solutions.
            Our success is built on cutting-edge technologies, secure
            warehousing services, reliable carrier partnerships, and a team of
            dedicated logistics professionals committed to timely delivery and
            customer satisfaction.
          </p>

          <Button
            text="CONTACT US"
            className="primary-btn"
            link="/contact"
            aria-label="Contact us for transportation and logistics services"
          />
        </div>
      </div>

      <div className="history-section" aria-labelledby="company-history-title">
        <div className="history-header">
          <h1 id="company-history-title" className="history-main-title">
            History
          </h1>
          <h2 className="history-subtitle">Our Company History</h2>
        </div>

        <div className="history-card-section">
          {historyData.map((item, index) => (
            <article
              key={index}
              className={`history-item history-mobile ${
                index % 2 === 0 ? "history-item-odd" : "history-item-even"
              }`}
              aria-labelledby={`history-title-${index}`}
            >
              <h3 className="history-year">{item.year}</h3>
              <h4 id={`history-title-${index}`} className="history-title">
                {item.title}
              </h4>
              <p className="history-text">
                {item.text} Our logistics company continues to strive for
                reliable freight shipping and innovative transport solutions.
              </p>
              <div className="timeline">
                <div className="timeline-dot" aria-hidden="true"></div>
              </div>
              <img
                src={item.image}
                alt={`${item.title} - ${item.year}`}
                className="history-image"
                loading="lazy"
              />
            </article>
          ))}
        </div>
      </div>

      <section
        className="aboutno-section"
        aria-labelledby="company-achievements-heading"
      >
        <img
          src={aboutusnobg}
          alt="Global transportation services background"
          className="aboutno-bg"
          loading="lazy"
        />

        <div className="aboutno-overlay">
          <div className="aboutno-stats">
            {aboutData.map((item, index) => (
              <article
                key={index}
                className="aboutno-stat"
                aria-label={item.label}
              >
                <div className="aboutno-icon-box">
                  <img
                    src={item.icon}
                    alt={`${item.label} icon`}
                    className="aboutno-icon"
                    loading="lazy"
                  />
                </div>
                <h1>{item.value}</h1>
                <p>{item.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

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
