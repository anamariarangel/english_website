import React from 'react';
import CTAButton from '../comon/CTAButton';
import { painPointsData } from '../../data/content';


const PainPoint = ({ icon, text }) => (
  <div className="pain-points__item">
    <i className={`fas fa-${icon} pain-points__icon`}></i>
    <p className="pain-points__text">{text}</p>
  </div>
);

const PainPointsSection = () => {
  return (
    <section className="pain-points">
      <div className="container">
        <h2 className="pain-points__title">Chega de estudar inglês e continuar travando</h2>
        
        <div className="pain-points__list">
          {painPointsData.map((point, index) => (
            <PainPoint key={index} icon={point.icon} text={point.text} />
          ))}
        </div>
        
        <p className="pain-points__conclusion">
          Se você se reconheceu em alguma dessas situações, saiba: o problema não é você. O problema está na forma
          como o inglês foi te ensinado — sem acolhimento, sem técnica, sem foco em resultados reais. E é isso que
          eu vou te ajudar a mudar.
        </p>
      </div>
      
      <CTAButton />
    </section>
  );
};

export default PainPointsSection;