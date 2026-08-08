import React from 'react';

const Services = () => {
  const services = [
    { icon: 'fa-globe-africa', title: 'Internet SMS', desc: 'Send messages directly to mobile phones via our global network. Custom sender IDs and real-time delivery tracking.', features: ['213+ Countries', '800+ Networks', 'Custom Sender ID', 'API Integration'] },
    { icon: 'fa-whatsapp', title: 'WhatsApp Business', desc: 'Connect with customers on WhatsApp. Send notifications, promotions, and updates with official templates.', features: ['Global Reach', 'Template Management', 'Multi-Account', 'Automated Campaigns'] },
    { icon: 'fa-sim-card', title: 'SIM-Based SMS', desc: 'Use your own SIM cards for cost-effective messaging. Perfect for local and regional campaigns.', features: ['Flat Rate Pricing', 'Multiple SIM Support', 'Two-Way Messaging', 'Mobile App Sync'] },
    { icon: 'fa-comment-dots', title: 'AI Chatbot Assistant', desc: 'Automate customer interactions on WhatsApp. Capture leads and process orders without coding.', features: ['No-Code Builder', '24/7 Availability', 'Lead Generation', 'Order Processing'] }
  ];

  return (
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
  );
};

export default Services;