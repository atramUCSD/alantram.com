import React, { useState } from 'react';
import { SliderData } from './SonySliderData';
import {FaChevronCircleRight, FaChevronCircleLeft } from 'react-icons/fa';
import './SonySlider.css';



const SonyImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  var i = 0;

  const nextSlide = () => {   
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  var myVar = setTimeout(function(){ nextSlide() }, 8000);

  return (
    <React.Fragment> 
    <section className='slider'>
      {/*
      <FaChevronCircleLeft className='left-arrow' onClick={prevSlide} />
      <FaChevronCircleRight className='right-arrow' onClick={nextSlide} />
  */}
      {SliderData.map((slide, index) => {
        return (
          <div>
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}>
            {index === current && (
              <img id = "slide-element" src={slide.image} alt='test' className='image' />
            )}
          </div>
          </div>
        );
      })}
    </section>
    </React.Fragment>
  );
};

export default SonyImageSlider;