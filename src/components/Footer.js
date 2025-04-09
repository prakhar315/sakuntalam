import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../img/WhatsApp Image 2025-03-28 at 21.42.08_6e19fb08.jpg';

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/about">Our Story</Link>
            <Link to="/about">Testimonials</Link>
            <Link to="/about">Careers</Link>
            <Link to="/about">Terms of Service</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/contact">Contact</Link>
            <Link to="/contact">Support</Link>
            <Link to="/contact">Locations</Link>
            <Link to="/contact">Sponsorships</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Services</h2>
            <Link to="/services">Billboards</Link>
            <Link to="/services">Transit Ads</Link>
            <Link to="/services">Street Furniture</Link>
            <Link to="/services">Digital Displays</Link>
          </div>
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">Youtube</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              <img src={logo} alt="OutdoorAds Logo" className="footer-logo-img" />
              sankuntalam
            </Link>
          </div>
          <small className="website-rights">sankuntalam © {new Date().getFullYear()}</small>
          <div className="social-icons">
            <a
              className="social-icon-link facebook"
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              className="social-icon-link instagram"
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              className="social-icon-link youtube"
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Youtube"
            >
              <i className="fab fa-youtube"></i>
            </a>
            <a
              className="social-icon-link twitter"
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              className="social-icon-link linkedin"
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
