import React from 'react';
import './Services.css';

function Services() {
  return (
    <div className="services-page">
      <div className="services-hero">
        <h1>OUR SERVICES</h1>
        <p>Comprehensive outdoor advertising solutions for your business</p>
      </div>

      <div className="services-content">
        <div className="services-intro">
          <h2>What We Offer</h2>
          <p>
            At OutdoorAds, we provide a wide range of outdoor advertising solutions designed to help your business reach its target audience effectively. Our services are tailored to meet your specific marketing goals, budget, and timeline.
          </p>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-billboard"></i>
            </div>
            <h3>Billboards</h3>
            <p>
              Our strategically located billboards offer high visibility and impact, ensuring your message reaches a wide audience. We offer various sizes and formats, including digital billboards, static billboards, and spectaculars.
            </p>
            <ul className="service-features">
              <li>Prime locations in high-traffic areas</li>
              <li>Digital and static options available</li>
              <li>Various sizes to fit your budget</li>
              <li>Professional design services</li>
            </ul>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-bus"></i>
            </div>
            <h3>Transit Advertising</h3>
            <p>
              Reach audiences on the move with our transit advertising solutions. From bus wraps to subway station ads, we help you capture attention in urban environments.
            </p>
            <ul className="service-features">
              <li>Bus wraps and interior ads</li>
              <li>Subway and train station displays</li>
              <li>Taxi advertising</li>
              <li>Airport advertising</li>
            </ul>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-bench"></i>
            </div>
            <h3>Street Furniture</h3>
            <p>
              Our street furniture advertising options include bus shelters, benches, kiosks, and more, allowing you to reach pedestrians and commuters in urban areas.
            </p>
            <ul className="service-features">
              <li>Bus shelter advertising</li>
              <li>Bench advertising</li>
              <li>Information kiosks</li>
              <li>Urban panels</li>
            </ul>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-tv"></i>
            </div>
            <h3>Digital Displays</h3>
            <p>
              Our digital outdoor advertising solutions offer flexibility, allowing you to update your content in real-time and create dynamic, engaging campaigns.
            </p>
            <ul className="service-features">
              <li>Digital billboards</li>
              <li>LED screens</li>
              <li>Interactive displays</li>
              <li>Real-time content updates</li>
            </ul>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-shopping-mall"></i>
            </div>
            <h3>Mall Advertising</h3>
            <p>
              Reach consumers while they shop with our mall advertising solutions, including digital displays, banners, and promotional kiosks.
            </p>
            <ul className="service-features">
              <li>Digital mall displays</li>
              <li>Promotional kiosks</li>
              <li>Food court advertising</li>
              <li>Banner advertising</li>
            </ul>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-paint-brush"></i>
            </div>
            <h3>Creative Services</h3>
            <p>
              Our team of creative professionals can help you design impactful outdoor advertising campaigns that capture attention and drive results.
            </p>
            <ul className="service-features">
              <li>Campaign concept development</li>
              <li>Graphic design services</li>
              <li>Content creation</li>
              <li>Brand integration</li>
            </ul>
          </div>
        </div>

        <div className="process-section">
          <h2>Our Process</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Consultation</h3>
              <p>We begin by understanding your business, target audience, marketing goals, and budget to create a tailored advertising strategy.</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Planning</h3>
              <p>Our team develops a comprehensive plan, including location selection, format recommendations, and campaign timeline.</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Design</h3>
              <p>Our creative team designs eye-catching, effective advertisements that align with your brand and campaign objectives.</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Implementation</h3>
              <p>We handle all aspects of campaign implementation, ensuring your ads are displayed correctly and on schedule.</p>
            </div>
            <div className="process-step">
              <div className="step-number">5</div>
              <h3>Monitoring</h3>
              <p>Throughout the campaign, we monitor performance and make adjustments as needed to maximize results.</p>
            </div>
            <div className="process-step">
              <div className="step-number">6</div>
              <h3>Reporting</h3>
              <p>We provide detailed reports on campaign performance, including reach, engagement, and ROI metrics.</p>
            </div>
          </div>
        </div>

        <div className="cta-section">
          <h2>Ready to Get Started?</h2>
          <p>Contact us today to discuss your outdoor advertising needs and discover how we can help your business grow.</p>
          <button className="btn btn-primary">REQUEST A QUOTE</button>
        </div>
      </div>
    </div>
  );
}

export default Services;
