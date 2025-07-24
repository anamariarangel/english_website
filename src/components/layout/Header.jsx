import React from 'react';
import logoImage from '../../assets/images/coruja-vetor.png';
import '../../assets/styles/header.scss';

const Header = () => (
  <header className="header">
    <div className="header__logo">
      <img src={logoImage} width="50" height="50" alt="Logo da Professora Isa" />
    </div>
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item">
          <a href="#methods" className="header__nav-link">Método</a>
        </li>
        <li className="header__nav-item">
          <a href="#differentials" className="header__nav-link">Diferenciais</a>
        </li>
        <li className="header__nav-item">
          <a href="#testimonials" className="header__nav-link">Depoimentos</a>
        </li>
        <li className="header__nav-item">
          <a href="https://wa.me/5518991544704" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <i className="fab fa-whatsapp" style={{fontSize: '22px', color: '#25D366'}}></i>
          </a>
        </li>
        <li className="header__nav-item">
          <a href="https://www.linkedin.com/in/isadora-alves-265064142" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="fab fa-linkedin" style={{fontSize: '22px', color: '#0A66C2'}}></i>
          </a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;