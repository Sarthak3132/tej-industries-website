import React, { useState } from 'react';
import './ServicePage.css';
import { translations } from '../../utils/translations';
import AppointmentModal from '../../components/AppointmentModal';

const ProjectPage = ({ language }) => {
  const t = translations[language] || translations.en;
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="service-page">
      <div className="container">
        <div className="service-header">
          <h1>{t.projectPageTitle}</h1>
          <button className="btn-primary" onClick={() => window.location.href = 'tel:9922100849'}>{t.enquireNow}</button>
          <p className="service-description">
            {t.projectPageDesc}
          </p>
        </div>

        <div className="service-content">
          <div className="projects-grid">
            <div className="project-item">
              <i className="fas fa-cheese"></i>
              <h3>{t.dairyBakery}</h3>
            </div>
            <div className="project-item">
              <i className="fas fa-pepper-hot"></i>
              <h3>{t.spiceManufacturing}</h3>
            </div>
            <div className="project-item">
              <i className="fas fa-seedling"></i>
              <h3>{t.horticulture}</h3>
            </div>
            <div className="project-item">
              <i className="fas fa-apple-alt"></i>
              <h3>{t.fruitPulp}</h3>
            </div>
          </div>

          <h2>{t.benefitsOfChoosingUs}</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <i className="fas fa-cogs"></i>
              <h3>{t.expertiseMultiple}</h3>
            </div>
            <div className="benefit-item">
              <i className="fas fa-dollar-sign"></i>
              <h3>{t.customSolutions}</h3>
            </div>
            <div className="benefit-item">
              <i className="fas fa-certificate"></i>
              <h3>{t.qualityCompliance}</h3>
            </div>
            <div className="benefit-item">
              <i className="fas fa-building"></i>
              <h3>{t.smeSupport}</h3>
            </div>
          </div>

          <div className="service-buttons">
            <button className="btn-secondary">{t.downloadBrochure}</button>
            <button className="btn-primary" onClick={() => setIsModalOpen(true)}>{t.scheduleCall}</button>
          </div>
        </div>
      </div>
      <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default ProjectPage;