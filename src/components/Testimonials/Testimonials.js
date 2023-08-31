import React, { useContext, useRef } from 'react';
import Slider from 'react-slick';
import { FaQuoteLeft, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { ThemeContext } from '../../contexts/ThemeContext';
import { testimonialsData } from '../../data/testimonialsData';
import './Testimonials.css';

function Testimonials() {
    const { theme } = useContext(ThemeContext);
    const sliderRef = useRef();

    const settings = {
        dots: true,
        infinite: true,
        speed: 800, // Adjust the speed for smoother sliding
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000, // Set a longer interval for autoplay
        pauseOnHover: true, // Pause autoplay on hover
        pauseOnDotsHover: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const gotoNext = () => {
        sliderRef.current.slickNext();
    };

    const gotoPrev = () => {
        sliderRef.current.slickPrev();
    };

    return (
        <>
            {testimonialsData.length > 0 && (
                <div className='testimonials' style={{ backgroundColor: theme.secondary }}>
                    <div className='testimonials--header'>
                        <h1 style={{ color: theme.primary }}>Portfolio Evolution</h1>
                    </div>
                    <div className='testimonials--body'>
                        <div className='testimonials--slider' style={{ backgroundColor: theme.secondary }}>
                            <Slider {...settings} ref={sliderRef}>
                                {testimonialsData.map((test) => (
                                    <div key={test.id}>
                                        <div style={{ backgroundColor: theme.primary }}>
                                            <img
                                                style={{
                                                    width: '100%',
                                                    height: '50%',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    border: '3px solid black',
                                                }}
                                                src={test.image}
                                                alt={test.name}
                                            />
                                        </div>
                                        <div
                                            className='review--content'
                                            style={{
                                                backgroundColor: theme.primary,
                                                color: theme.tertiary,
                                            }}
                                        >
                                            <h1>{test.name}</h1>
                                            <h4>{test.title}</h4>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                            <button
                                className='prevBtn'
                                onClick={gotoPrev}
                                style={{ backgroundColor: theme.primary }}
                            >
                                <FaArrowLeft
                                    style={{ color: theme.secondary}}
                                    aria-label='Previous testimonial'
                                />
                            </button>
                            <button
                                className='nextBtn'
                                onClick={gotoNext}
                                style={{ backgroundColor: theme.primary }}
                            >
                                <FaArrowRight
                                    style={{ color: theme.secondary }}
                                    aria-label='Next testimonial'
                                />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Testimonials;
