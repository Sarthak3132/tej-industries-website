import React, { useEffect, useState } from 'react';
import './LandingPage.css';
import heroImage from '../assets/images/hero-section.webp';
import { translations } from '../utils/translations';
import ImageSlider from '../components/ImageSlider';



const LandingPage = ({ setCurrentPage, language, setLanguage }) => {
  const t = translations[language] || translations.en;
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const handleContactSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const contactData = {
      name: formData.get('name'),
      email: formData.get('email'),
      mobile: formData.get('mobile')
    };
    
    setIsLoading(true);
    try {
      const response = await fetch('https://tejindustries-backend.onrender.com/api/contact/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactData)
      });
      
      if (response.ok) {
        setAlertMessage(t.formSentSuccess);
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 4000);
        e.target.reset();
      } else {
        setAlertMessage(t.formSentError);
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 4000);
      }
    } catch (error) {
      setAlertMessage(t.formSentError);
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 4000);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    let lastScrollY = window.scrollY;
    
    const observerOptions = {
      threshold: 0,
      rootMargin: '0px 0px 100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        } else {
          entry.target.classList.remove('animate-in');
        }
      });
    }, observerOptions);

    const serviceCards = document.querySelectorAll('.service-card');
    const reviewCards = document.querySelectorAll('.review-card');
    const serviceTitle = document.querySelector('.services-title');
    const serviceSubtitle = document.querySelector('.services-subtitle');
    const reviewTitle = document.querySelector('.reviews-title');
    const aboutTitle = document.querySelector('.about-title');
    const contactTitle = document.querySelector('.contact-title');
    
    serviceCards.forEach(card => observer.observe(card));
    reviewCards.forEach(card => observer.observe(card));
    if (serviceTitle) observer.observe(serviceTitle);
    if (serviceSubtitle) observer.observe(serviceSubtitle);
    if (reviewTitle) observer.observe(reviewTitle);
    if (aboutTitle) observer.observe(aboutTitle);
    if (contactTitle) observer.observe(contactTitle);

    return () => observer.disconnect();
  }, []);

  return (
    <main className="landing-page">
      {/* Home/Hero Section */}
      <section className="hero" id="home">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>{t.heroTitle}</h1>
              <p>{t.heroSubtitle}</p>
            </div>
            <div className="hero-image">
              <img src={heroImage} alt="Agriculture Innovation" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="container">
          <h2 className="about-title"><i className="fas fa-leaf"></i> {t.aboutTitle}</h2>
          <div className="about-content">
            <p>{t.aboutText1}</p>
            <p>{t.aboutText2}</p>
            <div className="mission">
              <h3><i className="fas fa-bullseye"></i> {t.missionTitle}</h3>
              <p>"{t.missionText}"</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services" id="services">
        <div className="container">
          <h2 className="services-title"><i className="fas fa-cogs"></i> {t.servicesTitle}</h2>
          <p className="services-subtitle">{t.servicesSubtitle}</p>
          <div className="services-grid">
            <div className="service-card" onClick={() => { setCurrentPage('drone'); window.scrollTo(0, 0); }}>
              <div className="service-icon"><i className="fas fa-helicopter"></i></div>
              <h3>{t.droneTitle}</h3>
              <p>{t.droneDesc}</p>
            </div>
            <div className="service-card" onClick={() => { setCurrentPage('loan'); window.scrollTo(0, 0); }}>
              <div className="service-icon"><i className="fas fa-hand-holding-usd"></i></div>
              <h3>{t.loanTitle}</h3>
              <p>{t.loanDesc}</p>
            </div>
            <div className="service-card" onClick={() => { setCurrentPage('subsidy'); window.scrollTo(0, 0); }}>
              <div className="service-icon"><i className="fas fa-university"></i></div>
              <h3>{t.subsidyTitle}</h3>
              <p>{t.subsidyDesc}</p>
            </div>
            <div className="service-card" onClick={() => { setCurrentPage('ecommerce'); window.scrollTo(0, 0); }}>
              <div className="service-icon"><i className="fas fa-shopping-cart"></i></div>
              <h3>{t.ecommerceTitle}</h3>
              <p>{t.ecommerceDesc}</p>
            </div>
            <div className="service-card" onClick={() => { setCurrentPage('project'); window.scrollTo(0, 0); }}>
              <div className="service-icon"><i className="fas fa-building"></i></div>
              <h3>{t.projectTitle}</h3>
              <p>{t.projectDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="reviews" id="reviews">
        <div className="container">
          <h2 className="reviews-title"><i className="fas fa-star"></i> {t.reviewsTitle}</h2>
          <div className="reviews-grid">
            <div className="review-card">
              <div className="reviewer-info">
                <div className="reviewer-avatar"><i className="fas fa-user"></i></div>
                <div className="reviewer-details">
                  <h4>{t.reviewerName1}</h4>
                  <span>{t.reviewerRole1}</span>
                </div>
              </div>
              <p>"{t.reviewText1}"</p>
            </div>
            <div className="review-card">
              <div className="reviewer-info">
                <div className="reviewer-avatar"><i className="fas fa-user-tie"></i></div>
                <div className="reviewer-details">
                  <h4>{t.reviewerName2}</h4>
                  <span>{t.reviewerRole2}</span>
                </div>
              </div>
              <p>"{t.reviewText2}"</p>
            </div>
            <div className="review-card">
              <div className="reviewer-info">
                <div className="reviewer-avatar"><i className="fas fa-briefcase"></i></div>
                <div className="reviewer-details">
                  <h4>{t.reviewerName3}</h4>
                  <span>{t.reviewerRole3}</span>
                </div>
              </div>
              <p>"{t.reviewText3}"</p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Slider Section */}
      <ImageSlider />

      {/* Contact Section */}
      <section className="contact" id="contact">
        <div className="container">
          <h2 className="contact-title"><i className="fas fa-envelope"></i> {t.contactTitle}</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>{t.getInTouch}</h3>
              <p>{t.contactDesc}</p>
              <div className="contact-details">
                <p><i className="fas fa-envelope"></i> info@tejindustries.com</p>
                <p><i className="fas fa-phone"></i> +91 98765 43210</p>
                <p><i className="fas fa-map-marker-alt"></i> {t.address}</p>
              </div>
            </div>
            <form className={`contact-form ${isLoading ? 'loading' : ''}`} onSubmit={handleContactSubmit}>
              <input type="text" name="name" placeholder={t.yourName} required />
              <input type="email" name="email" placeholder={t.yourEmail} required />
              <input type="tel" name="mobile" placeholder={t.mobileNumber} required />
              <button type="submit" className="btn-primary" disabled={isLoading}>
                {isLoading ? t.loading : (t.sendMessage || 'Send Message')}
              </button>
              {showAlert && (
                <div className={`form-message ${alertMessage.includes('successfully') || alertMessage.includes('यशस्वीपणे') ? 'success' : 'error'}`}>
                  {alertMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

    </main>
  );
};

export default LandingPage;