import React from 'react';
import CTAButton from '../comon/CTAButton';
import { differentialsData } from '../../data/content';
import '../../assets/styles/differentials.scss'

const DifferentialItem = ({ icon, title, text }) => (
  <div className="differentials__item">
    <i className={`fas fa-${icon} differentials__icon`}></i> 
    <h3 className="differentials__item-title">{title}</h3>
    <p className="differentials__item-text">{text}</p>
  </div>
);


const DifferentialsSection = () => {
  return (
    <section id="differentials" className="differentials">
      <div className="container">
        <h2 className="differentials__title">Diferenciais</h2>
        <div className="differentials__grid">
          {differentialsData.map((differential, index) => (
            <DifferentialItem 
              key={index} 
              icon={differential.icon}
              title={differential.title} 
              text={differential.text} 
            />
          ))}
        </div>
        <CTAButton />
      </div>
    </section>
  );
};

export default DifferentialsSection;