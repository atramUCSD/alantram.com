// CdcImageSlider.jsx
import React, { useState } from 'react';
import { SliderData } from './CdcSliderData';
import { FaChevronCircleRight, FaChevronCircleLeft } from 'react-icons/fa';
import './CdcSlider.css';

const CdcImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || length <= 0) return null;

  return (
    <section className="slider">
      <FaChevronCircleLeft className="left-arrow" onClick={prevSlide} />
      
      {slides.map((slide, index) => (
        <div
          className={index === current ? 'slide active' : 'slide'}
          key={index}
        >
          {index === current && (
            <div className="slide-content">
              <img
                id="cdc-slide-element"
                src={slide.image}
                alt={slide.description || 'slide image'}
                draggable={false}
              />
              <p className="slide-description">{slide.description}</p>
            </div>
          )}
        </div>
      ))}

      <FaChevronCircleRight className="right-arrow" onClick={nextSlide} />
    </section>
  );
};

export default CdcImageSlider;
