import React, { useContext } from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';

import './Timeline.scss'
import TimelineCard from './TimelineCard';

import { caps_redesignData } from '../../data/caps_redesignData'
import { caps_redesignTimeline } from '../../data/caps_redesignTimeline'

import libraryWalk from '../../assets/png/education/libraryWalk.jpg'

import CapsImageSlider from "./CapsImageSlider";
import { SliderData } from './CapsSliderData';

function CapsTimeline() {

    const { theme } = useContext(ThemeContext);
    return (
        <div className="education" id="resume" style={{backgroundColor: theme.secondary}}>
           
            <div className="education-body">
                <div className="education-description">
                <h1 style={{color:theme.primary}}>Timeline</h1>
                    {caps_redesignTimeline.map(caps_redesignTimeline => (
                        <TimelineCard 
                            key={caps_redesignTimeline.id}
                            id={caps_redesignTimeline.id}
                            title={caps_redesignTimeline.title}
                            description={caps_redesignTimeline.description}
                            week={caps_redesignTimeline.week}
                            img={caps_redesignTimeline.img}
                        />
                    ))}
                </div>
                <div className="timeline-iframe">
                {/* <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTqC0no0Zq1vkazFNwhzn5cFxx0RvceyjPzCRtxl3-Gdo6mRqh1Ymbi2Owa0Z2WOETODLZJPMv2UEnF/pubhtml?widget=true&amp;headers=false"></iframe> */}
                    {/* <img src={theme.eduimg} alt=""/> */}
                    <div className="experience-image">
                    <CapsImageSlider slides={SliderData}/>
                 </div>
                </div>
            </div>
        </div>
    )
}

export default CapsTimeline
