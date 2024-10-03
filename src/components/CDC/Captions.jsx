import React, { useState, useEffect } from 'react'; 
import { SliderData } from './CdcSliderData'; // Placeholder for the slider data source
import { FaChevronCircleRight, FaChevronCircleLeft } from 'react-icons/fa'; // Chevron icons for navigation
import './CdcSlider.css'; // Placeholder for slider-specific CSS

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0); // State to track the current slide index
  const length = slides.length; // Total number of slides

  // Function to move to the next slide
  const nextSlide = () => {   
    setCurrent(current === length - 1 ? 0 : current + 1); // Loop back to the first slide if on the last
  };

  // Function to move to the previous slide
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1); // Move to the last slide if on the first
  };

  // Validate that slides is a valid array
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null; // Return nothing if no slides are provided
  }

  // Automatically move to the next slide after 8 seconds
  useEffect(() => {
    const slideInterval = setTimeout(nextSlide, 8000); // Set the timeout for automatic slide change
    return () => clearTimeout(slideInterval); // Cleanup function to clear timeout on component unmount
  }, [current]); // Run effect every time current slide changes

  return (
    <React.Fragment> 
      <section className='slider'>
        {/* Optional: Uncomment below lines to enable manual navigation */}
        {/* 
          <FaChevronCircleLeft className='left-arrow' onClick={prevSlide} />
          <FaChevronCircleRight className='right-arrow' onClick={nextSlide} />
        */}
        
        {/* Loop through the slider data and display the current active slide */}
        {SliderData.map((slide, index) => {
          return (
            <div className="caption" key={index}> {/* Use 'key' for unique identification */}
              <div className={index === current ? 'slide active' : 'slide'}>
                {index === current && (
                  <p className="header">{slide.description}</p> // Display slide description for the current slide
                )}
              </div>
            </div>
          );
        })}
      </section>
    </React.Fragment>
  );
};

export default ImageSlider;
