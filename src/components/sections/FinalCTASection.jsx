import React from 'react';
import CTAButton from '../comon/CTAButton';


const FinalCTASection = () => (
  <section className="final-cta">
    <div className="container">
      <h2 className="final-cta__title">Pronto/a para aprender com mais foco, clareza e resultado real?</h2>
      <CTAButton text="Agendar bate-papo" />
    </div>
    <p>Copyright © {new Date().getFullYear()} Isadora Alves - Todos os direitos reservados</p>
  </section>
);

export default FinalCTASection;