import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <span className="badge">✦ Global SMS &amp; WhatsApp Platform</span>
          <h1>Reliable SMS &amp; <span className="gold">WhatsApp</span> Solutions for Business</h1>
          <p>Send messages and OTP to over 800 networks worldwide. One account, one dashboard, complete control.</p>
          
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
            <a href="#contact" className="btn-primary">Contact Us Now</a>
            <a href="#pricing" className="btn-secondary">View Pricing</a>
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
  );
};

export default Hero;