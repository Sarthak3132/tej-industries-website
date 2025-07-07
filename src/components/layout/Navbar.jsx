import React, { useState } from 'react';
import './Navbar.css';
import { translations } from '../../utils/translations';

const Navbar = ({ setCurrentPage, language, setLanguage }) => {
  const t = translations[language] || translations.en;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand" onClick={() => { setCurrentPage('home'); window.scrollTo(0, 0); }} style={{cursor: 'pointer'}}>
          <i className="fas fa-industry logo-icon"></i>
          <h2>{t.logoName}</h2>
        </div>
        
        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <a href="#home" className="navbar-link" onClick={() => { setCurrentPage('home'); closeMenu(); }}>{t.navHome}</a>
          <a href="#about" className="navbar-link" onClick={() => { setCurrentPage('home'); closeMenu(); }}>{t.navAbout}</a>
          <a href="#services" className="navbar-link" onClick={() => { setCurrentPage('home'); closeMenu(); }}>{t.navServices}</a>
          <a href="#reviews" className="navbar-link" onClick={() => { setCurrentPage('home'); closeMenu(); }}>{t.navReviews}</a>
          <a href="#contact" className="navbar-link" onClick={() => { setCurrentPage('home'); closeMenu(); }}>{t.navContact}</a>
          <button 
            className="navbar-lang-toggle"
            onClick={() => setLanguage(language === 'en' ? 'mr' : 'en')}
          >
            {language === 'en' ? 'मराठी' : 'English'}
          </button>
        </div>

        <button className="navbar-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;