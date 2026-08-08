import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#" className="logo">bulky<span>SMS</span></a>
            <p>Dar es Salaam, Tanzania<br />Global SMS and WhatsApp messaging solutions for businesses.</p>
          </div>
          <div className="footer-links">
            <h5>Solutions</h5>
            <a href="#services">Internet SMS</a>
            <a href="#services">WhatsApp Business</a>
            <a href="#services">SIM-Based SMS</a>
            <a href="#services">AI Chatbot</a>
          </div>
          <div className="footer-links">
            <h5>Company</h5>
            <a href="#">About</a>
            <a href="#">Careers</a>
            <a href="#">Blog</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-links">
            <h5>Support</h5>
            <a href="#">Documentation</a>
            <a href="#">API Reference</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
        <div className="footer-bottom">
          © 2026 Bulkysms. All rights reserved. Crafted with precision in Tanzania.
        </div>
      </div>
    </footer>
  );
};

export default Footer;