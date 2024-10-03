import React, { useState, useEffect } from 'react'; 
import { SliderData } from './CdcSliderData'; // Placeholder for the slider data source
import { FaChevronCircleRight, FaChevronCircleLeft } from 'react-icons/fa'; // Chevron icons for navigation
import './CdcSlider.css'; // Placeholder for slider-specific CSS

const CdcImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0); // Manage the index of the currently active slide
  const length = slides.length; // Total number of slides
  let slideInterval;

  // Function to move to the next slide
  const nextSlide = () => {   
    setCurrent(current === length - 1 ? 0 : current + 1); // If on the last slide, loop back to the first
  };

  // Function to move to the previous slide
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1); // If on the first slide, move to the last
  };

  // Ensure slides is a valid array
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null; // If no slides are provided, return nothing
  }

  // Automatically move to the next slide after 8 seconds
  useEffect(() => {
    slideInterval = setTimeout(nextSlide, 8000);
    return () => clearTimeout(slideInterval); // Clear the timeout on component unmount
  }, [current]); // Reset timeout each time the current slide changes

  return (
    <section className='slider'>
      {/* Optional: Uncomment the below lines to enable manual slide navigation */}
      {/* 
        <FaChevronCircleLeft className='left-arrow' onClick={prevSlide} />
        <FaChevronCircleRight className='right-arrow' onClick={nextSlide} />
      */}
      
      {/* Loop through the slider data and display the current active slide */}
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}>
            {index === current && (
              <img id="slide-element" src={slide.image} alt='slide' className='image' /> 
              // Placeholder for slide image, can replace 'slide.image' with actual image path
            )}
          </div>
        );
      })}
    </section>
  );
};

export default CdcImageSlider;
