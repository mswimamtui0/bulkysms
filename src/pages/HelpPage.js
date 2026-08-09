import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const HelpPage = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [activeFaq, setActiveFaq] = useState(0);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <section className="faq" style={{ paddingTop: '100px' }}>
      <div className="container">
        <div className="text-center">
          <span className="section-label">{t.faq.label}</span>
          <h2 className="section-title">
            {t.faq.title}
            <span className="gold">{t.faq.titleGold}</span>
          </h2>
          <p className="section-sub mx-auto">{t.faq.subtitle}</p>
        </div>
        <div className="faq-list">
          {t.faq.list.map((faq, i) => (
            <div className={`faq-item ${activeFaq === i ? 'active' : ''}`} key={i} onClick={() => toggleFaq(i)}>
              <div className="faq-question">
                {faq.q}
                <i className={`fas fa-chevron-down ${activeFaq === i ? 'rotated' : ''}`}></i>
              </div>
              <div className="faq-answer">{faq.a}</div>
            </div>
          ))}
        </div>
        <div className="text-center" style={{ marginTop: '40px' }}>
          <p>
            {language === 'en' ? 'Still have questions?' : 'Bado una maswali?'}
            <a href="/contact" className="btn-primary" style={{ display: 'inline-block', marginTop: '10px' }}>
              {language === 'en' ? 'Contact Support' : 'Wasiliana Nasi'}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default HelpPage;