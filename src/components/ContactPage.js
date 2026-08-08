import React from 'react';
import ContactForm from './ContactForm';

const ContactPage = () => {
  return (
    <section className="contact-page" id="contact">
      <div className="container">
        <div className="text-center">
          <span className="section-label">Contact Us</span>
          <h2 className="section-title">Get in <span className="gold">Touch</span></h2>
          <p className="section-sub mx-auto">Reach out to our team and we'll help you get started.</p>
        </div>
        
        <div className="contact-grid">
          <div className="contact-info">
            <h3>Contact Information</h3>
            
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <div>
                <strong>Phone</strong>
                <a href="tel:+255757170544">+255 757 170 544</a>
              </div>
            </div>
            
            <div className="contact-item">
              <i className="fab fa-whatsapp"></i>
              <div>
                <strong>WhatsApp</strong>
                <a href="https://wa.me/255769296960">+255 769 296 960</a>
              </div>
            </div>
            
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <div>
                <strong>Email</strong>
                <a href="mailto:info@bulkysms.com">info@bulkysms.com</a>
              </div>
            </div>
            
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <strong>Office</strong>
                <p>Dar es Salaam, Tanzania</p>
              </div>
            </div>
            
            <div className="contact-item">
              <i className="fas fa-clock"></i>
              <div>
                <strong>Working Hours</strong>
                <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 2:00 PM</p>
              </div>
            </div>
            
            <div className="contact-social">
              <h4>Follow Us</h4>
              <div className="social-links">
                <a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
                <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;