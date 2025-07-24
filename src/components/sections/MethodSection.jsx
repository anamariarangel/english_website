import React from 'react';
import CTAButton from '../comon/CTAButton';
import { methodData } from '../../data/content';
import '../../assets/styles/method.scss';
const MethodItem = ({ icon, text }) => (
  <div className="method__item">
    <i className={`fas fa-${icon} method__icon`}></i>
    <p className="method__text">{text}</p>
  </div>
);

const MethodSection = () => {
  return (
    <section id="methods" className="method">
      <div className="container">
        <h2 className="method__title">O Método de Milhões!</h2>
        <p className="method__description">
          Aprenda inglês de forma estratégica e focada no que você realmente precisa.
          Nada de conteúdos genéricos ou aulas decorativas — aqui o aprendizado é personalizado para sua
          realidade, seus objetivos e sua rotina.
          Você vai sentir segurança e progresso reais desde o início, com uma abordagem pensada para adultos que
          não têm tempo a perder.
          E o melhor: com flexibilidade total de horário, você encaixa as aulas na sua agenda de qualquer lugar do
          mundo.
        </p>

        <div className="method__list">
          {methodData.map((item, index) => (
            <MethodItem key={index} icon={item.icon} text={item.text} />
          ))}
        </div>
      </div>
      
      <CTAButton />
    </section>
  );
};

export default MethodSection;