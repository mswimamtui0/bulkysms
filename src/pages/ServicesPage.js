import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const ServicesPage = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="services" style={{ paddingTop: '100px' }}>
      <div className="container">
        <div className="text-center">
          <span className="section-label">{t.services.label}</span>
          <h2 className="section-title">
            {t.services.title}
            <span className="gold">{t.services.titleGold}</span>
          </h2>
          <p className="section-sub mx-auto">{t.services.subtitle}</p>
        </div>
        <div className="services-grid">
          {t.services.list.map((s, i) => (
            <div className="service-card" key={i}>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <ul>
                {s.features.map((f, j) => <li key={j}>{f}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;