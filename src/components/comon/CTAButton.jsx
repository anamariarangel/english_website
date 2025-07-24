import React from 'react';

const CTAButton = ({ text = "Agendar Avaliação Gratuita", whatsappNumber = "5516999999999" }) => (
  <button className="cta-button">
    <a href={`https://wa.me/${whatsappNumber}`} className="cta-button__link">
      <img src="../../assets/images/whatsapp.png" width="25" height="25" alt="WhatsApp" />
      {text}
    </a>
  </button>
);

export default CTAButton;