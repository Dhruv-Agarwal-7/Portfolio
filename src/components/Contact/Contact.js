import React from "react";
import "./ContactCSS.css";
// import ViewCounter from "../ViewCounter/ViewCounter";

const Contact = () => {
  return (
    <>
      <div id="Contact" className="footer">
        <div className="footer-content">
          <div className="footer-icons">
            <a
              href="https://www.linkedin.com/in/dhruv-agarwal-2849872b1/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin footer-icon"></i>
            </a>
            <a
              href="https://github.com/Dhruv-Agarwal-7/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-github footer-icon"></i>
            </a>
            <a href="mailto:dhruvagarwal1802@gmail.com">
              <i className="fa-solid fa-envelope footer-icon"></i>
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-instagram footer-icon"></i>
            </a>
          </div>
        </div>
        <div className="footer-border">
          <p className="footer-text">
            2025 ❤️ © Designed and built by Dhruv Agarwal.
          </p>
        </div>
        {/* <ViewCounter /> */}
      </div>
    </>
  );
};

export default Contact;
