import React from 'react';
import CTAButton from '../comon/CTAButton';

const HeroSection = () => (
  <section className="hero">
    <div className="hero__overlay"></div>
    <div className="container">
      <div className="hero__content">
        {/* fetchPriority="high" para o elemento LCP mais provável */}
        <h1 className="hero__title" fetchpriority="high">
          Inglês para Adultos
        </h1>
        <h2 className="hero__subtitle">
          Aulas personalizadas com foco em destravar sua comunicação para o que você precisa.
        </h2>
        <CTAButton />
      </div>
    </div>
  </section>
);

export default HeroSection;