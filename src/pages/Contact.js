import React from "react";
import "./Pages.css";
import profileImage from '../assets/myimgss.png';

const Contact = () => {
  return (
    <div className="contact-section">
      <div className="contact-info">
        <h2>Contact Info</h2>
        <div className="profile-picture">
          <img
            src={profileImage}
            alt="Profile"
          />
        </div>
        <h3>Tharaka Dharmarathne</h3>
        <p>
          <i className="fas fa-map-marker-alt"></i> Pelawaththa, Matugama, Sri Lanka
        </p>
        <p>
          <i className="fas fa-envelope"></i> vimukthitharaka1234@gmail.com
        </p>
        <p>
          <i className="fas fa-phone"></i> +94 71 204 0785
        </p>
        <div className="social-links">
          <a href="https://www.facebook.com/share/14h7BsWmtM/" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
          <a href="https://wa.me/message/HVIQA57HIEDGA1" target="_blank" rel="noreferrer"><i className="fab fa-whatsapp"></i></a>
          <a href="https://www.linkedin.com/in/tharaka-dharmarathne-ab543b29b/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
          <a href="https://github.com/tharu47" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
        </div>
      </div>
      <div className="contact-form">
        <h2>Contact Me</h2>
        <form>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <input type="text" placeholder="Subject" required />
          <textarea placeholder="Message" rows="5" required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
