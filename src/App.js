import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [activeFaq, setActiveFaq] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [expandedPost, setExpandedPost] = useState(null);
  const [blogPosts] = useState([
    {
      id: 1,
      title: 'Why Bulk SMS is the Most Effective Marketing Channel in Tanzania',
      excerpt: 'Discover why businesses across Tanzania are choosing bulk SMS over social media and email to reach their customers instantly.',
      content: 'In today\'s fast-paced digital world, businesses need to communicate with customers quickly and effectively. Bulk SMS offers an unparalleled 98% open rate compared to email\'s 20%. This means your message is almost guaranteed to be seen. For Tanzanian businesses, SMS is particularly effective because of high mobile phone penetration and reliable network coverage across the country.',
      category: 'Marketing Tips',
      date: 'August 9, 2026',
      author: 'Bulkysms Team',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'WhatsApp Business vs. SMS: Which is Better for Your Business?',
      excerpt: 'Compare WhatsApp Business and traditional SMS to determine the best communication channel for your specific business needs.',
      content: 'Both WhatsApp Business and SMS have unique strengths. SMS excels in delivery reliability and reach, while WhatsApp offers rich media and interactive features. For time-sensitive notifications like OTPs and payment reminders, SMS is more reliable. For customer engagement and support, WhatsApp Business offers a richer experience. Many businesses use both channels for maximum impact.',
      category: 'WhatsApp Business',
      date: 'August 8, 2026',
      author: 'Bulkysms Team',
      readTime: '7 min read'
    },
    {
      id: 3,
      title: 'How to Boost Sales by 40% with SMS Marketing',
      excerpt: 'Learn proven strategies to increase your sales using targeted SMS campaigns that convert customers into loyal buyers.',
      content: 'SMS marketing has proven to be one of the most effective sales channels. This guide covers segmentation, timing, and crafting messages that convert. Research shows that personalized SMS messages have a 45% response rate. By segmenting your audience and sending targeted offers, you can significantly increase your conversion rates and build lasting customer relationships.',
      category: 'Sales Strategies',
      date: 'August 7, 2026',
      author: 'Bulkysms Team',
      readTime: '6 min read'
    },
    {
      id: 4,
      title: 'OTP Delivery: Why Businesses Need Secure Authentication',
      excerpt: 'Learn why One-Time Password (OTP) delivery via SMS and WhatsApp is essential for securing your customers\' accounts.',
      content: 'Cyber threats are on the rise. OTP delivery via SMS and WhatsApp provides an additional layer of security that protects both your business and your customers. With 2FA becoming a standard security practice, integrating OTP delivery into your authentication flow is no longer optional. It builds trust and reduces the risk of unauthorized access to sensitive data.',
      category: 'Security',
      date: 'August 6, 2026',
      author: 'Bulkysms Team',
      readTime: '4 min read'
    }
  ]);

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

  const toggleBlogPost = (id) => {
    setExpandedPost(expandedPost === id ? null : id);
  };

  // ============================================================
  // CONTACT FORM - DIRECT WHATSAPP
  // ============================================================
  const sendToWhatsApp = (e) => {
    e.preventDefault();
    
    const name = document.getElementById('formName').value;
    const phone = document.getElementById('formPhone').value;
    const email = document.getElementById('formEmail').value || 'Not provided';
    const message = document.getElementById('formMessage').value;
    
    if (!name || !phone || !message) {
      alert('Please fill in all required fields.');
      return;
    }
    
    const whatsappNumber = '255757170544';
    
    const text = `New Bulkysms Inquiry%0A%0A
Name: ${name}%0A
Phone: ${phone}%0A
Email: ${email}%0A
%0A
Message:%0A${message}`;
    
    const url = `https://wa.me/${whatsappNumber}?text=${text}`;
    window.open(url, '_blank');
    
    document.getElementById('contactForm').reset();
    alert('Opening WhatsApp... Our team will respond shortly!');
  };

  const faqs = [
    { q: 'What is Bulkysms?', a: 'Bulkysms is a business messaging platform that allows you to send SMS and WhatsApp messages to customers worldwide. We provide reliable delivery across 800+ networks in 213 countries.' },
    { q: 'How do I send messages?', a: 'Simply upload your contact list, compose your message, and send. The platform handles delivery and provides real-time reports on delivery status.' },
    { q: 'Can I integrate Bulkysms with my systems?', a: 'Yes, we offer a comprehensive REST API that enables integration with your CRM, ERP, or any custom application. Documentation is available to help you get started quickly.' },
    { q: 'What support do you provide?', a: 'We offer dedicated support via email and phone. Enterprise clients receive priority support and account management.' },
    { q: 'Is my data secure?', a: 'Yes, we use encryption and follow industry best practices to protect your data. Our systems are regularly audited for security compliance.' }
  ];

  const features = [
    { title: 'Dedicated Support', desc: 'Our team is committed to helping you get your messages delivered.' },
    { title: 'Reliable Delivery', desc: 'We route your messages through the most reliable pathways available.' },
    { title: 'Clear Compliance', desc: 'Easy access to regional regulations and industry best practices.' },
    { title: 'One Account Access', desc: 'Access all our SMS and WhatsApp solutions with a single account.' }
  ];

  const services = [
    { title: 'Internet SMS', desc: 'Send messages directly to mobile phones via our global network. Custom sender IDs and real-time delivery tracking.', features: ['213+ Countries', '800+ Networks', 'Custom Sender ID', 'API Integration'] },
    { title: 'WhatsApp Business', desc: 'Connect with customers on WhatsApp. Send notifications, promotions, and updates with official templates.', features: ['Global Reach', 'Template Management', 'Multi-Account', 'Automated Campaigns'] },
    { title: 'SIM-Based SMS', desc: 'Use your own SIM cards for cost-effective messaging. Perfect for local and regional campaigns.', features: ['Flat Rate Pricing', 'Multiple SIM Support', 'Two-Way Messaging', 'Mobile App Sync'] },
    { title: 'AI Chatbot Assistant', desc: 'Automate customer interactions on WhatsApp. Capture leads and process orders without coding.', features: ['No-Code Builder', '24/7 Availability', 'Lead Generation', 'Order Processing'] }
  ];

  const pricingPlans = [
    { 
      name: 'Internet SMS', 
      price: 'TZS 16', 
      sub: '/ msg',
      desc: 'Volume-based pricing for local delivery',
      features: ['1 to 5,000: TZS 16', '5,001 to 50,000: TZS 15', '50,001 to 100,000: TZS 14', '100,001 to 500,000: TZS 13', '500,001+: TZS 12'],
      featured: false
    },
    { 
      name: 'Mobile SMS', 
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
    { title: 'Best Rates', desc: 'Competitive pricing for businesses in Tanzania' }
  ];

  return (
    <div className="app">
      {/* ===== NAVBAR ===== */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <a href="/" className="logo">bulky<span>SMS</span></a>
          <ul className="nav-links">
            <li><a href="#services">Services</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#faq">Help</a></li>
            <li><a href="#contact" className="nav-cta">Contact Us</a></li>
          </ul>
        </div>
      </nav>

      {/* ===== HERO WITH BACKGROUND VIDEO ===== */}
      <section className="hero hero-video-bg">
        <div className="hero-video-background">
          <video className="hero-bg-video" autoPlay muted loop playsInline>
            <source src="/videos/bulky-1.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
        </div>

        <div className="container hero-grid">
          <div className="hero-content">
            <span className="badge">Global SMS &amp; WhatsApp Platform</span>
            <h1>Deliver Your Messages. <span className="gold">Grow Your Business.</span></h1>
            <p>Reach more customers with our powerful Bulk SMS platform. Send OTPs via Email, SMS &amp; WhatsApp.</p>
            
            <div className="hero-stats">
              <div className="stat-item">
                <div className="info"><strong>213+</strong><span>Countries Covered</span></div>
              </div>
              <div className="stat-item">
                <div className="info"><strong>800+</strong><span>Networks Connected</span></div>
              </div>
              <div className="stat-item">
                <div className="info"><strong>98.4%</strong><span>Delivery Rate</span></div>
              </div>
            </div>
            
            <div className="hero-actions">
              <a href="#contact" className="btn-primary">Get Started Today</a>
              <a href="#pricing" className="btn-secondary">View Pricing</a>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="hero-card">
              <div className="stat-row"><span className="label">Global Coverage</span><span className="value">213 Countries</span></div>
              <div className="stat-row"><span className="label">Networks</span><span className="value">800+</span></div>
              <div className="stat-row"><span className="label">Average Speed</span><span className="value">2.3s</span></div>
              <div className="stat-row"><span className="label">Monthly Volume</span><span className="value">10M+</span></div>
              <div className="stat-row"><span className="label">Delivery Rate</span><span className="value">98.4%</span></div>
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
                  {s.features.map((f, j) => (
                    <li key={j}>{f}</li>
                  ))}
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
              <span className="network-item" key={i}>
                {n}
              </span>
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
                  {plan.features.map((f, j) => (
                    <li key={j}>{f}</li>
                  ))}
                </ul>
                <a href="#contact" className="btn">Talk to Sales</a>
                {plan.note && <div className="pricing-note-inner">{plan.note}</div>}
              </div>
            ))}
          </div>
          <div className="pricing-note">
            All prices in TZS. Enterprise discounts available for high-volume clients.
          </div>
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
            <p className="section-sub mx-auto">Here's why businesses in Tanzania trust Bulkysms.</p>
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

      {/* ============================================================
          BLOG SECTION
          ============================================================ */}
      <section className="blog-section" id="blog">
        <div className="container">
          <div className="text-center">
            <span className="section-label">Insights</span>
            <h2 className="section-title">Latest <span className="gold">Blog</span> Posts</h2>
            <p className="section-sub mx-auto">Expert tips, guides, and insights to help you grow your business with SMS and WhatsApp marketing.</p>
          </div>

          <div className="blog-categories">
            <span className="category active">All</span>
            <span className="category">Marketing Tips</span>
            <span className="category">WhatsApp Business</span>
            <span className="category">Sales Strategies</span>
            <span className="category">Security</span>
          </div>

          <div className="blog-grid">
            {blogPosts.map((post) => (
              <div className={`blog-card ${expandedPost === post.id ? 'expanded' : ''}`} key={post.id}>
                <div className="blog-card-header">
                  <div className="blog-meta">
                    <span className="blog-category">{post.category}</span>
                    <span className="blog-date">{post.date}</span>
                  </div>
                </div>
                <div className="blog-card-body">
                  <h3 className="blog-title">{post.title}</h3>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  {expandedPost === post.id && (
                    <div className="blog-full-content">
                      <p>{post.content}</p>
                      <div className="blog-cta">
                        <p>Want to learn more about our services?</p>
                        <a href="#contact" className="btn-primary" style={{ padding: '10px 28px', fontSize: '0.85rem' }}>
                          Contact Our Team
                        </a>
                      </div>
                    </div>
                  )}
                </div>
                <div className="blog-card-footer">
                  <div className="blog-author">
                    <span className="author-name">{post.author}</span>
                    <span className="read-time">{post.readTime}</span>
                  </div>
                  <button 
                    className="read-more-btn"
                    onClick={() => toggleBlogPost(post.id)}
                  >
                    {expandedPost === post.id ? 'Read Less' : 'Read More'}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="blog-newsletter">
            <div className="newsletter-content">
              <h3>Subscribe to Our Newsletter</h3>
              <p>Get the latest SMS marketing tips and updates delivered to your inbox.</p>
              <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Enter your email" required />
                <button type="submit" className="btn-primary">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
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
                  {faq.q}
                </div>
                <div className="faq-answer">{faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT US ===== */}
      <section className="about-section" id="about">
        <div className="container">
          <div className="text-center">
            <span className="section-label">About Us</span>
            <h2 className="section-title">Who <span className="gold">We Are</span></h2>
            <p className="section-sub mx-auto">Bulkysms is a trusted messaging platform serving businesses across Tanzania and beyond.</p>
          </div>
          <div className="about-content">
            <p>We help businesses connect with their customers through reliable SMS and WhatsApp messaging solutions. 
            Our platform is designed for simplicity, reliability, and scale – so you can focus on growing your business.</p>
          </div>
        </div>
      </section>

      {/* ===== CAREERS ===== */}
      <section className="careers-section" id="careers">
        <div className="container">
          <div className="text-center">
            <span className="section-label">Careers</span>
            <h2 className="section-title">Join Our <span className="gold">Team</span></h2>
            <p className="section-sub mx-auto">We're always looking for talented people to help us build the future of business messaging.</p>
          </div>
          <div className="careers-content">
            <p>No current openings, but we'd love to hear from you. Send your CV to <a href="mailto:careers@bulkysms.com">careers@bulkysms.com</a></p>
          </div>
        </div>
      </section>

      {/* ===== PRIVACY POLICY ===== */}
      <section className="privacy-section" id="privacy">
        <div className="container">
          <div className="text-center">
            <span className="section-label">Privacy</span>
            <h2 className="section-title">Privacy <span className="gold">Policy</span></h2>
            <p className="section-sub mx-auto">Your data is safe with us.</p>
          </div>
          <div className="privacy-content">
            <p>We collect minimal data to provide our messaging services. We do not share your information with third parties without your explicit consent. All data is encrypted in transit and at rest.</p>
            <ul>
              <li>Data encryption</li>
              <li>No data sharing</li>
              <li>GDPR compliant</li>
              <li>Regular security audits</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== TERMS OF SERVICE ===== */}
      <section className="terms-section" id="terms">
        <div className="container">
          <div className="text-center">
            <span className="section-label">Terms</span>
            <h2 className="section-title">Terms of <span className="gold">Service</span></h2>
            <p className="section-sub mx-auto">By using Bulkysms, you agree to our terms.</p>
          </div>
          <div className="terms-content">
            <p>Bulkysms provides messaging services subject to the following terms. You agree not to send spam or illegal content. We reserve the right to suspend accounts that violate our policies.</p>
            <p>For full terms, please <a href="#contact">contact us</a>.</p>
          </div>
        </div>
      </section>

      {/* ===== CONTACT PAGE ===== */}
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
              
              <div className="contact-item">
                <div>
                  <strong>Phone</strong>
                  <a href="tel:+255757170544">+255 757 170 544</a>
                </div>
              </div>
              
              <div className="contact-item">
                <div>
                  <strong>WhatsApp</strong>
                  <a href="https://wa.me/255757170544">+255 757 170 544</a>
                </div>
              </div>
              
              <div className="contact-item">
                <div>
                  <strong>Email</strong>
                  <a href="mailto:info@bulkysms.com">info@bulkysms.com</a>
                </div>
              </div>
              
              <div className="contact-item">
                <div>
                  <strong>Office</strong>
                  <p>Dar es Salaam, Tanzania</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div>
                  <strong>Working Hours</strong>
                  <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 2:00 PM</p>
                </div>
              </div>
              
              <div className="contact-social">
                <h4>Follow Us</h4>
                <div className="social-links">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">Facebook</a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">Twitter</a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">Instagram</a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">LinkedIn</a>
                </div>
              </div>
            </div>

            <div className="contact-form-container">
              <div className="contact-form-wrapper">
                <h3>Send Us a Message</h3>
                <p className="form-subtitle">We'll respond within 24 hours</p>
                
                <form className="contact-form" id="contactForm" onSubmit={sendToWhatsApp}>
                  <div className="form-group">
                    <input type="text" id="formName" placeholder="Your Name" required />
                  </div>
                  
                  <div className="form-group">
                    <input type="tel" id="formPhone" placeholder="Phone Number" required />
                  </div>
                  
                  <div className="form-group">
                    <input type="email" id="formEmail" placeholder="Email Address" />
                  </div>
                  
                  <div className="form-group">
                    <textarea id="formMessage" placeholder="Tell us about your needs..." rows="4" required></textarea>
                  </div>
                  
                  <button type="submit" className="btn-primary submit-btn">
                    Send via WhatsApp
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <a href="/" className="logo">bulky<span>SMS</span></a>
              <p>Dar es Salaam, Tanzania<br />Global SMS and WhatsApp messaging solutions for businesses.</p>
            </div>
            
            <div className="footer-links">
              <h5>Solutions</h5>
              <a href="#services">Internet SMS</a>
              <a href="#services">WhatsApp Business</a>
              <a href="#services">SIM-Based SMS</a>
              <a href="#services">AI Chatbot</a>
            </div>
            
            <div className="footer-links">
              <h5>Company</h5>
              <a href="#about">About Us</a>
              <a href="#careers">Careers</a>
              <a href="#blog">Blog</a>
              <a href="#contact">Contact</a>
            </div>
            
            <div className="footer-links">
              <h5>Support</h5>
              <a href="#faq">FAQ</a>
              <a href="#contact">Contact Support</a>
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
            </div>
          </div>
          <div className="footer-bottom">
            © 2026 Bulkysms. All rights reserved. Crafted with precision in Tanzania.
          </div>
        </div>
      </footer>

      {/* ===== FLOATING WHATSAPP BUTTON ===== */}
            {/* ===== FLOATING WHATSAPP BUTTON ===== */}
      <a 
        href="https://wa.me/255757170544?text=Hello!%20I%20want%20to%20learn%20more%20about%20Bulkysms%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Chat on WhatsApp"
      >
        {/* Clean white WhatsApp SVG Icon */}
        <svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
      
          </div>
  );
};

export default App;