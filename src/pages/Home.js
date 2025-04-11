import React, { useState } from 'react';
import './Home.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

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

// Import city images
import prayagrajImg from '../img/cities/prayagraj.jpg';
import lucknowImg from '../img/cities/lucknow.jpg';
import kanpurImg from '../img/cities/kanpur.jpg';
import ayodhyaImg from '../img/cities/ayodhya.jpg';
import varanasiImg from '../img/cities/varanasi.jpg';
import delhiImg from '../img/cities/delhi.jpg';

// Import billboard images
import billboard1 from '../img/billboards/billboard1.svg';
import billboard2 from '../img/billboards/billboard2.svg';
import billboard3 from '../img/billboards/billboard3.svg';
import billboard4 from '../img/billboards/billboard4.svg';

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Custom arrow components
  const PrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <FaChevronLeft />
      </div>
    );
  };

  const NextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <FaChevronRight />
      </div>
    );
  };

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: false,
    fade: true,
    cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
    beforeChange: (_, next) => setCurrentSlide(next),
    appendDots: dots => (
      <div className="custom-dots">
        <ul> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div className={`dot ${i === currentSlide ? 'active' : ''}`}></div>
    ),
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true
        }
      }
    ]
  };

  // Billboard slides data
  const slides = [
    {
      image: billboard1,
      title: 'PREMIUM BILLBOARDS',
      subtitle: 'High-Impact Advertising Solutions',
      description: 'Reach thousands of potential customers daily with our strategically placed billboards.'
    },
    {
      image: billboard2,
      title: 'DIGITAL DISPLAYS',
      subtitle: 'Dynamic Content for Maximum Engagement',
      description: 'Captivate your audience with vibrant digital displays that stand out day and night.'
    },
    {
      image: billboard3,
      title: 'FLEX BANNERS',
      subtitle: 'Cost-Effective Advertising',
      description: 'High-quality printing and weather-resistant materials for long-lasting impact.'
    },
    {
      image: billboard4,
      title: 'CUSTOM SOLUTIONS',
      subtitle: 'Tailored to Your Needs',
      description: 'From concept to execution, we create custom outdoor advertising solutions for your brand.'
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <div className="hero-container">
        <Slider {...sliderSettings} className="hero-slider">
          {slides.map((slide, index) => (
            <div key={index} className="hero-slide">
              <div
                className="slide-background"
                style={{ backgroundImage: `url(${slide.image})` }}
              ></div>
              <div className="slide-content">
                <div className="slide-number">{index + 1}/{slides.length}</div>
                <div className="slide-content-inner">
                  <h1>{slide.title}</h1>
                  <div className="slide-divider"></div>
                  <h2>{slide.subtitle}</h2>
                  <p>{slide.description}</p>
                  <div className="hero-btns">
                    <button className="btn btn-primary">GET STARTED</button>
                    <button className="btn btn-outline">LEARN MORE</button>
                  </div>
                </div>
                <div className="slide-progress-container">
                  <div
                    className="slide-progress"
                    style={{
                      animationDuration: `${sliderSettings.autoplaySpeed}ms`,
                      animationPlayState: currentSlide === index ? 'running' : 'paused'
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
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
            <div className="city-card" style={{ backgroundImage: `url(${prayagrajImg})` }}>
              <div className="city-overlay">
                <h3>Prayagraj</h3>
                <p>50+ Locations</p>
              </div>
            </div>
            <div className="city-card" style={{ backgroundImage: `url(${lucknowImg})` }}>
              <div className="city-overlay">
                <h3>Lucknow</h3>
                <p>30+ Locations</p>
              </div>
            </div>
            <div className="city-card" style={{ backgroundImage: `url(${kanpurImg})` }}>
              <div className="city-overlay">
                <h3>Kanpur</h3>
                <p>25+ Locations</p>
              </div>
            </div>
            <div className="city-card" style={{ backgroundImage: `url(${ayodhyaImg})` }}>
              <div className="city-overlay">
                <h3>Ayodhya</h3>
                <p>20+ Locations</p>
              </div>
            </div>
            <div className="city-card" style={{ backgroundImage: `url(${varanasiImg})` }}>
              <div className="city-overlay">
                <h3>Varanasi</h3>
                <p>10+ Locations</p>
              </div>
            </div>
            <div className="city-card" style={{ backgroundImage: `url(${delhiImg})` }}>
              <div className="city-overlay">
                <h3>Delhi</h3>
                <p>50+ Locations</p>
              </div>
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
