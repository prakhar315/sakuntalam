import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../img/WhatsApp Image 2025-03-28 at 21.42.08_6e19fb08.jpg';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // Check if current path matches the link path
  const isActive = (path) => {
    return location.pathname === path;
  };

  useEffect(() => {
    // Close mobile menu when window is resized to desktop size
    const handleResize = () => {
      if (window.innerWidth > 960) {
        setClick(false);
      }
    };

    // Handle scroll effect
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Add event listeners
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    // Clean up event listeners
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={scrolled ? 'navbar scrolled' : 'navbar'}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img src={logo} alt="OutdoorAds Logo" className="logo-img" />
          <span className="logo-text">sankuntlam Ads</span>
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link
              to="/"
              className={isActive('/') ? 'nav-links active' : 'nav-links'}
              onClick={closeMobileMenu}
            >
              <i className="fas fa-home nav-icon"></i>
              <span>Home</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about"
              className={isActive('/about') ? 'nav-links active' : 'nav-links'}
              onClick={closeMobileMenu}
            >
              <i className="fas fa-info-circle nav-icon"></i>
              <span>About Us</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/services"
              className={isActive('/services') ? 'nav-links active' : 'nav-links'}
              onClick={closeMobileMenu}
            >
              <i className="fas fa-cog nav-icon"></i>
              <span>Our Services</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className={isActive('/contact') ? 'nav-links active' : 'nav-links'}
              onClick={closeMobileMenu}
            >
              <i className="fas fa-envelope nav-icon"></i>
              <span>Contact Us</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
