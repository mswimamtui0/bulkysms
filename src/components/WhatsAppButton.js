import React from 'react';

const WhatsAppButton = () => {
  // Replace with your WhatsApp number
  const phoneNumber = '255757170544';
  const message = 'Hello! I want to learn more about Bulkysms services.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat on WhatsApp"
    >
      <i className="fab fa-whatsapp"></i>
      <span className="whatsapp-text">Chat with us</span>
    </a>
  );
};

export default WhatsAppButton;