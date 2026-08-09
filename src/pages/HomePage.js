import React from 'react';

const HomePage = () => {
  const services = [
    { title: 'Internet SMS', desc: 'Send messages directly to mobile phones via our global network. Custom sender IDs and real-time delivery tracking.', features: ['213+ Countries', '800+ Networks', 'Custom Sender ID', 'API Integration'] },
    { title: 'WhatsApp Business', desc: 'Connect with customers on WhatsApp. Send notifications, promotions, and updates with official templates.', features: ['Global Reach', 'Template Management', 'Multi-Account', 'Automated Campaigns'] },
    { title: 'SIM-Based SMS', desc: 'Use your own SIM cards for cost-effective messaging. Perfect for local and regional campaigns.', features: ['Flat Rate Pricing', 'Multiple SIM Support', 'Two-Way Messaging', 'Mobile App Sync'] },
    { title: 'AI Chatbot Assistant', desc: 'Automate customer interactions on WhatsApp. Capture leads and process orders without coding.', features: ['No-Code Builder', '24/7 Availability', 'Lead Generation', 'Order Processing'] }
  ];

  const pricingPlans = [
    { name: 'Internet SMS', price: 'TZS 16', sub: '/ msg', desc: 'Volume-based pricing for local delivery', features: ['1 – 5,000: TZS 16', '5,001 – 50,000: TZS 15', '50,001 – 100,000: TZS 14', '100,001 – 500,000: TZS 13', '500,001+: TZS 12'], featured: false },
    { name: '⭐ Mobile SMS', price: 'TZS 5', sub: 'flat rate', desc: 'Global coverage using your SIM cards', features: ['One flat rate worldwide', 'Two-way communication', 'Multi-SIM management', 'API integration ready'], featured: true, note: 'SIM carrier subscription required' },
    { name: 'WhatsApp SMS', price: 'TZS 12', sub: 'flat rate', desc: 'Global reach with Meta integration', features: ['Multi-account support', 'Template management', 'Campaign automation', 'Analytics dashboard'], featured: false, note: 'Additional Meta fees apply' }
  ];

  const testimonials = [
    { stars: 5, text: '"Reliable delivery and excellent support. Bulkysms has been a game-changer for our customer communication."', name: 'Steven Matiku', role: 'ECOWATER International' },
    { stars: 5, text: '"Great value for money. The platform is intuitive and the delivery rates are outstanding."', name: 'David Demetry', role: 'BUSBORA Tanzania' },
    { stars: 5, text: '"The support team is responsive and the platform consistently delivers our messages on time."', name: 'Philipo Lubuva', role: 'Tanganyika Law Society' }
  ];

  const blogPosts = [
    { id: 1, title: 'Why Bulk SMS is the Most Effective Marketing Channel', excerpt: 'Discover why businesses are choosing bulk SMS over social media and email to reach their customers instantly.', category: 'Marketing Tips', date: 'August 9, 2026', author: 'Bulkysms Team', readTime: '5 min read' },
    { id: 2, title: 'WhatsApp Business vs. SMS: Which is Better for Your Business?', excerpt: 'Compare WhatsApp Business and traditional SMS to determine the best communication channel for your business.', category: 'WhatsApp Business', date: 'August 8, 2026', author: 'Bulkysms Team', readTime: '7 min read' },
    { id: 3, title: 'How to Boost Sales by 40% with SMS Marketing', excerpt: 'Learn proven strategies to increase your sales using targeted SMS campaigns that convert customers into loyal buyers.', category: 'Sales Strategies', date: 'August 7, 2026', author: 'Bulkysms Team', readTime: '6 min read' },
    { id: 4, title: 'OTP Delivery: Why Businesses Need Secure Authentication', excerpt: 'Learn why One-Time Password (OTP) delivery via SMS is essential for securing your customers\' accounts.', category: 'Security', date: 'August 6, 2026', author: 'Bulkysms Team', readTime: '4 min read' }
  ];

  const networks = ['South Africa', 'Germany', 'United Kingdom', 'USA', 'Singapore', 'Finland', 'Canada', 'Rep. Ireland', 'Denmark', 'Russia', 'Norway', '170+ Other Countries'];

  const steps = [
    { title: 'Contact Us', desc: 'Reach out via phone, WhatsApp, or our contact form' },
    { title: 'We Discuss Your Needs', desc: 'Our team listens and recommends the best solution' },
    { title: 'We Set You Up', desc: 'We handle the technical setup for your account' },
    { title: 'Start Sending', desc: 'You begin sending messages to your customers' }
  ];

  const reasons = [
    { title: 'Free Consultation', desc: 'We take time to understand your business needs' },
    { title: 'We Handle Setup', desc: 'We set everything up so you can start immediately' },
    { title: 'Ongoing Support', desc: 'Our team is always available to help you' },
    { title: 'Best Rates', desc: 'Competitive pricing for your business' }
  ];

  const features = [
    { title: 'Dedicated Support', desc: 'Our team is committed to helping you get your messages delivered.' },
    { title: 'Reliable Delivery', desc: 'We route your messages through the most reliable pathways available.' },
    { title: 'Clear Compliance', desc: 'Easy access to regional regulations and industry best practices.' },
    { title: 'One Account Access', desc: 'Access all our SMS and WhatsApp solutions with a single account.' }
  ];

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
            <span className="badge">✦ Global SMS & WhatsApp Platform</span>
            <h1>Reliable SMS &amp; <span className="gold">WhatsApp</span> Solutions for Business</h1>
            <p>Reach more customers with our powerful Bulk SMS platform. Send OTPs via SMS & WhatsApp.</p>
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
              <a href="/contact" className="btn-primary">Get Started Free</a>
              <a href="/pricing" className="btn-secondary">View Pricing</a>
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

      {/* ===== WHY CHOOSE US ===== */}
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
            <span className="section-label">Solutions</span>
            <h2 className="section-title">Our <span className="gold">Messaging</span> Services</h2>
            <p className="section-sub mx-auto">Reach your customers anywhere in the world through the channels they prefer.</p>
          </div>
          <div className="services-grid">
            {services.map((s, i) => (
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

      {/* ===== GLOBAL NETWORKS ===== */}
      <section className="networks">
        <div className="container">
          <div className="text-center">
            <span className="section-label">Global Reach</span>
            <h2 className="section-title">We Connect to <span className="gold">800+ Networks</span> Worldwide</h2>
            <p className="section-sub mx-auto">Reliable coverage across Africa, Europe, the Americas, and beyond.</p>
          </div>
          <div className="network-grid">
            {networks.map((n, i) => (
              <span className="network-item" key={i}>{n}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRICING ===== */}
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
                  {plan.features.map((f, j) => <li key={j}>{f}</li>)}
                </ul>
                <a href="/contact" className="btn">Get Started</a>
                {plan.note && <div className="pricing-note-inner">{plan.note}</div>}
              </div>
            ))}
          </div>
          <div className="pricing-note">All prices in TZS. Enterprise discounts available for high-volume clients.</div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
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
                  <div className="initial">{t.name.charAt(0)}</div>
                  <div><div className="name">{t.name}</div><div className="role">{t.role}</div></div>
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
            <span className="section-label">How It Works</span>
            <h2 className="section-title">Get Started in <span className="gold">4 Simple Steps</span></h2>
            <p className="section-sub mx-auto">We make it easy for you to start communicating with your customers.</p>
          </div>
          <div className="steps-grid">
            {steps.map((step, i) => (
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
            <span className="section-label">Why Choose Us</span>
            <h2 className="section-title">We Make <span className="gold">Communication Easy</span></h2>
            <p className="section-sub mx-auto">Here's why businesses trust Bulkysms.</p>
          </div>
          <div className="why-us-grid">
            {reasons.map((item, i) => (
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
            <span className="section-label">Blog</span>
            <h2 className="section-title">Latest <span className="gold">Blog Posts</span></h2>
            <p className="section-sub mx-auto">Expert tips, guides, and insights to help you grow your business.</p>
          </div>
          <div className="blog-grid">
            {blogPosts.map((post) => (
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
            <span className="section-label">Contact Us</span>
            <h2 className="section-title">Get in <span className="gold">Touch</span></h2>
            <p className="section-sub mx-auto">Reach out to our team and we'll help you get started.</p>
          </div>
          <div className="contact-grid">
            <div className="contact-info">
              <h3>Contact Information</h3>
              <div className="contact-item"><div><strong>Phone</strong><a href="tel:+255757170544">+255 757 170 544</a></div></div>
              <div className="contact-item"><div><strong>WhatsApp</strong><a href="https://wa.me/255757170544">+255 757 170 544</a></div></div>
              <div className="contact-item"><div><strong>Email</strong><a href="mailto:info@bulkysms.com">info@bulkysms.com</a></div></div>
              <div className="contact-item"><div><strong>Office</strong><p>Dar es Salaam, Tanzania</p></div></div>
              <div className="contact-item"><div><strong>Working Hours</strong><p>Mon - Fri: 8:00 AM - 6:00 PM</p><p>Saturday: 9:00 AM - 2:00 PM</p></div></div>
              <div className="contact-social">
                <h4>Follow Us</h4>
                <div className="social-links">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i> Facebook</a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i> Twitter</a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i> Instagram</a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i> LinkedIn</a>
                </div>
              </div>
            </div>
            <div className="contact-form-container">
              <div className="contact-form-wrapper">
                <h3>Send Us a Message</h3>
                <p className="form-subtitle">We'll respond within 24 hours</p>
                <form className="contact-form" id="contactForm">
                  <div className="form-group"><input type="text" placeholder="Your Name" required /></div>
                  <div className="form-group"><input type="tel" placeholder="Phone Number" required /></div>
                  <div className="form-group"><input type="email" placeholder="Email Address" /></div>
                  <div className="form-group"><textarea placeholder="Tell us about your needs..." rows="4" required></textarea></div>
                  <button type="submit" className="btn-primary submit-btn">Send Message</button>
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