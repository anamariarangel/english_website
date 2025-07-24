import React from 'react';

const CTAButton = ({ text = "Agendar Avaliação Gratuita", whatsappNumber = "5518991544704" }) => (
  <button className="cta-button">
    <a href={`https://wa.me/${whatsappNumber}`} className="cta-button__link">
      <i className="fab fa-whatsapp" style={{ fontSize: '25px', marginRight: '8px' }} aria-label="WhatsApp"></i>
      {text}
    </a>
  </button>
);

export default CTAButton;