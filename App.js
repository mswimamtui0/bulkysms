// App.js
import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [activeFaq, setActiveFaq] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    { q: 'What is Bulkysms?', a: 'Bulkysms is a business messaging platform that allows you to send SMS and WhatsApp messages to customers worldwide. We provide reliable delivery across 800+ networks in 213 countries.' },
    { q: 'How do I send messages?', a: 'Simply upload your contact list, compose your message, and send. The platform handles delivery and provides real-time reports on delivery status.' },
    { q: 'Can I integrate Bulkysms with my systems?', a: 'Yes, we offer a comprehensive REST API that enables integration with your CRM, ERP, or any custom application. Documentation is available to help you get started quickly.' },
    { q: 'What support do you provide?', a: 'We offer dedicated support via email and phone. Enterprise clients receive priority support and account management.' },
    { q: 'Is my data secure?', a: 'Yes, we use encryption and follow industry best practices to protect your data. Our systems are regularly audited for security compliance.' }
  ];

  const features = [
    { icon: 'fa-headset', title: 'Dedicated Support', desc: 'Our team is committed to helping you get your messages delivered.' },
    { icon: 'fa-route', title: 'Reliable Delivery', desc: 'We route your messages through the most reliable pathways available.' },
    { icon: 'fa-gavel', title: 'Clear Compliance', desc: 'Easy access to regional regulations and industry best practices.' },
    { icon: 'fa-user-check', title: 'One Account Access', desc: 'Access all our SMS and WhatsApp solutions with a single account.' }
  ];

  const services = [
    { icon: 'fa-globe-africa', title: 'Internet SMS', desc: 'Send messages directly to mobile phones via our global network. Custom sender IDs and real-time delivery tracking.', features: ['213+ Countries', '800+ Networks', 'Custom Sender ID', 'API Integration'] },
    { icon: 'fa-whatsapp', title: 'WhatsApp Business', desc: 'Connect with customers on WhatsApp. Send notifications, promotions, and updates with official templates.', features: ['Global Reach', 'Template Management', 'Multi-Account', 'Automated Campaigns'] },
    { icon: 'fa-sim-card', title: 'SIM-Based SMS', desc: 'Use your own SIM cards for cost-effective messaging. Perfect for local and regional campaigns.', features: ['Flat Rate Pricing', 'Multiple SIM Support', 'Two-Way Messaging', 'Mobile App Sync'] },
    { icon: 'fa-comment-dots', title: 'AI Chatbot Assistant', desc: 'Automate customer interactions on WhatsApp. Capture leads and process orders without coding.', features: ['No-Code Builder', '24/7 Availability', 'Lead Generation', 'Order Processing'] }
  ];

  const pricingPlans = [
    { 
      name: 'Internet SMS', 
      price: 'TZS 16', 
      sub: '/ msg',
      desc: 'Volume-based pricing for local delivery',
      features: ['1 – 5,000: TZS 16', '5,001 – 50,000: TZS 15', '50,001 – 100,000: TZS 14', '100,001 – 500,000: TZS 13', '500,001+: TZS 12'],
      featured: false
    },
    { 
      name: '⭐ Mobile SMS', 
      price: 'TZS 5', 
      sub: 'flat rate',
      desc: 'Global coverage using your SIM cards',
      features: ['One flat rate worldwide', 'Two-way communication', 'Multi-SIM management', 'API integration ready'],
      featured: true,
      note: 'SIM carrier subscription required'
    },
    { 
      name: 'WhatsApp SMS', 
      price: 'TZS 12', 
      sub: 'flat rate',
      desc: 'Global reach with Meta integration',
      features: ['Multi-account support', 'Template management', 'Campaign automation', 'Analytics dashboard'],
      featured: false,
      note: 'Additional Meta fees apply'
    }
  ];

  const testimonials = [
    { stars: 5, text: '"Reliable delivery and excellent support. Bulkysms has been a game-changer for our customer communication."', name: 'Steven Matiku', role: 'ECOWATER International', initial: 'S' },
    { stars: 5, text: '"Great value for money. The platform is intuitive and the delivery rates are outstanding."', name: 'David Demetry', role: 'BUSBORA Tanzania', initial: 'D' },
    { stars: 5, text: '"The support team is responsive and the platform consistently delivers our messages on time."', name: 'Philipo Lubuva', role: 'Tanganyika Law Society', initial: 'P' }
  ];

  const networks = ['South Africa', 'Germany', 'United Kingdom', 'USA', 'Singapore', 'Finland', 'Canada', 'Rep. Ireland', 'Denmark', 'Russia', 'Norway', '170+ Other Countries'];

  return (
    <div className="app">
      {/* NAVBAR */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <a href="#" className="logo">bulky<span>SMS</span></a>
          <ul className="nav-links">
            <li><a href="#services">Services</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#" className="nav-cta">Get Started</a></li>
          </ul>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <span className="badge">✦ Global SMS &amp; WhatsApp Platform</span>
            <h1>Reliable SMS &amp; <span className="gold">WhatsApp</span> Solutions for Business</h1>
            <p>Send messages to over 800 networks worldwide. One account, one dashboard, complete control.</p>
            
            <div className="hero-stats">
              <div className="stat-item">
                <div className="icon"><i className="fas fa-globe"></i></div>
                <div className="info"><strong>213+</strong><span>Countries Covered</span></div>
              </div>
              <div className="stat-item">
                <div className="icon"><i className="fas fa-check-circle"></i></div>
                <div className="info"><strong>800+</strong><span>Networks Connected</span></div>
              </div>
              <div className="stat-item">
                <div className="icon"><i className="fas fa-clock"></i></div>
                <div className="info"><strong>98.4%</strong><span>Delivery Rate</span></div>
              </div>
            </div>
            
            <div className="hero-actions">
              <a href="#" className="btn-primary">Get Started Free</a>
              <a href="#" className="btn-secondary">View Pricing</a>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="hero-card">
              <div className="stat-row"><span className="label">🌍 Global Coverage</span><span className="value">213 Countries</span></div>
              <div className="stat-row"><span className="label">📡 Networks</span><span className="value">800+</span></div>
              <div className="stat-row"><span className="label">⚡ Average Speed</span><span className="value">2.3s</span></div>
              <div className="stat-row"><span className="label">📊 Monthly Volume</span><span className="value">&gt;10M</span></div>
              <div className="stat-row"><span className="label">✅ Delivery Rate</span><span className="value">98.4%</span></div>
              <div className="gold-bar"><div className="fill"></div></div>
              <div className="card-note">Enterprise-grade reliability across all networks</div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why-choose">
        <div className="container">
          <div className="text-center">
            <span className="section-label">Why Choose Bulkysms</span>
            <h2 className="section-title">Built for <span className="gold">Business Communication</span></h2>
            <p className="section-sub mx-auto">Reliable, compliant, and easy to use — all from one account.</p>
          </div>
          <div className="features-grid">
            {features.map((f, i) => (
              <div className="feature-item" key={i}>
                <span className="icon"><i className={`fas ${f.icon}`}></i></span>
                <h4>{f.title}</h4>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services" id="services">
        <div className="container">
          <div className="text-center">
            <span className="section-label">Solutions</span>
            <h2 className="section-title">Our <span className="gold">Messaging</span> Services</h2>
            <p className="section-sub mx-auto">Reach your customers anywhere in the world through the channels they prefer.</p>
          </div>
          <div className="services-grid">
            {services.map((s, i) => (
              <div className="service-card" key={i}>
                <span className="icon"><i className={`fas ${s.icon}`}></i></span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <ul>
                  {s.features.map((f, j) => (
                    <li key={j}><i className="fas fa-circle"></i> {f}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GLOBAL NETWORKS */}
      <section className="networks">
        <div className="container">
          <div className="text-center">
            <span className="section-label">Global Reach</span>
            <h2 className="section-title">We Connect to <span className="gold">800+ Networks</span> Worldwide</h2>
            <p className="section-sub mx-auto">Reliable coverage across Africa, Europe, the Americas, and beyond.</p>
          </div>
          <div className="network-grid">
            {networks.map((n, i) => (
              <span className="network-item" key={i}>
                <i className={`fas ${i === networks.length - 1 ? 'fa-plus-circle' : 'fa-check-circle'}`}></i> {n}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="pricing" id="pricing">
        <div className="container">
          <div className="text-center">
            <span className="section-label">Pricing</span>
            <h2 className="section-title">Simple, <span className="gold">Transparent</span> Plans</h2>
            <p className="section-sub mx-auto">Competitive rates with volume discounts. Choose what fits your business.</p>
          </div>
          <div className="pricing-wrapper">
            {pricingPlans.map((plan, i) => (
              <div className={`pricing-card ${plan.featured ? 'featured' : ''}`} key={i}>
                <div className="plan">{plan.name}</div>
                <div className="price">{plan.price} <small>{plan.sub}</small></div>
                <div className="description">{plan.desc}</div>
                <ul>
                  {plan.features.map((f, j) => (
                    <li key={j}><i className="fas fa-circle"></i> {f}</li>
                  ))}
                </ul>
                <a href="#" className="btn">Get Started</a>
                {plan.note && <div className="pricing-note-inner">{plan.note}</div>}
              </div>
            ))}
          </div>
          <div className="pricing-note">
            <i className="fas fa-info-circle"></i> All prices in TZS. Enterprise discounts available for high-volume clients.
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials" id="testimonials">
        <div className="container">
          <div className="text-center">
            <span className="section-label">Testimonials</span>
            <h2 className="section-title">What Our <span className="gold">Clients</span> Say</h2>
            <p className="section-sub mx-auto">Real feedback from businesses that trust Bulkysms.</p>
          </div>
          <div className="testimonial-grid">
            {testimonials.map((t, i) => (
              <div className="testimonial" key={i}>
                <div className="stars">{'★'.repeat(t.stars)}</div>
                <div className="text">{t.text}</div>
                <div className="author">
                  <div className="initial">{t.initial}</div>
                  <div>
                    <div className="name">{t.name}</div>
                    <div className="role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq" id="faq">
        <div className="container">
          <div className="text-center">
            <span className="section-label">FAQ</span>
            <h2 className="section-title">Frequently <span className="gold">Asked</span> Questions</h2>
            <p className="section-sub mx-auto">Everything you need to know about Bulkysms.</p>
          </div>
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <div className={`faq-item ${activeFaq === i ? 'active' : ''}`} key={i} onClick={() => toggleFaq(i)}>
                <div className="faq-question">
                  {faq.q} <i className={`fas fa-chevron-down ${activeFaq === i ? 'rotated' : ''}`}></i>
                </div>
                <div className="faq-answer">{faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="container">
          <h2>Ready to Transform Your <span className="gold">Business Communication</span>?</h2>
          <p>Join thousands of businesses already using Bulkysms to reach their customers effectively.</p>
          <a href="#" className="btn-primary">Get Started Free</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <a href="#" className="logo">bulky<span>SMS</span></a>
              <p>Dar es Salaam, Tanzania<br />Global SMS and WhatsApp messaging solutions for businesses.</p>
            </div>
            <div className="footer-links">
              <h5>Solutions</h5>
              <a href="#">Internet SMS</a>
              <a href="#">WhatsApp Business</a>
              <a href="#">SIM-Based SMS</a>
              <a href="#">AI Chatbot</a>
            </div>
            <div className="footer-links">
              <h5>Company</h5>
              <a href="#">About</a>
              <a href="#">Careers</a>
              <a href="#">Blog</a>
              <a href="#">Contact</a>
            </div>
            <div className="footer-links">
              <h5>Support</h5>
              <a href="#">Documentation</a>
              <a href="#">API Reference</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
          <div className="footer-bottom">
            © 2026 Bulkysms. All rights reserved. Crafted with precision in Tanzania.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;