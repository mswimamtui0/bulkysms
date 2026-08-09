import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ scrolled }) => {
  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <Link to="/" className="logo">bulky<span>SMS</span></Link>
        <button className="menu-toggle" aria-label="Toggle navigation">☰</button>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/pricing">Pricing</Link></li>
          <li><Link to="/testimonials">Testimonials</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/help">Help</Link></li>
          <li><Link to="/contact" className="nav-cta">Contact Us</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;