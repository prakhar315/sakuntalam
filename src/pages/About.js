import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-page">
      <div className="about-hero">
        <div className="hero-content">
          <h1>ABOUT US</h1>
          <p>Learn more about our company and our mission</p>
        </div>
        <div className="hero-image-container">
          {/* Hero image will be placed here */}
          <div className="hero-image-placeholder">
            <i className="fas fa-building fa-4x"></i>
            <p>Company Overview</p>
          </div>
        </div>
      </div>

      <div className="about-content">
        <div className="about-section">
          <h2>Our Story</h2>
          <div className="about-section-content">
            <div className="about-text">
              <p>
                Founded in 2008, <span className="highlight">Sakuntalam</span> has grown from a small local advertising agency to one of the leading outdoor advertising companies in Uttar Pradesh. Our journey began with a simple mission: to help businesses connect with their audience through impactful outdoor advertising solutions.
              </p>
              <p>
                Over the years, we have expanded our reach to cover major cities across the state, building a reputation for creativity, reliability, and results. Today, we are proud to serve hundreds of clients, from small local businesses to multinational corporations.
              </p>
              <div className="about-stats">
                <div className="stat-item">
                  <span className="stat-number">15+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Happy Clients</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">10+</span>
                  <span className="stat-label">Cities Covered</span>
                </div>
              </div>
            </div>
            <div className="about-image">
              <div className="image-placeholder story-image">
                <i className="fas fa-history fa-4x"></i>
                <p>Our Journey Since 2008</p>
                {/* Story image will be placed here */}
                <div className="image-overlay"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h2>Our Mission</h2>
          <div className="about-section-content reverse">
            <div className="about-image">
              <div className="image-placeholder mission-image">
                <i className="fas fa-bullseye fa-4x"></i>
                <p>Targeted Advertising Solutions</p>
                {/* Mission image will be placed here */}
                <div className="image-overlay"></div>
              </div>
            </div>
            <div className="about-text">
              <p>
                At <span className="highlight">Sakuntalam</span>, our mission is to transform the outdoor advertising landscape by combining creativity, technology, and strategic placement to deliver impactful advertising solutions that help our clients achieve their marketing goals.
              </p>
              <p>
                We believe in the power of outdoor advertising to create meaningful connections between brands and their audience. Our commitment to innovation, quality, and customer satisfaction drives everything we do.
              </p>
              <div className="mission-points">
                <div className="mission-point">
                  <i className="fas fa-check-circle"></i>
                  <span>Strategic Placement in High-Traffic Areas</span>
                </div>
                <div className="mission-point">
                  <i className="fas fa-check-circle"></i>
                  <span>Creative Design Solutions</span>
                </div>
                <div className="mission-point">
                  <i className="fas fa-check-circle"></i>
                  <span>Data-Driven Campaign Optimization</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h2>About Our Founder</h2>
          <div className="founder-section">
            <div className="founder-image">
              <div className="image-placeholder founder-image-placeholder">
                <i className="fas fa-user fa-4x"></i>
                <p>Gyanendra Singh</p>
                {/* Founder image will be placed here */}
                <div className="image-overlay"></div>
              </div>
            </div>
            <div className="founder-content">
              <h3>Gyanendra Singh</h3>
              <p className="founder-title">Founder</p>
              <p className="founder-description">
                With over 15 years of experience in the advertising industry, Gyanendra Singh founded Sakuntalam in 2008 with a vision to revolutionize outdoor advertising in Uttar Pradesh. His innovative approach and deep understanding of the local market have been instrumental in the company's growth and success.
              </p>
              <p className="founder-description">
                Under his leadership, Sakuntalam has expanded its operations to cover major cities across the state and has built a reputation for delivering high-quality, impactful advertising solutions. Gyanendra's commitment to excellence, customer satisfaction, and ethical business practices continues to drive the company forward.
              </p>

            </div>
          </div>
        </div>

        <div className="about-section values-section">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>Innovation</h3>
              <p>We constantly seek new and creative ways to help our clients stand out in the crowded advertising landscape.</p>
            </div>
            <div className="value-card">
              <h3>Integrity</h3>
              <p>We conduct our business with honesty, transparency, and ethical practices, building trust with our clients and partners.</p>
            </div>
            <div className="value-card">
              <h3>Excellence</h3>
              <p>We strive for excellence in everything we do, from the quality of our advertising solutions to our customer service.</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
