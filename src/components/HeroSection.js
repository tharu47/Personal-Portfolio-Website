import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import profileImage from '../assets/my.png';

const HeroSection = () => {
  const [professionIndex, setProfessionIndex] = useState(0);
  const professions = ["IT Undergraduate", "Full - Stack Developer", "UI / UX Designer"];

  useEffect(() => {
    const interval = setInterval(() => {
      setProfessionIndex((prevIndex) => (prevIndex + 1) % professions.length);
    }, 3000); // Change text every 3 seconds
    return () => clearInterval(interval);
  }, [professions.length]);

  const renderParticles = () => {
    const particles = [];
    for (let i = 0; i < 50; i++) {
      const left = Math.random() * 100 + '%';
      const delay = Math.random() * 5 + 's';
      const size = Math.random() * 8 + 2 + 'px';
      particles.push(
        <span
          key={i}
          style={{
            left,
            animationDelay: delay,
            width: size,
            height: size,
          }}
        ></span>
      );
    }
    return particles;
  };

  return (
    <>
      <div className="rain-animation">{renderParticles()}</div>
      <section className="hero-section">
        <div className="hero-content">
          <h1>Hello,</h1>
          <h2>I'm <span className="highlighted-name">Tharaka</span></h2>
          <p className="profession">{professions[professionIndex]}</p>
          <div className="social-icons">
            <a href="https://www.facebook.com/share/14h7BsWmtM/" target='_blank' rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
            <a href="https://www.instagram.com/tha.ru.wa_?igsh=NWNoYTE5N2VjNTJv" target='_blank' rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="https://wa.me/message/HVIQA57HIEDGA1" target='_blank' rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
            <a href="https://www.linkedin.com/in/tharaka-dharmarathne-ab543b29b/" target='_blank' rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
            <a href="https://github.com/tharu47" target='_blank' rel="noopener noreferrer"><i className="fab fa-github"></i></a>
          </div>
          <Link to="/contact">
          <button className="hire-me-btn">Hire Me</button>
          </Link>
        </div>
        <div className="hero-image">
          <img src={profileImage} alt="Profile" />
        </div>
      </section>
    </>
  );
};

export default HeroSection;
