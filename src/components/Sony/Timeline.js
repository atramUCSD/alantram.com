import React, { useContext } from 'react';
import GanttChart from '../../assets/png/cdc/GanttChart.png'; // Placeholder for Gantt Chart image

import { ThemeContext } from '../../contexts/ThemeContext';

import './Timeline.scss';
import TimelineCard from './TimelineCard';

import { cdcData } from '../../data/cdcData'; // Placeholder for Cdc data import
import { cdcTimeline } from '../../data/cdcTimeline'; // Placeholder for Cdc timeline import

import libraryWalk from '../../assets/png/education/libraryWalk.jpg'; // Placeholder for library walk image

function Timeline() {
    const { theme } = useContext(ThemeContext);

    return (
        <div className="education" id="resume" style={{ backgroundColor: theme.secondary }}>
            <div className="education-body">
                <div className="education-description">
                    <h1 style={{ color: theme.primary }}>Timeline</h1>
                    {cdcTimeline.map(timelineItem => (
                        <TimelineCard
                            key={timelineItem.id}
                            id={timelineItem.id}
                            title={timelineItem.title}
                            description={timelineItem.description}
                            week={timelineItem.week}
                            img={timelineItem.img}
                        />
                    ))}
                </div>
                <div className="timeline-iframe">
                    <img src={GanttChart} alt="Gantt Chart" />
                    {/* Uncomment the iframe to include Google Sheets chart
                    <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTqC0no0Zq1vkazFNwhzn5cFxx0RvceyjPzCRtxl3-Gdo6mRqh1Ymbi2Owa0Z2WOETODLZJPMv2UEnF/pubhtml?widget=true&amp;headers=false"></iframe>
                    */}
                    {/* <img src={theme.eduimg} alt="Education image" /> */}
                    {/* <img src={libraryWalk} alt="Library walk" /> */}
                </div>
            </div>
        </div>
    );
}

export default Timeline;
