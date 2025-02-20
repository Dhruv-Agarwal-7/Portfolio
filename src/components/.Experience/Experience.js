import React, { useState } from "react";
import "./ExperienceCSS.css";

const Experience = () => {
  const experiences = [
    {
      role: "🧑‍💻 Technical Member",
      organization: "Algorithmic and Programming Society, NIT Rourkela",
      duration: "Nov 2022 - Present",
      details:
        "As a dedicated member of the Algorithmic and Programming Society at NIT Rourkela, I have embraced the opportunity to contribute to the professional and technical development of students. My role involves mentoring and coaching a group of aspiring programmers, guiding their progress, and ensuring they remain focused on their goals. Additionally, I am an integral part of the core event management team, where I collaborate to organize events and workshops that enhance learning, foster collaboration, and inspire innovation among students. This experience has been deeply fulfilling, allowing me to blend my technical expertise with leadership skills while making a meaningful impact on the academic and professional journeys of my peers.",
    },
    {
      role: "🎓 Campus Ambassador",
      organization: "Unstop",
      duration: "Oct 2024 - Present",
      details:
        "Working as a campus ambassador at Unstop has been an incredible journey of learning and collaboration. Being part of a team dedicated to creating opportunities for students in our respective colleges has taught me the value of outreach and community-building. Our responsibilities range from organizing events and workshops to providing a supportive platform for students to grow and connect. The teamwork involved in planning and executing these initiatives has been an enriching experience, enhancing my organizational, communication, and leadership skills. At Unstop, I've realized the power of creating a community that empowers students to explore, learn, and excel. This role has not only allowed me to contribute to my college but also to develop a sense of purpose and fulfillment in helping others succeed.",
    },
  ];

  const [expanded, setExpanded] = useState({});

  const toggleExpanded = (index) => {
    setExpanded((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <section id="Experience" className="experience-section">
      <h2 className="section-title">
        <i className="fa-solid fa-business-time"></i> Experience
      </h2>
      <div className="experience-timeline">
        {experiences.map((experience, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-content">
              <h3>{experience.role}</h3>
              <p className="organization">{experience.organization}</p>
              <span className="duration">{experience.duration}</span>
              <p className="details">
                {expanded[index]
                  ? experience.details
                  : `${experience.details.substring(0, 250)}...`}{" "}
                <span
                  className="toggle-button"
                  onClick={() => toggleExpanded(index)}
                  style={{ color: "#0078d4", cursor: "pointer" }}
                >
                  {expanded[index] ? "See Less" : "See More"}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
