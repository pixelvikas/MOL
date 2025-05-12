import React from "react";
import "./style.css";
import HeroComponent from "../../components/HeroComponent";
import team1 from "../../assets/team1.png";
import team2 from "../../assets/team2.png";
import team3 from "../../assets/team3.png";
import team4 from "../../assets/team4.png";
import { FaLinkedin } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const Team = () => {
  const teamMembers = [
    {
      name: "Amruta Surve",
      role: "Founder",
      img: team1,
      linkedin: "https://www.linkedin.com/in/amruta-v-9538011b/",
    },
    {
      name: "Avinash Palekar",
      role: "Co-Founder",
      img: team2,
      linkedin: "",
    },
    {
      name: "Capt. Anoop Thankachan",
      role: "Co-Founder",
      img: team3,
      linkedin: "",
    },
    {
      name: "Manoj Pillai",
      role: "Sales Advisor Board",
      img: team4,
      linkedin: "https://www.linkedin.com/in/manoj-pillai-a608044/",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Meet Our Logistics Experts | My Ocean Logistics - Professional Freight
          Solutions Team
        </title>
        <meta
          name="description"
          content="Meet the dedicated team of logistics professionals at My Ocean Logistics. Our experienced experts deliver world-class freight, shipping, and supply chain solutions to support your business globally."
        />
        <meta
          property="og:title"
          content="Meet Our Logistics Experts | My Ocean Logistics"
        />
        <meta
          property="og:description"
          content="Discover the passionate and skilled team behind My Ocean Logistics, committed to delivering world-class freight and supply chain solutions globally."
        />
        <meta property="og:image" content="/src/assets/mol.png" />
        <meta property="og:url" content="https://mol-one.vercel.app/our-team" />
      </Helmet>

      <HeroComponent
        title="Our Team"
        link="/"
        linkText="HOME"
        current="OUR TEAM"
      />

      <div className="team-section">
        <div className="team-header">
          <h2 className="team-subtitle">OUR TEAM</h2>
          <h1 className="team-title">Meet Our Leadership</h1>
        </div>

        <div className="team-container">
          {teamMembers.map((member, index) => (
            <div className="team-member" key={index}>
              <div className="image-wrapper">
                <img
                  src={member.img}
                  alt={member.name}
                  className="member-image"
                />
                <div className="linkedin-overlay">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="linkedin-link"
                    aria-label={`Connect with ${member.name} on LinkedIn`}
                  >
                    <FaLinkedin className="linkedin-icon" />
                  </a>
                </div>
              </div>
              <div className="member-info">
                <h3 className="member-name">{member.name}</h3>
                <p className="member-role">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Team;
