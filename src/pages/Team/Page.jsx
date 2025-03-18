import React from "react";
import "./style.css";
import HeroComponent from "../../components/HeroComponent";
import team1 from "../../assets/team1.png";
import team2 from "../../assets/team2.png";
import team3 from "../../assets/team3.png";
import team4 from "../../assets/team4.png";

const Team = () => {
  return (
    <>
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
