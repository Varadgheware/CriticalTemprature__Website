import React from "react";
import { FaPhone, FaInstagram, FaLinkedin } from "react-icons/fa";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <div className="contact-content">
        <div className="contact-item">
          <FaPhone className="contact-icon" />
          <h3>Phone</h3>
          <p>+91 8787676713</p>
        </div>
        
        <div className="contact-item">
          <FaInstagram className="contact-icon" />
          <h3>Instagram</h3>
          <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
            @Username
          </a>
        </div>

        <div className="contact-item">
          <FaLinkedin className="contact-icon" />
          <h3>LinkedIn</h3>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            /in/@User
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
