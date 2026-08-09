import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const TestimonialsPage = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="testimonials" style={{ paddingTop: '100px' }}>
      <div className="container">
        <div className="text-center">
          <span className="section-label">{t.testimonials.label}</span>
          <h2 className="section-title">
            {t.testimonials.title}
            <span className="gold">{t.testimonials.titleGold}</span>
          </h2>
          <p className="section-sub mx-auto">{t.testimonials.subtitle}</p>
        </div>
        <div className="testimonial-grid">
          {t.testimonials.list.map((item, i) => (
            <div className="testimonial" key={i}>
              <div className="stars">{'★'.repeat(item.stars)}</div>
              <div className="text">{item.text}</div>
              <div className="author">
                <div className="initial">{item.name.charAt(0)}</div>
                <div>
                  <div className="name">{item.name}</div>
                  <div className="role">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsPage;