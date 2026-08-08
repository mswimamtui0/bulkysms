import React from 'react';

const Navbar = ({ scrolled }) => {
  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <a href="#" className="logo">bulky<span>SMS</span></a>
        <ul className="nav-links">
          <li><a href="#services">Services</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#contact" className="nav-cta">Contact Us</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;