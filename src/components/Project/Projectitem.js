import React, { useState } from "react";
import "./ProjectItemCSS.css";

const Projectitem = (props) => {
  const { sourceCodeLink, deployedLink, name, description, languages, image } =
    props;
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const shortDescription =
    description.length > 250
      ? description.substring(0, 150) + "..."
      : description;

  return (
    <div className="project-card">
      <div className="project-image">
        <img src={image} alt={`${name} Screenshot`} />
      </div>
      <div className="project-details">
        <h3 className="project-tittle">{name}</h3>
        <p>
          <strong>About: </strong>
          {showFullDescription ? description : shortDescription}
          {description.length > 250 && (
            <span onClick={toggleDescription} className="see-more-link">
              {showFullDescription ? " See less" : " See more"}
            </span>
          )}
        </p>
        <strong>
          <p>Tech Stack: {languages}</p>
        </strong>
      </div>
      <div className="project-buttons">
        <a
          href={sourceCodeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          GitHub
        </a>
        <a
          href={deployedLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          Live Demo
        </a>
      </div>
    </div>
  );
};

export default Projectitem;
