import React, { useState } from 'react';
import './ServicePage.css';
import { translations } from '../../utils/translations';
import AppointmentModal from '../../components/AppointmentModal';

const DronePage = ({ language }) => {
  const t = translations[language] || translations.en;
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="service-page">
      <div className="container">
        <div className="service-header">
          <h1>{t.dronePageTitle}</h1>
          <button className="btn-primary" onClick={() => window.location.href = 'tel:+919922100849'}>{t.enquireNow}</button>
          <p className="service-description">
            {t.dronePageDesc}
          </p>
        </div>

        <div className="service-content">
          <h2>{t.offerings}</h2>
          <div className="offerings-grid">
            <div className="offering-item">
              <i className="fas fa-helicopter"></i>
              <h3>{t.droneSales}</h3>
            </div>
            <div className="offering-item">
              <i className="fas fa-tools"></i>
              <h3>{t.repairMaintenance}</h3>
            </div>
            <div className="offering-item">
              <i className="fas fa-calendar-alt"></i>
              <h3>{t.rentalService}</h3>
            </div>
            <div className="offering-item">
              <i className="fas fa-mobile-alt"></i>
              <h3>{t.appSupport}</h3>
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

export default DronePage;