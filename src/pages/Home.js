import React from 'react';
import './Home.css';

// Import client logos
import hindustan from '../img/clients/hindustan.png';
import unacademy from '../img/clients/unacademy.png';
import biba from '../img/clients/biba.png';
import dristi from '../img/clients/dristi.png';
import hero from '../img/clients/hero.png';
import mangalam from '../img/clients/mangalam.png';
import pg from '../img/clients/pg.png';
import nextias from '../img/clients/nextias.png';
import maruti from '../img/clients/maruti.png';

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <div className="hero-container">
        <h1>OUTDOOR ADVERTISING SOLUTIONS</h1>
        <p>Reach Your Audience Everywhere</p>
        <div className="hero-btns">
          <button className="btn btn-primary">GET STARTED</button>
          <button className="btn btn-outline">LEARN MORE</button>
        </div>
      </div>

      {/* About Section */}
      <div className="section about-section">
        <div className="section-container">
          <h2>WHO WE ARE</h2>
          <p>
            We are a leading outdoor advertising company with over 15 years of experience in the industry.
            Our mission is to help businesses connect with their audience through strategic and impactful
            outdoor advertising solutions. We combine creativity, technology, and strategic placement to
            ensure your message reaches the right people at the right time.
          </p>
        </div>
      </div>

      {/* Cities Section */}
      <div className="section cities-section">
        <div className="section-container">
          <h2>OUR COVERAGE</h2>
          <p>We provide outdoor advertising solutions in major cities across the country:</p>
          <div className="cities-grid">
            <div className="city-card">
              <h3>Prayagraj</h3>
              <p>50+ Locations</p>
            </div>
            <div className="city-card">
              <h3>Lucknow</h3>
              <p>30+ Locations</p>
            </div>
            <div className="city-card">
              <h3>Kanpur</h3>
              <p>25+ Locations</p>
            </div>
            <div className="city-card">
              <h3>Ayodhya</h3>
              <p>20+ Locations</p>
            </div>
            <div className="city-card">
              <h3>Varanasi</h3>
              <p>10+ Locations</p>
            </div>
            <div className="city-card">
              <h3>Delhi</h3>
              <p>50+ Locations</p>
            </div>
          </div>
        </div>
      </div>

      {/* Clients Section */}
      <div className="section clients-section">
        <div className="section-container">
          <h2 className="clients-title">OUR TRUSTED CLIENTS</h2>
          <p className="clients-subtitle">We're proud to work with these amazing brands across various industries</p>
          <div className="clients-grid">
            <div className="client-logo">
              <img src={hindustan} alt="Hindustan Unilever" />
            </div>
            <div className="client-logo">
              <img src={unacademy} alt="Unacademy" />
            </div>
            <div className="client-logo">
              <img src={biba} alt="Biba" />
            </div>
            <div className="client-logo">
              <img src={dristi} alt="Dristi IAS" />
            </div>
            <div className="client-logo">
              <img src={hero} alt="Hero Motors" />
            </div>
            <div className="client-logo">
              <img src={mangalam} alt="Mangalam Milk" />
            </div>
            <div className="client-logo">
              <img src={pg} alt="P&G" />
            </div>
            <div className="client-logo">
              <img src={nextias} alt="Next IAS" />
            </div>
            <div className="client-logo">
              <img src={maruti} alt="Maruti" />
            </div>
            <div className="client-logo more-clients">
              <div className="more-clients-content">
                <i className="fas fa-plus-circle"></i>
                <span>200+ More Clients</span>
              </div>
            </div>
          </div>
          <div className="testimonial">
            <p>"Sakuntalam OutdoorAds helped us increase our brand visibility by 40% in just three months!"</p>
            <h4>- Marketing Director, Pantaloons</h4>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="section cta-section">
        <div className="section-container">
          <h2>READY TO GET STARTED?</h2>
          <p>Let us help you create an impactful outdoor advertising campaign.</p>
          <button className="btn btn-primary">CONTACT US NOW</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
