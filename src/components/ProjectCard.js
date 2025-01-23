import React from "react";
import "../pages/Pages.css";

const ProjectCard = ({ title, description, techIcons, image, link }) => {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={image} alt={title} />
      </div>
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="tech-icons">
          {techIcons.map((icon, index) => (
            <i key={index} className={icon}></i>
          ))}
        </div>
        <a href={link} target="_blank" rel="noopener noreferrer" className="find-out-more">
          Find out more
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
