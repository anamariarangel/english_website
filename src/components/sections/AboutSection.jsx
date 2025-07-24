import React from 'react';
import CTAButton from '../comon/CTAButton';

const AboutSection = () => (
  <section className="about">
    <div className="container">
      <div className="about__content">
        <div className="about__photo">
          <img src="../../assets/images/foto_isadora.jpg" width="350" height="350" alt="Isadora Alves" />
        </div>
        <div className="about__text">
          <h2 className="about__title">Oi! Eu sou a Isadora!</h2>
          <p className="about__description">
            Desde 2011, ensino inglês para adultos no Brasil e no exterior através de aulas online. Com proficiência certificada pela Universidade de Cambridge (FCE e CAE), possuo experiência com aulas personalizadas para diversas áreas, como saúde, tecnologia, educação, etc.

Minha missão é criar um aprendizado eficiente e acolhedor para que você recupere a confiança e aproveite todas as oportunidades. Vamos juntos?
          </p>
        </div>
      </div>
      <CTAButton />
    </div>
  </section>
);

export default AboutSection;