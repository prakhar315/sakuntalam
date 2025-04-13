import React, { useState } from 'react';
import './Contact.css';
import { FaWhatsapp } from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a server
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: ''
    });
  };

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <h1>CONTACT US</h1>
        <p>Get in touch with our team to discuss your advertising needs</p>
      </div>

      <div className="contact-content">
        <div className="contact-info-section">
          <div className="contact-info">
            <h2>Get In Touch</h2>
            <p>
              We're here to answer any questions you may have about our outdoor advertising solutions. Reach out to us and we'll respond as soon as we can.
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <h3>Address</h3>
                  <p>Head Office: 13A/3C Bank Road, Prayagraj, Uttar Pradesh</p>
                  <p>Branch Office: Delhi,Lucknow,Bhopal,Mumbai/Patna</p>
                </div>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <div>
                  <h3>Phone</h3>
                  <p>+91-7052221111 </p>
                </div>
              </div>
              <div className="contact-item">
                <FaWhatsapp className="whatsapp-icon" />
                <div>
                  <h3>WhatsApp</h3>
                  <p>
                    <a
                      href="https://wa.me/917052221111"
                      className="whatsapp-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Chat with us on WhatsApp
                    </a>
                  </p>
                </div>
              </div>
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <div>
                  <h3>Email</h3>
                  <p>official@sakuntlam.com</p>
                </div>
              </div>
              <div className="contact-item">
                <i className="fas fa-clock"></i>
                <div>
                  <h3>Business Hours</h3>
                  <p>Monday - Saturday: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
            <div className="social-links">
              <h3>Follow Us</h3>
              <div className="social-icons">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="contact-form-container">
            <h2>Send Us a Message</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="company">Company</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">SEND MESSAGE</button>
            </form>
          </div>
        </div>

        <div className="map-section">
          <h2>Our Location</h2>
          <div className="office-address">
            <i className="fas fa-map-marker-alt"></i>
            <p>Office: 13A/3C Bank Road, Prayagraj, Uttar Pradesh</p>
          </div>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.0477162382395!2d81.84819867536855!3d25.44541997759868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399acad00b14f9d1%3A0x5d01b1baa1ded2e4!2sBank%20Rd%2C%20Prayagraj%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1712642400000!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: '10px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
            ></iframe>
          </div>
        </div>

        <div className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-container">
            <div className="faq-item">
              <h3>How much does outdoor advertising cost?</h3>
              <p>
                The cost of outdoor advertising varies depending on factors such as location, format, size, and duration. Contact us for a customized quote based on your specific needs.
              </p>
            </div>
            <div className="faq-item">
              <h3>How long does it take to set up an outdoor advertising campaign?</h3>
              <p>
                Typically, it takes 2-4 weeks from initial consultation to campaign launch, depending on the complexity and scale of the campaign.
              </p>
            </div>
            <div className="faq-item">
              <h3>Do you offer design services?</h3>
              <p>
                Yes, we have an in-house creative team that can help design impactful outdoor advertisements tailored to your brand and campaign objectives.
              </p>
            </div>
            <div className="faq-item">
              <h3>What is the minimum contract duration?</h3>
              <p>
                Our minimum contract duration is typically 4 weeks, but we offer flexible options to accommodate different campaign needs and budgets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
