import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const TopNavbar = () => {
  return (
    <div className="top-navbar py-2 px-4 d-flex justify-content-between align-items-center">
      {/* Left: Contact Info */}
      <div className="d-flex align-items-center gap-3 top-info">
        <span><FaEnvelope className="me-1" /> support@codingspider.com</span>
        <span><FaPhoneAlt className="me-1" /> +91 98765 43210</span>
      </div>

      {/* Right: Social Icons */}
      <div className="d-flex align-items-center gap-3 social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
      </div>
    </div>
  );
};

export default TopNavbar;
