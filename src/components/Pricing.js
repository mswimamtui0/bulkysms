import React from 'react';

const Pricing = () => {
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

  return (
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
              <a href="#contact" className="btn">Talk to Sales</a>
              {plan.note && <div className="pricing-note-inner">{plan.note}</div>}
            </div>
          ))}
        </div>
        <div className="pricing-note">
          <i className="fas fa-info-circle"></i> All prices in TZS. Enterprise discounts available for high-volume clients.
        </div>
      </div>
    </section>
  );
};

export default Pricing;