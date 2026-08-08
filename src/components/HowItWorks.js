import React from 'react';

const HowItWorks = () => {
  const steps = [
    { icon: 'fa-phone-alt', title: 'Contact Us', desc: 'Reach out via phone, WhatsApp, or our contact form' },
    { icon: 'fa-comments', title: 'We Discuss Your Needs', desc: 'Our team listens and recommends the best solution' },
    { icon: 'fa-cogs', title: 'We Set You Up', desc: 'We handle the technical setup for your account' },
    { icon: 'fa-rocket', title: 'Start Sending', desc: 'You begin sending messages to your customers' }
  ];

  return (
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
              <div className="step-icon"><i className={`fas ${step.icon}`}></i></div>
              <h4>{step.title}</h4>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;