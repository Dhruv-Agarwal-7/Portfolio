import React from "react";
import "./SkillsCSS.css";

const Skills = () => {
  return (
    <>
      <div id="Skills" className="skills-section">
        <h2>
          <i className="fa fa-cogs" aria-hidden="true"></i> Skills
        </h2>
        <div className="skills-container">
          <div className="skill-item">
            <i className="fa-regular fa-file-code skill-icon"></i>
            <div className="skill-content">
              <h3>Programming Languages</h3>
              <p> C++, HTML, CSS, JavaScript</p>
            </div>
          </div>
          <div className="skill-item">
            <i className="fa-solid fa-code skill-icon"></i>
            <div className="skill-content">
              <h3>Relevant Courses</h3>
              <p>
                Data Structures And Algorithms (DSA), Object-Oriented
                Programming (OOPS), Database Management System (DBMS)
              </p>
            </div>
          </div>
          <div className="skill-item">
            <i className="fa-brands fa-phoenix-framework skill-icon"></i>
            <div className="skill-content">
              <h3>Frameworks</h3>
              <p>
                Node.js, React.js, Next.js, Mongoose, Express, Bootstrap
              </p>
            </div>
          </div>
          <div className="skill-item">
            <i className="fa-solid fa-wrench skill-icon"></i>
            <div className="skill-content">
              <h3>Developer Tools</h3>
              <p>
                MongoDB, Postman, VS Code, Git, GitHub
              </p>
            </div>
          </div>
          <div className="skill-item">
            <i className="fa-solid fa-users skill-icon"></i>
            <div className="skill-content">
              <h3>Soft Skills</h3>
              <p>
                Adaptability, Problem-solving, Teamwork, Communication,
                Leadership, Time Management, Enthusiasm, Critical Thinking
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
