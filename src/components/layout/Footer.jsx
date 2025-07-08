import React from 'react';
import './Footer.css';
import { translations } from '../../utils/translations';

const Footer = ({ setCurrentPage, language }) => {
  const t = translations[language] || translations.en;
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <i className="fas fa-industry logo-icon"></i>
              <h3>{t.logoName}</h3>
              <p>{t.footerDesc}</p>
            </div>
          </div>
          
          
          <div className="footer-section">
            <h4>{t.ourServices}</h4>
            <ul>
              <li><a href="#" onClick={() => { setCurrentPage('drone'); window.scrollTo(0, 0); }}><i className="fas fa-helicopter"></i> {t.droneServiceNav}</a></li>
              <li><a href="#" onClick={() => { setCurrentPage('loan'); window.scrollTo(0, 0); }}><i className="fas fa-hand-holding-usd"></i> {t.loanServiceNav}</a></li>
              <li><a href="#" onClick={() => { setCurrentPage('subsidy'); window.scrollTo(0, 0); }}><i className="fas fa-university"></i> {t.subsidyServiceNav}</a></li>
              <li><a href="#" onClick={() => { setCurrentPage('ecommerce'); window.scrollTo(0, 0); }}><i className="fas fa-shopping-cart"></i> {t.ecommerceServiceNav}</a></li>
              <li><a href="#" onClick={() => { setCurrentPage('project'); window.scrollTo(0, 0); }}><i className="fas fa-building"></i> {t.projectServiceNav}</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>{t.socialMedia}</h4>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} {t.logoName}. {t.allRightsReserved}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;