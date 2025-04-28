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
      name: "Aditya Sharma",
      role: "Chief Technology Officer",
      img: team1,
      linkedin: "https://linkedin.com/in/sample-aditya",
    },
    {
      name: "Rahul Verma",
      role: "Chief Marketing Officer",
      img: team2,
      linkedin: "https://linkedin.com/in/sample-rahul",
    },
    {
      name: "Sneha Patil",
      role: "Chief Financial Officer",
      img: team3,
      linkedin: "https://linkedin.com/in/sample-sneha",
    },
    {
      name: "Amit Desai",
      role: "Chief Operating Officer",
      img: team4,
      linkedin: "https://linkedin.com/in/sample-amit",
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
        <h2 className="team-title">OUR TEAM</h2>
        <h1 className="team-heading">Team members</h1>

        <div className="team-container">
          {teamMembers.map((member, index) => (
            <div className="team-member" key={index}>
              <div className="image-wrapper">
                <img src={member.img} alt={member.name} />
                <div className="linkedin-overlay">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="linkedin-link"
                  >
                    <FaLinkedin className="linkedin-icon" />
                  </a>
                </div>
              </div>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Team;
