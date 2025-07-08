import React, { useState } from 'react';
import './ServicePage.css';
import { translations } from '../../utils/translations';
import AppointmentModal from '../../components/AppointmentModal';

const EcommercePage = ({ language }) => {
  const t = translations[language] || translations.en;
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="service-page">
      <div className="container">
        <div className="service-header">
          <h1>{t.ecommercePageTitle}</h1>
          <button className="btn-primary" onClick={() => window.location.href = 'tel:+919922100849'}>{t.enquireNow}</button>
          <p className="service-description">
            {t.ecommercePageDesc}
          </p>
        </div>

        <div className="service-content">
          <h2>{t.benefitsOfChoosingUs}</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <i className="fas fa-boxes"></i>
              <h3>{t.wideFMCG}</h3>
            </div>
            <div className="benefit-item">
              <i className="fas fa-shipping-fast"></i>
              <h3>{t.reliableDelivery}</h3>
            </div>
            <div className="benefit-item">
              <i className="fas fa-tag"></i>
              <h3>{t.competitivePricing}</h3>
            </div>
            <div className="benefit-item">
              <i className="fas fa-handshake"></i>
              <h3>{t.trustedNetwork}</h3>
            </div>
          </div>

          <div className="service-buttons">
            <button className="btn-secondary">{t.downloadBrochure}</button>
            <button className="btn-primary" onClick={() => setIsModalOpen(true)}>{t.scheduleCall}</button>
          </div>
        </div>
      </div>
      <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} language={language} />
    </div>
  );
};

export default EcommercePage;