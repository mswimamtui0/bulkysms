import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const ContactPage = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="contact-page" style={{ paddingTop: '100px' }}>
      <div className="container">
        <div className="text-center">
          <span className="section-label">{t.contact.label}</span>
          <h2 className="section-title">
            {t.contact.title}
            <span className="gold">{t.contact.titleGold}</span>
          </h2>
          <p className="section-sub mx-auto">{t.contact.subtitle}</p>
        </div>
        <div className="contact-grid">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <div className="contact-item">
              <div>
                <strong>{t.contact.info.phone}</strong>
                <a href="tel:+255757170544">+255 757 170 544</a>
              </div>
            </div>
            <div className="contact-item">
              <div>
                <strong>{t.contact.info.whatsapp}</strong>
                <a href="https://wa.me/255757170544">+255 757 170 544</a>
              </div>
            </div>
            <div className="contact-item">
              <div>
                <strong>{t.contact.info.email}</strong>
                <a href="mailto:info@bulkysms.com">info@bulkysms.com</a>
              </div>
            </div>
            <div className="contact-item">
              <div>
                <strong>{t.contact.info.office}</strong>
                <p>Dar es Salaam, Tanzania</p>
              </div>
            </div>
            <div className="contact-item">
              <div>
                <strong>{t.contact.info.hours}</strong>
                <p>{t.contact.hours[0]}</p>
                <p>{t.contact.hours[1]}</p>
              </div>
            </div>
            <div className="contact-social">
              <h4>{t.contact.social}</h4>
              <div className="social-links">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook"></i> Facebook
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i> Twitter
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i> Instagram
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i> LinkedIn
                </a>
              </div>
            </div>
          </div>
          <div className="contact-form-container">
            <div className="contact-form-wrapper">
              <h3>{t.contact.form.title}</h3>
              <p className="form-subtitle">{t.contact.form.subtitle}</p>
              <form className="contact-form" id="contactForm">
                <div className="form-group">
                  <input type="text" placeholder={t.contact.form.name} required />
                </div>
                <div className="form-group">
                  <input type="tel" placeholder={t.contact.form.phone} required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder={t.contact.form.email} />
                </div>
                <div className="form-group">
                  <textarea placeholder={t.contact.form.message} rows="4" required></textarea>
                </div>
                <button type="submit" className="btn-primary submit-btn">{t.contact.form.button}</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;