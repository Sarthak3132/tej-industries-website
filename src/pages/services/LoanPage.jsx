import React, { useState } from 'react';
import './ServicePage.css';
import { translations } from '../../utils/translations';
import AppointmentModal from '../../components/AppointmentModal';

const LoanPage = ({ language }) => {
  const t = translations[language] || translations.en;
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="service-page">
      <div className="container">
        <div className="service-header">
          <h1>{t.loanPageTitle}</h1>
          <button className="btn-primary" onClick={() => window.location.href = 'tel:+919922100849'}>{t.getConsultation}</button>
          <p className="service-description">
            {t.loanPageDesc}
          </p>
        </div>

        <div className="service-content">
          <h2>{t.howItWorks}</h2>
          <div className="steps-grid">
            <div className="step-item">
              <div className="step-number">1</div>
              <h3>{t.step1}</h3>
            </div>
            <div className="step-item">
              <div className="step-number">2</div>
              <h3>{t.step2}</h3>
            </div>
            <div className="step-item">
              <div className="step-number">3</div>
              <h3>{t.step3}</h3>
            </div>
            <div className="step-item">
              <div className="step-number">4</div>
              <h3>{t.step4}</h3>
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

export default LoanPage;