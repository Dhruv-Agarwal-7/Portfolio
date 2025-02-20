import React from "react";
import "./HeroSectionCSS.css";
// import heroImage from "../myPhoto.jpg";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>Hi, I'm Dhruv Agarwal.</h1>
        <h1>I build things for the WEB</h1>
        <p>Discover the bespoke solutions and projects delivered.</p>
        <div className="hero-buttons">
          <a
            href="https://drive.google.com/file/d/1KAOHwqdyCZgWu4tLMtewYx6Q-FZQH9yh/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="join-button"
          >
            My Resume
          </a>
          <a href="mailto:dhruvagarwal1802@gmail.com" className="contact-link">
            Mail Me
          </a>
        </div>
      </div>
      <div className="hero-image">
        {/* <img draggable="false" src={heroImage} alt="Hero" /> */}
      </div>
    </div>
  );
};

export default HeroSection;
