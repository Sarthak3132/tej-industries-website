import React, { useState, useEffect, useRef } from 'react';
import './ImageSlider.css';
import image1 from '../assets/images/image1.webp';
import image2 from '../assets/images/image2.webp';
import image3 from '../assets/images/image3.webp';
import image4 from '../assets/images/image4.webp';
import image5 from '../assets/images/image5.webp';
import image6 from '../assets/images/image6.webp';
import image7 from '../assets/images/image7.webp';

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sliderRef = useRef(null);
  
  const images = [image3, image1, image2, image4, image5, image6, image7];
  
  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sliderRef.current) {
      observer.observe(sliderRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isVisible, images.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!isVisible) {
    return (
      <section className="image-slider-section" ref={sliderRef}>
        <div className="container">
          <div className="slider-container">
            <div className="slider-placeholder">
              <div className="loading-spinner"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  return (
    <section className="image-slider-section" ref={sliderRef}>
      <div className="container">
        <div className="slider-container">
          <button className="slider-btn prev" onClick={prevSlide}>
            <i className="fas fa-chevron-left"></i>
          </button>
          
          <div className="slider-wrapper">
            {images.map((image, index) => (
              <div
                key={index}
                className={`slide ${index === currentSlide ? 'active' : ''}`}
                style={{ backgroundImage: `url(${image})` }}
              />
            ))}
          </div>
          
          <button className="slider-btn next" onClick={nextSlide}>
            <i className="fas fa-chevron-right"></i>
          </button>
          
          <div className="slider-dots">
            {images.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;