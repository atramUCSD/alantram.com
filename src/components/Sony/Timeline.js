import React, { useContext } from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';

import './Timeline.scss'
import TimelineCard from './TimelineCard';

import { sonyData } from '../../data/sonyData'
import { sonyTimeline } from '../../data/sonyTimeline'

import libraryWalk from '../../assets/png/education/libraryWalk.jpg'

function Timeline() {

    const { theme } = useContext(ThemeContext);
    return (
        <div className="education" id="resume" style={{backgroundColor: theme.secondary}}>
           
            <div className="education-body">
                <div className="education-description">
                <h1 style={{color:theme.primary}}>Timeline</h1>
                    {sonyTimeline.map(sonyTimeline => (
                        <TimelineCard 
                            key={sonyTimeline.id}
                            id={sonyTimeline.id}
                            title={sonyTimeline.title}
                            description={sonyTimeline.description}
                            week={sonyTimeline.week}
                            img={sonyTimeline.img}
                        />
                    ))}
                </div>
                <div className="timeline-iframe">
                <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTqC0no0Zq1vkazFNwhzn5cFxx0RvceyjPzCRtxl3-Gdo6mRqh1Ymbi2Owa0Z2WOETODLZJPMv2UEnF/pubhtml?widget=true&amp;headers=false"></iframe>
                    {/* <img src={theme.eduimg} alt=""/> */}
                    {/* <img src={libraryWalk} alt=""/> */}
                </div>
            </div>
        </div>
    )
}

export default Timeline
