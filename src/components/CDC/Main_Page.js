import React, { useContext } from 'react';
import './MainPage.scss';
import { ThemeContext } from '../../contexts/ThemeContext';
import CdcLogoText from '../../assets/png/cdc/CDC-Logo-Text-2024.png';
import GanttChart from '../../assets/png/sony/GanttChart.png';
import TimelineCard from './TimelineCard';
import CdcSkills from './CdcSkills'; // Import CdcSkills

// Define cdcTimeline with imported images
const cdcTimeline = [
    {
        id: 1,
        title: "Project Kickoff",
        description: "Initial planning and team alignment.",
        week: "Week 1",
        img: CdcLogoText,
    },
    {
        id: 2,
        title: "User Research",
        description: "Conducted interviews and usability tests.",
        week: "Week 2",
        img: CdcLogoText,
    },
    {
        id: 3,
        title: "Prototype Development",
        description: "First iteration of the internal tool completed.",
        week: "Week 3",
        img: CdcLogoText,
    }
];

function MainPage() {
    const { theme } = useContext(ThemeContext);

    return (
        <div>
            {/* About Section */}
            <div className="about" id="about" style={{ backgroundColor: theme.secondary }}>
                <div className="line-styling">
                    <div className="style-circle" style={{ backgroundColor: theme.primary }}></div>
                    <div className="style-circle" style={{ backgroundColor: theme.primary }}></div>
                    <div className="style-line" style={{ backgroundColor: theme.primary }}></div>
                </div>
                <div className="about-body" style={{ textAlign: "center" }}>
                    <div className="about-description">
                        <h2 style={{ color: theme.primary }}>GDIT x CDC Case Study: Solving IT Challenges with Human-Centered Design</h2>
                        <p style={{ color: theme.tertiary80 }}>
                            I joined the CDC Contract project through GDIT for my expertise in web development, design, and UX, focusing on Customer Success Journey Mapping and Usability Testing.
                            I rapidly prototyped web solutions, conducted user research, and refined designs to align with business requirements.
                            In a fast-paced agile environment, I collaborated across teams to enhance user experience and meet client needs.
                        </p>
                    </div>
                    <div className="about-img">
                        <img style={{ width: '30vw' }} src={CdcLogoText} alt="CDC Logo" />
                    </div>
                </div>
            </div>

            {/* Timeline Section */}
            <div className="education" id="resume" style={{ backgroundColor: theme.secondary }}>
                <div className="education-body">
                    <div className="education-description">
                        <h1 style={{ color: theme.primary }}>Timeline</h1>
                        <div className="timeline-section">
                            {cdcTimeline.map((item) => (
                                <div key={item.id} className="timeline-card">
                                    <TimelineCard
                                        id={item.id}
                                        title={item.title}
                                        description={item.description}
                                        week={item.week}
                                        img={item.img}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="timeline-iframe">
                        <img src={GanttChart} alt="Gantt Chart" />
                    </div>
                </div>
            </div>

            {/* Skills Section */}
            <CdcSkills /> {/* Add this component wherever it makes sense in the layout */}

        </div>
    );
}

export default MainPage;
