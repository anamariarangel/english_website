import React, { useState } from 'react';
import logoImage from '../../assets/images/coruja-vetor.png';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="header">
      <div className="header__logo">
        <img src={logoImage} width="50" height="50" alt="Professora Isa Logo" />
      </div>

      <div className="header__nav-wrap">
        <nav className={`header__nav ${openMenu ? 'header__nav--open' : ''}`}>
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
          </ul>
        </nav>

        <nav className="header__nav-social">
          <ul className="header__nav-social-list">
            <li className="header__nav-social-item">
              <a href="https://wa.me/5518991544704" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <i className="fab fa-whatsapp" style={{ fontSize: '22px', color: '#25D366' }}></i>
              </a>
            </li>
            <li className="header__nav-social-item">
              <a href="https://www.linkedin.com/in/isadora-alves-265064142" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin" style={{ fontSize: '22px', color: '#0A66C2' }}></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {!openMenu ? (
        <i
          className="fas fa-bars header__menu-mobile"
          onClick={() => setOpenMenu(true)}
          aria-label="Open menu"
          role="button"
          tabIndex={0}
          onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && setOpenMenu(true)}
        />
      ) : (
        <i
          className="fas fa-times header__menu-mobile"
          onClick={() => setOpenMenu(false)}
          aria-label="Close menu"
          role="button"
          tabIndex={0}
          onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && setOpenMenu(false)}
        />
      )}
    </header>
  );
};

export default Header;
