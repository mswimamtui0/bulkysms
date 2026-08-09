import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const HomePage = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="hero hero-video-bg">
        <div className="hero-video-background">
          <video className="hero-bg-video" autoPlay muted loop playsInline>
            <source src="/videos/bulky-1.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
        </div>
        <div className="container hero-grid">
          <div className="hero-content">
            <span className="badge">{t.hero.badge}</span>
            <h1>
              {t.hero.title}
              <span className="gold">{t.hero.titleGold}</span>
              {t.hero.titleEnd}
            </h1>
            <p>{t.hero.subtitle}</p>
            <div className="hero-stats">
              {t.hero.stats.map((stat, idx) => (
                <div className="stat-item" key={idx}>
                  <div className="icon"><i className="fas fa-globe"></i></div>
                  <div className="info">
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="hero-actions">
              <a href="/contact" className="btn-primary">{t.hero.cta}</a>
              <a href="/pricing" className="btn-secondary">{t.hero.cta2}</a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-card">
              <div className="stat-row">
                <span className="label">{t.hero.card.global}</span>
                <span className="value">213 Countries</span>
              </div>
              <div className="stat-row">
                <span className="label">{t.hero.card.networks}</span>
                <span className="value">800+</span>
              </div>
              <div className="stat-row">
                <span className="label">{t.hero.card.speed}</span>
                <span className="value">2.3s</span>
              </div>
              <div className="stat-row">
                <span className="label">{t.hero.card.volume}</span>
                <span className="value">&gt;10M</span>
              </div>
              <div className="stat-row">
                <span className="label">{t.hero.card.rate}</span>
                <span className="value">98.4%</span>
              </div>
              <div className="gold-bar"><div className="fill"></div></div>
              <div className="card-note">{t.hero.note}</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="why-choose">
        <div className="container">
          <div className="text-center">
            <span className="section-label">{t.whyChoose.label}</span>
            <h2 className="section-title">
              {t.whyChoose.title}
              <span className="gold">{t.whyChoose.titleGold}</span>
            </h2>
            <p className="section-sub mx-auto">{t.whyChoose.subtitle}</p>
          </div>
          <div className="features-grid">
            {t.whyChoose.features.map((f, i) => (
              <div className="feature-item" key={i}>
                <h4>{f.title}</h4>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="services" id="services">
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

      {/* ===== NETWORKS ===== */}
      <section className="networks">
        <div className="container">
          <div className="text-center">
            <span className="section-label">{t.networks.label}</span>
            <h2 className="section-title">
              {t.networks.title}
              <span className="gold">{t.networks.titleGold}</span>
            </h2>
            <p className="section-sub mx-auto">{t.networks.subtitle}</p>
          </div>
          <div className="network-grid">
            {t.networks.list.map((n, i) => (
              <span className="network-item" key={i}>{n}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRICING ===== */}
      <section className="pricing" id="pricing">
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

      {/* ===== TESTIMONIALS ===== */}
      <section className="testimonials" id="testimonials">
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

      {/* ===== HOW IT WORKS ===== */}
      <section className="how-it-works" id="how-it-works">
        <div className="container">
          <div className="text-center">
            <span className="section-label">{t.howItWorks.label}</span>
            <h2 className="section-title">
              {t.howItWorks.title}
              <span className="gold">{t.howItWorks.titleGold}</span>
            </h2>
            <p className="section-sub mx-auto">{t.howItWorks.subtitle}</p>
          </div>
          <div className="steps-grid">
            {t.howItWorks.steps.map((step, i) => (
              <div className="step-item" key={i}>
                <div className="step-number">{i + 1}</div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY US ===== */}
      <section className="why-us" id="why-us">
        <div className="container">
          <div className="text-center">
            <span className="section-label">{t.whyUs.label}</span>
            <h2 className="section-title">
              {t.whyUs.title}
              <span className="gold">{t.whyUs.titleGold}</span>
            </h2>
            <p className="section-sub mx-auto">{t.whyUs.subtitle}</p>
          </div>
          <div className="why-us-grid">
            {t.whyUs.reasons.map((item, i) => (
              <div className="why-us-item" key={i}>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BLOG ===== */}
      <section className="blog-section" id="blog">
        <div className="container">
          <div className="text-center">
            <span className="section-label">{t.blog.label}</span>
            <h2 className="section-title">
              {t.blog.title}
              <span className="gold">{t.blog.titleGold}</span>
            </h2>
            <p className="section-sub mx-auto">{t.blog.subtitle}</p>
          </div>
          <div className="blog-grid">
            {t.blog.posts.map((post) => (
              <div className="blog-card" key={post.id}>
                <div className="blog-card-header">
                  <div className="blog-meta">
                    <span className="blog-category-tag">{post.category}</span>
                    <span className="blog-date">{post.date}</span>
                  </div>
                </div>
                <div className="blog-card-body">
                  <h3 className="blog-title">{post.title}</h3>
                  <p className="blog-excerpt">{post.excerpt}</p>
                </div>
                <div className="blog-card-footer">
                  <div className="blog-author">
                    <span className="author-name">{post.author}</span>
                    <span className="read-time">{post.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section className="contact-page" id="contact">
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
    </>
  );
};

export default HomePage;