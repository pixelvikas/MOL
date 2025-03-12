import HeroComponent from "./HeroComponent";
import "./style.css";

const About = () => {
  return (
    <HeroComponent
      title="About Us"
      link="/"
      linkText="HOME"
      current="ABOUT US"
    />
  );
};

export default About;
