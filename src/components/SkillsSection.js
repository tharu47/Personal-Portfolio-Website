import React from "react";

import javaIcon from "../assets/pngjava.png";
import jsicon from "../assets/pngjs.png";
import cIcon from "../assets/cplus.png";
import csharpIcon from "../assets/pngcc.png";
import reactIcon from "../assets/react.png";
import mssql from "../assets/mssql.png";
import mysql from "../assets/mysql.png";
import python from "../assets/python.png";
import html from "../assets/pnghtml.png";
import css from "../assets/pngcss.png";
import phpicon from "../assets/php.png";
import wordpress from "../assets/wordpress.png";

import "../App.css";

const SkillsSection = () => {
  const skills = {
    WebDevelopmentLanguages: [
        { name: "HTML", icon: html },
        { name: "CSS", icon: css },
        { name: "Javascript", icon: jsicon },
        { name: "PHP", icon: phpicon },
        { name: "Wordpress", icon: wordpress },
    ],
        
    programmingLanguages: [
      { name: "Java", icon: javaIcon },
      { name: "C++", icon: cIcon },
      { name: "C#", icon: csharpIcon },
      { name: "Python", icon: python },
    ],
    frameworks: [
      { name: "React", icon: reactIcon },
      
    ],
    DatabaseManagement: [
      { name: "Ms SQL", icon: mssql },
      { name: "My SQL", icon: mysql },
    ],
  };

  return (
    <div className="skills-section">
      <h2>
        My <span>Skills</span>
      </h2>
      {Object.entries(skills).map(([category, items]) => (
        <div key={category} className="skills-category">
          <h3>{category.replace(/([A-Z])/g, " $1")}</h3>
          <div className="skills-grid">
            {items.map((item) => (
              <div key={item.name} className="skill-card">
                <img src={item.icon} alt={`${item.name} icon`} />
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsSection;
