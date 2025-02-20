import React, { useState, useRef, useEffect } from "react";
import "./NavbarCSS.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    // Function to close the menu if clicking outside of it
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on cleanup
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className="navbar">
        <div
          className={`navbar-links ${menuOpen ? "active" : ""}`}
          ref={menuRef}
        >
          <a href="#AboutMe" onClick={handleLinkClick}>
            About Me
          </a>
          <a href="#Education" onClick={handleLinkClick}>
            Education
          </a>
          <a href="#Skills" onClick={handleLinkClick}>
            Skills
          </a>
          {/* <a href="#Experience" onClick={handleLinkClick}>
            Experience
          </a> */}
          <a href="#Projects" onClick={handleLinkClick}>
            Projects
          </a>
          <a href="#Achievement" onClick={handleLinkClick}>
            Achievement
          </a>
          <a href="#Coding-profiles" onClick={handleLinkClick}>
            Coding Profiles
          </a>
          <a href="#Contact" onClick={handleLinkClick}>
            Contact
          </a>
        </div>
        <i
          className="fa-solid fa-bars navbar-menu-icon"
          onClick={handleMenuToggle}
        ></i>
      </nav>
    </>
  );
};

export default Navbar;
