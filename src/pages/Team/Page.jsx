import React from "react";
import "./style.css";
import HeroComponent from "../../components/HeroComponent";
import team1 from "../../assets/team1.png";
import team2 from "../../assets/team2.png";
import team3 from "../../assets/team3.png";
import team4 from "../../assets/team4.png";

import { Helmet } from "react-helmet-async";

const Team = () => {
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
          name="keywords"
          content="Logistics experts, professional logistics team, freight specialists, global shipping team, My Ocean Logistics staff, freight and transport professionals, supply chain management team"
        />
        <meta
          property="og:title"
          content="Meet Our Logistics Experts | My Ocean Logistics - Professional Freight Solutions Team"
        />
        <meta
          property="og:description"
          content="Discover the passionate and skilled team behind My Ocean Logistics, committed to delivering world-class freight and supply chain solutions globally."
        />
        <meta property="og:image" content="/src/assets/mol.png" />
        <meta property="og:url" content="https://mol-one.vercel.app/our-team" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Meet Our Logistics Experts | My Ocean Logistics"
        />
        <meta
          name="twitter:description"
          content="Learn more about the experienced team behind My Ocean Logistics, dedicated to delivering expert freight and global shipping services."
        />
        <meta name="twitter:image" content="/src/assets/mol.png" />
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
          <div className="team-member">
            <img src={team1} alt="Team Member" />
            <h3>Aditya Sharma</h3>
            <p>Chief Technology Officer</p>
          </div>

          <div className="team-member">
            <img src={team2} alt="Team Member" />
            <h3>Rahul Verma</h3>
            <p>Chief Marketing Officer</p>
          </div>

          <div className="team-member">
            <img src={team3} alt="Team Member" />
            <h3>Sneha Patil</h3>
            <p>Chief Financial Officer</p>
          </div>

          <div className="team-member">
            <img src={team4} alt="Team Member" />
            <h3>Amit Desai</h3>
            <p>Chief Operating Officer</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
