import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const PricingPage = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="pricing" style={{ paddingTop: '100px' }}>
      <div className="container">
        <div className="text-center">
          <span className="section-label">{t.pricing.label}</span>
          <h2 className="section-title">
            {t.pricing.title}
            <span className="gold">{t.pricing.titleGold}</span>
          </h2>
          <p className="section-sub mx-auto">{t.pricing.subtitle}</p>
        </div>
        <div className="pricing-wrapper">
          {t.pricing.plans.map((plan, i) => (
            <div className={`pricing-card ${plan.featured ? 'featured' : ''}`} key={i}>
              <div className="plan">{plan.name}</div>
              <div className="price">{plan.price} <small>{plan.sub}</small></div>
              <div className="description">{plan.desc}</div>
              <ul>
                {plan.features.map((f, j) => <li key={j}>{f}</li>)}
              </ul>
              <a href="/contact" className="btn">Get Started</a>
              {plan.note && <div className="pricing-note-inner">{plan.note}</div>}
            </div>
          ))}
        </div>
        <div className="pricing-note">{t.pricing.note}</div>
      </div>
    </section>
  );
};

export default PricingPage;