import React from 'react';
import { Link } from 'react-router-dom';
import QRCode from 'qrcode.react'; // ✅ Import QRCode

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <Link to="/" className="logo">bulky<span>SMS</span></Link>
            <p>Dar es Salaam, Tanzania<br />Global SMS and WhatsApp messaging solutions for businesses.</p>
          </div>

          {/* Solutions */}
          <div className="footer-links">
            <h5>Solutions</h5>
            <Link to="/services">Internet SMS</Link>
            <Link to="/services">WhatsApp Business</Link>
            <Link to="/services">SIM-Based SMS</Link>
            <Link to="/services">AI Chatbot</Link>
          </div>

          {/* Company */}
          <div className="footer-links">
            <h5>Company</h5>
            <Link to="/">About Us</Link>
            <Link to="/">Careers</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact</Link>
          </div>

          {/* Support */}
          <div className="footer-links">
            <h5>Support</h5>
            <Link to="/help">FAQ</Link>
            <Link to="/contact">Contact Support</Link>
            <Link to="/">Privacy Policy</Link>
            <Link to="/">Terms of Service</Link>
          </div>

          {/* ===== QR CODE ===== */}
          <div className="footer-links">
            <h5>Scan to Visit</h5>
            <QRCode 
              value="https://bulkysms.vercel.app" 
              size={150} 
              style={{ borderRadius: '8px', margin: '0 auto' }}
            />
            <p style={{ fontSize: '0.7rem', marginTop: '8px', color: '#aaa' }}>
              Scan with your phone
            </p>
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