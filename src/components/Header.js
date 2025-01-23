import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <button className="menu-icon" onClick={toggleMenu}>
        <i className={menuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
      </button>
      <nav className={menuOpen ? 'nav-menu open' : 'nav-menu'}>
        <ul className="nav-links">
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/about-me" onClick={toggleMenu}>About Me</Link></li>
          <li><Link to="/projects" onClick={toggleMenu}>Projects</Link></li>
          <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
        </ul>
      </nav>
      <a href="https://drive.google.com/file/d/1LAya9cihDA3SbJUi_6Mqvxennf8cVooc/view?usp=sharing" target="_blank" rel="noopener noreferrer"><button className="resume-btn">Resume</button></a>
    </header>
  );
};

export default Header;
