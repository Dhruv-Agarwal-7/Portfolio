import React from "react";
import "./AboutMeCSS.css";
// import profileImage from "./myPhoto.jpg";

const AboutMe = () => {
  return (
    <>
      <div id="AboutMe" className="about-section">
        <div className="about-content">
          <h1>
            <i className="fa-regular fa-user"></i> About Me
          </h1>
          <p>
            Hi, I'm Dhruv Agarwal. I'm a web developer with a passion for
            creating dynamic and responsive web applications. With a strong
            background in the MERN stack and a keen eye for design, I enjoy
            bringing ideas to life in the browser. My journey in web development
            started with a curiosity for how websites are built, and it has
            evolved into a fulfilling career where I get to solve interesting
            problems every day.
          </p>
        </div>
        <div className="about-image">
          {/* <img draggable="false" src={profileImage} alt="Profile" /> */}
        </div>
      </div>
    </>
  );
};

export default AboutMe;
