import "./style.css";
import HeroComponent from "../../components/HeroComponent";

import { IoEarthOutline } from "react-icons/io5";
import { PiTruckTrailer } from "react-icons/pi";

import about1 from "../../assets/aboutus.png";
import Amruta from "../../assets/team1.png";

import Button from "../../components/Button";

import aboutuscontactbg from "../../assets/aboutuscontactbg.jpeg";
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
import testimonial1 from "../../assets/testimonial1.jpeg";
import testimonial2 from "../../assets/testimonia2.png";

import client1 from "../../assets/testimonial1.jpeg";
import client2 from "../../assets/testimonia2.png";

import jclogo from "../../assets/jctranslogo.jpeg";
import jcert from "../../assets/jctranscert.jpeg";
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
    { icon: aboutno1, value: "75+", label: "Years of Expertise" },
    { icon: aboutno2, value: "25+", label: "Cities served worldwide" },
    { icon: aboutno3, value: "10+", label: "Satisfied clients" },
    { icon: aboutno4, value: "45+", label: "Companies we help" },
  ];

  const reviews = [
    {
      name: "Ashton D Souza",
      role: "Kinza Foods UAE, Manager",
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

  const clients = [client1, client2];

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
        {/* Left Content */}
        <div className="about-page-content">
          <h4 className="about-page-subtitle">About Us</h4>
          <h1 id="about-page-title" className="about-page-title">
            Reliable and Comprehensive Freight Services
          </h1>
          <p className="about-page-description">
            My Ocean Logistics bridges communities and businesses through
            dependable, timely, and secure logistics solutions worldwide.
          </p>

          <div className="about-page-services">
            <article className="about-page-service">
              <IoEarthOutline className="about-page-icon" aria-hidden="true" />
              <div>
                <h2 className="about-page-service-title">
                  Worldwide Logistics Service
                </h2>
                <p className="about-page-service-text">
                  We provide tailored international freight solutions ensuring
                  secure, efficient delivery across borders.
                </p>
              </div>
            </article>

            <article className="about-page-service">
              <PiTruckTrailer className="about-page-icon" aria-hidden="true" />
              <div>
                <h2 className="about-page-service-title">
                  Local Freight & Transport Solutions
                </h2>
                <p className="about-page-service-text">
                  Our regional services deliver cost-effective logistics
                  tailored for local business needs.
                </p>
              </div>
            </article>
          </div>

          <Button
            text="Contact Us"
            className="primary-btn"
            link="/contact"
            aria-label="Contact My Ocean Logistics for services"
          />
        </div>

        {/* Right Content */}
        <div className="about-page-image-container">
          <article
            className="about-page-ceo-card"
            aria-labelledby="ceo-card-title"
          >
            <img
              src={Amruta}
              alt="Amruta Vilas Surve, Founder of My Ocean Logistics"
              className="about-page-ceo-image"
            />
            <h2 id="ceo-card-title" className="about-page-ceo-name">
              Amruta Vilas Surve
            </h2>
            <p className="about-page-ceo-title">Founder, My Ocean Logistics</p>
            <p className="about-page-ceo-description">
              We focus on simplifying global freight and logistics. Our mission
              is to streamline your shipping needs with excellence.
            </p>
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

      <div className="jc-modern-container">
        <div className="jc-modern-header">
          <div className="jc-logo-wrapper">
            <img src={jclogo} alt="JCtrans Logo" className="jc-modern-logo" />
          </div>
        </div>

        <div className="jc-certificate-container">
          <div className="jc-certificate-frame">
            <img
              src={jcert}
              alt="JCtrans Certificate"
              className="jc-modern-cert"
            />
          </div>
        </div>

        <div className="jc-modern-description">
          <h3 className="jc-description-title">Global Logistics Network</h3>
          <p className="jc-description-text">
            Our strategic partnership with the{" "}
            <span className="jc-highlight">JCtrans Network</span> gives us a
            robust global presence, connecting us with over{" "}
            <span className="jc-stat">10,000</span> verified logistics partners
            in <span className="jc-stat">170+ countries</span>. This extensive
            network empowers us to deliver seamless, end-to-end logistics
            solutions across international markets with reliability and speed.
          </p>

          <div className="jc-features-grid">
            <div className="jc-feature">
              <div className="jc-feature-icon">🔑</div>
              <div className="jc-feature-text">
                Priority access to trusted global agents
              </div>
            </div>
            <div className="jc-feature">
              <div className="jc-feature-icon">🛣️</div>
              <div className="jc-feature-text">Optimized routing options</div>
            </div>
            <div className="jc-feature">
              <div className="jc-feature-icon">💰</div>
              <div className="jc-feature-text">Competitive freight rates</div>
            </div>
            <div className="jc-feature">
              <div className="jc-feature-icon">🚛</div>
              <div className="jc-feature-text">
                Multimodal shipment management
              </div>
            </div>
            <div className="jc-feature">
              <div className="jc-feature-icon">🛃</div>
              <div className="jc-feature-text">
                Efficient customs navigation
              </div>
            </div>
            <div className="jc-feature">
              <div className="jc-feature-icon">📍</div>
              <div className="jc-feature-text">Real-time tracking</div>
            </div>
          </div>

          <p className="jc-description-text">
            Through this network alliance, we gain priority access to trusted
            global agents, optimized routing options, and competitive freight
            rates. It enhances our capacity to manage multimodal shipments,
            navigate customs efficiently, and offer real-time tracking.
          </p>

          <div className="jc-cta">
            <p className="jc-cta-text">
              Globally your supply chain is taken care with utmost care through{" "}
              <strong>MY OCEAN LOGISTICS</strong>
            </p>
          </div>
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
