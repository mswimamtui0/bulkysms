import React from 'react';

const WhyUs = () => {
  const reasons = [
    { icon: 'fa-handshake', title: 'Free Consultation', desc: 'We take time to understand your business needs' },
    { icon: 'fa-user-cog', title: 'We Handle Setup', desc: 'We set everything up so you can start immediately' },
    { icon: 'fa-headset', title: 'Ongoing Support', desc: 'Our team is always available to help you' },
    { icon: 'fa-star', title: 'Best Rates', desc: 'Competitive pricing for businesses in Tanzania' }
  ];

  return (
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
              <div className="why-us-icon"><i className={`fas ${item.icon}`}></i></div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;