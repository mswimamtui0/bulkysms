import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, send this to your backend or email
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="contact-form-wrapper">
      <h3>Send Us a Message</h3>
      <p className="form-subtitle">We'll respond within 24 hours</p>
      
      {submitted ? (
        <div className="success-message">
          <i className="fas fa-check-circle"></i>
          <p>Thank you! We'll contact you soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          
          <div className="form-group">
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="">Select Service</option>
              <option value="internet-sms">Internet SMS</option>
              <option value="whatsapp">WhatsApp Business</option>
              <option value="sim-sms">SIM-Based SMS</option>
              <option value="chatbot">AI Chatbot</option>
              <option value="other">Other</option>
            </select>
          </div>
          
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Tell us about your needs..."
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          
          <button type="submit" className="btn-primary submit-btn">
            Send Message
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;