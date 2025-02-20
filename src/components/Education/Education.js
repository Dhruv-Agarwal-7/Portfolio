import React from "react";
import "./EducationCSS.css";

const Education = () => {
  return (
    <>
      <div id="Education" className="education-section">
        <h2>
          <i className="fa-solid fa-user-graduate"></i> Education
        </h2>
        <div className="education-item">
          <div className="education-row">
            <span className="institute">
              Master of Computer Applications
            </span>
            <span className="location">Ghaziabad, UttarPradesh</span>
          </div>
          <div className="education-row">
            <span className="degree">KIET Group of Institutions</span>
            <span className="year">2023 – 2025</span>
          </div>
        </div>
        <div className="education-item">
          <div className="education-row">
            <span className="institute">Bachelor of Computer Applications</span>
            <span className="location">Moradabad, UttarPradesh</span>
          </div>
          <div className="education-row">
            <span className="degree">Teerthanker Mahaveer University</span>
            <span className="year"> 2020 – 2023</span>
          </div>
        </div>
        <div className="education-item">
          <div className="education-row">
            <span className="institute">Intermediate</span>
            <span className="location">Noida, UttarPradesh</span>
          </div>
          <div className="education-row">
            <span className="degree">National Institute of Open Schooling</span>
            <span className="year">August 2020</span>
          </div>
        </div>
        <div className="education-item">
          <div className="education-row">
            <span className="institute">High School</span>
            <span className="location">Moradabad, UttarPradesh</span>
          </div>
          <div className="education-row">
            <span className="degree">Central Board of Secondary Education</span>
            <span className="year">June 2017</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
