import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import "./Pages.css";
import ppa from '../assets/ppareact.png';
import ppass from '../assets/ppass.png';
import itassets from '../assets/itassets.png';
import lms from '../assets/lmsimg.png';
import resturent from '../assets/Resturent.png';



const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const projectData = [
    {
      title: "Prime Pulse Auto : Car Service Center",
      description: "Car service center customer side front-end website revamp with React.js",
      techIcons: ["fab fa-react"],
      image: ppa,
      link: "#",
      category: "Web Development",
    },
    {
      title: "Car Service Center Web Application",
      description: "Car Service Center Management System Web Application to manage inventory, billing and service records.",
      techIcons: ["fab fa-html5","fab fa-css","fab fa-php", "fab fa-js","fas fa-database"],
      image: ppass,
      link: "#",
      category: "Web Development",
    },
    {
      title: "IT Assets Management System",
      description: "IT Assets Management System Web Application for BCI Campus to streamline asset tracking and management processes.",
      techIcons: ["fab fa-html5","fab fa-css","fab fa-php", "fab fa-js","fas fa-database"],
      image: itassets,
      link: "https://github.com/tharu47/Assets-Management-System",
      category: "Web Development",
    },

    {
      title: "Library Management System",
      description: "Library Management System Desktop Application for managing library operations including book issuance,return management and new book registration.",
      techIcons: ["fas fa-code", "fas fa-database"],
      image: lms,
      link: "https://github.com/tharu47/Library-Management-System-Desktop-Application/tree/main/lms",
      category: "Desktop Apps",
    },

    {
      title: "UI / UX Redesign for Food Resturent",
      description: "A visually engaging restaurant website prototype designed using Figma, focusing on user-friendly navigation, modern aesthetics, and seamless user experience to attract and retain customers. ",
      techIcons: ["fab fa-figma"],
      image: resturent,
      link: "#",
      category: "UI/UX Design",
    },
 
  ];

  const categories = ["All", "Web Development", "Desktop Apps", "Mobile Apps", "UI/UX Design"];

  const filteredProjects =
    activeCategory === "All"
      ? projectData
      : projectData.filter((project) => project.category === activeCategory);

  return (
    <div className="projects-section">
      <h2>My Projects</h2>
      {/* Categories Section */}
      <div className="categories">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`category-button ${activeCategory === category ? "active" : ""}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
