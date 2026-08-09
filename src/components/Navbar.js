import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const Navbar = ({ scrolled }) => {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language].nav;
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <Link to="/" className="logo">bulky<span>SMS</span></Link>

        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle navigation">
          ☰
        </button>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><Link to="/" onClick={closeMenu}>{t.home}</Link></li>
          <li><Link to="/services" onClick={closeMenu}>{t.services}</Link></li>
          <li><Link to="/pricing" onClick={closeMenu}>{t.pricing}</Link></li>
          <li><Link to="/testimonials" onClick={closeMenu}>{t.testimonials}</Link></li>
          <li><Link to="/blog" onClick={closeMenu}>{t.blog}</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>{t.contact}</Link></li>
          <li><Link to="/help" onClick={closeMenu}>{t.help}</Link></li>
          <li>
            <button className="lang-toggle" onClick={toggleLanguage}>
              {language === 'en' ? 'SW' : 'EN'}
            </button>
          </li>
          <li><Link to="/contact" className="nav-cta" onClick={closeMenu}>{t.contactUs}</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;