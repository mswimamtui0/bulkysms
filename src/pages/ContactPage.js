import React from 'react';

const ContactPage = () => {
  return (
    <section className="contact-page" style={{ paddingTop: '100px' }}>
      <div className="container">
        <div className="text-center">
          <span className="section-label">Contact Us</span>
          <h2 className="section-title">Get in <span className="gold">Touch</span></h2>
          <p className="section-sub mx-auto">Reach out to our team and we'll help you get started.</p>
        </div>
        <div className="contact-grid">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <div className="contact-item"><div><strong>Phone</strong><a href="tel:+255757170544">+255 757 170 544</a></div></div>
            <div className="contact-item"><div><strong>WhatsApp</strong><a href="https://wa.me/255757170544">+255 757 170 544</a></div></div>
            <div className="contact-item"><div><strong>Email</strong><a href="mailto:info@bulkysms.com">info@bulkysms.com</a></div></div>
            <div className="contact-item"><div><strong>Office</strong><p>Dar es Salaam, Tanzania</p></div></div>
            <div className="contact-item"><div><strong>Working Hours</strong><p>Mon - Fri: 8:00 AM - 6:00 PM</p><p>Saturday: 9:00 AM - 2:00 PM</p></div></div>
            <div className="contact-social">
              <h4>Follow Us</h4>
              <div className="social-links">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i> Facebook</a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i> Twitter</a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i> Instagram</a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i> LinkedIn</a>
              </div>
            </div>
          </div>
          <div className="contact-form-container">
            <div className="contact-form-wrapper">
              <h3>Send Us a Message</h3>
              <p className="form-subtitle">We'll respond within 24 hours</p>
              <form className="contact-form" id="contactForm">
                <div className="form-group"><input type="text" id="formName" placeholder="Your Name" required /></div>
                <div className="form-group"><input type="tel" id="formPhone" placeholder="Phone Number" required /></div>
                <div className="form-group"><input type="email" id="formEmail" placeholder="Email Address" /></div>
                <div className="form-group"><textarea id="formMessage" placeholder="Tell us about your needs..." rows="4" required></textarea></div>
                <button type="submit" className="btn-primary submit-btn">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;