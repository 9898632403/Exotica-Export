import React from 'react';
import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="brand-section">
          <h2 className="brand-name">Exotica Export</h2>
          <p className="tagline">We Deliver Trust Across Borders</p>
        </div>

        <nav className="footer-nav">
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>

        <div className="social-media">
          <a href="https://instagram.com" aria-label="Instagram" className="social-icon">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" aria-label="LinkedIn" className="social-icon">
            <FaLinkedin />
          </a>
          <a href="https://wa.me" aria-label="WhatsApp" className="social-icon">
            <FaWhatsapp />
          </a>
        </div>

        <div className="copyright">
          <p>© 2025 Exotica Export. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;