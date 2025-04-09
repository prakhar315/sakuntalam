import React from 'react';
import './Home.css';

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
          <h2>OUR CLIENTS</h2>
          <p>Trusted by leading brands across various industries:</p>
          <div className="clients-grid">
            <div className="client-logo">Hindustan Unilever</div>
            <div className="client-logo">Unacademy</div>
            <div className="client-logo">Biba</div>
            <div className="client-logo">Dristi IAS </div>
            <div className="client-logo">Hero motors</div>
            <div className="client-logo">Mangalam Milk</div>
            <div className="client-logo">p&g</div>
            <div className="client-logo">Next IAS</div>
            <div className="client-logo">Maruti</div>
            <div className="client-logo">And more 200+</div>
          </div>
          <div className="testimonial">
            <p>"OutdoorAds helped us increase our brand visibility by 40% in just three months!"</p>
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
