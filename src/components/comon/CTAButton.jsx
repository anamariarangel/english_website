import React from 'react';
import whatsappIcon from '../../assets/images/whatsapp.png';

const CTAButton = ({ text = "Agendar Avaliação Gratuita", whatsappNumber = "5518991544704" }) => (
  <button className="cta-button">
    <a href={`https://wa.me/${whatsappNumber}`} className="cta-button__link">
      <img src={whatsappIcon} width="25" height="25" alt="WhatsApp" />
      {text}
    </a>
  </button>
);

export default CTAButton;