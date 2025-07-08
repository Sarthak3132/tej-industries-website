import React, { useState, useEffect } from 'react';
import './ImageSlider.css';
import image1 from '../assets/images/image_1.jpeg';
import image2 from '../assets/images/image_2.jpeg';
import image3 from '../assets/images/image_3.jpeg';
import image4 from '../assets/images/image_4.jpeg';
import image5 from '../assets/images/image_5.jpeg';
import image6 from '../assets/images/image_6.jpeg';
import image7 from '../assets/images/image_7.jpeg';

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const images = [image3, image4, image5, image6, image7, image1, image2];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="image-slider-section">
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