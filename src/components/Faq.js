import React, { useState } from 'react';

const Faq = () => {
  const [activeFaq, setActiveFaq] = useState(0);

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

  return (
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
  );
};

export default Faq;