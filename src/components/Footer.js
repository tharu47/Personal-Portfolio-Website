import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <nav className="footer-nav">
          <Link to="/" className="footer-link">Home</Link>
          <Link to="/about-me" className="footer-link">About Me</Link>
          <Link to="/projects" className="footer-link">Projects</Link>
          <Link to="/contact" className="footer-link">Contact</Link>
        </nav>
        <p className="footer-text">
          &copy; {new Date().getFullYear()} Tharaka Dharmarathne | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
