import React from "react";
import "./ProjectCSS.css";
import Projectitem from "./Projectitem";
// import ContactList from "./Images/ContactList.png";
// import eCommerceStore from "./Images/E-commerce-store.png";
// import TripConnect from "./Images/TripConnect.png";
// import SAMS from "./Images/SAMS.png";
import LeCafe from "./Images/le_cafe.png"
import ExpenseTracker from "./Images/expense_tracker.png"

const Project = () => {
  const projectData = [
    {
      sourceCodeLink: "https://github.com/Dhruv-Agarwal-7/LE-Cafe/",
      deployedLink: "https://github.com/Dhruv-Agarwal-7/LE-Cafe/",
      name: "LE-Cafe",
      description:
        "LE-Cafe is to create an elegant and user-friendly online platform where customers can seamlessly browse, customize, and order premium café-style food and beverages. The website will offer a warm, inviting digital experience that reflects the cozy and sophisticated ambiance of a high-end café.",
      languages:
        "PHP | CSS | JavaScript | MySQL | HTML | XAMPP",
      image: LeCafe,
    },
    {
      sourceCodeLink: "https://github.com/Dhruv-Agarwal-7/Expense-Tracker",
      deployedLink: "https://github.com/Dhruv-Agarwal-7/Expense-Tracker",
      name: "Expense Tracker",
      description:
        "Expense Tracker built using the MERN stack (MongoDB, Express, React, Node.js) allows users to track, categorize, and analyze their expenses efficiently.",
      languages:
        "React JS | Redux | Redux Toolkit | Node.js | Express.js | MongoDB | Mongoose | JWT | Bcrypt",
      image: ExpenseTracker,
    },
    // {
    //   sourceCodeLink: "https://github.com/Dhruv-Agarwal-7/SAMS",
    //   deployedLink: "https://github.com/Dhruv-Agarwal-7/SAMS",
    //   name: "Students' Auditorium Management System (SAMS)",
    //   description:
    //     "ransforming traditional auditorium management, the Students' Auditorium Management System (SAMS) leverages C++ and OOP principles to automate event organization. It empowers Show Managers to handle event details, seat allocation, ticketing, and sales tracking. SAMS streamlines the process, enhancing efficiency and customer satisfaction.",
    //   languages: "C++ | OOPS",
    //   image: SAMS,
    // },
    // {
    //   sourceCodeLink: "https://github.com/Dhruv-Agarwal-7/Contact-list",
    //   deployedLink: "https://dhruv-agarwal.github.io/Contact-list/",
    //   name: "Contact List",
    //   description:
    //     "This project is a web application for managing a contact list with an autocomplete feature using a trie data structure. Users can add, delete, and call contacts, with names and phone numbers stored efficiently. The trie enables fast, dynamic search suggestions as users type in the search box.",
    //   languages: "HTML | CSS | Javascript | Trie Data structure",
    //   image: ContactList,
    // },
  ];

  return (
    <>
      <div id="Projects" className="projects-section">
        <h2>
          <i className="fas fa-project-diagram"></i> Projects
        </h2>
        <div className="projects-container">
          {projectData.map((project, index) => (
            <Projectitem
              key={index}
              sourceCodeLink={project.sourceCodeLink}
              deployedLink={project.deployedLink}
              name={project.name}
              description={project.description}
              languages={project.languages}
              image={project.image}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Project;
