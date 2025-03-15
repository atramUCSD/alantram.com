import React, { useContext } from 'react'; // Importing React and useContext hook
import './CdcMedia.scss'; // Placeholder for the styling file
import { ThemeContext } from '../../contexts/ThemeContext'; // Theme context for managing theme colors
import { aboutData } from '../../data/aboutData'; // Placeholder for about data
import { cdcData } from '../../data/cdcData'; // Placeholder for Cdc specific data
import infoSession from '../../assets/png/cdc/infoSession.png'; // Placeholder for session info image
import ImageSlider from "./CdcImageSlider"; // Placeholder for the image slider component
import Captions from "./Captions"; // Placeholder for captions component
import { SliderData } from './CdcSliderData'; // Placeholder for slider data source

function CdcMedia() {
    const { theme } = useContext(ThemeContext); // Getting theme from context

    return (
        <div className="about" id="about" style={{ backgroundColor: theme.secondary }}>
            
            <div className="about-body" style={{ textAlign: "center" }}>
    <div className="about-description">
        <h2 style={{ color: theme.primary }}> Introduction</h2>
        <p style={{ color: theme.tertiary80 }}> 
            As a Senior Web Designer and UI/UX Specialist at General Dynamics Information Technology (GDIT), 
            I played a key role in enhancing the user experience and interface design for government IT solutions. 
            My work focused on developing intuitive, accessible, and scalable UI/UX designs tailored for the FAA UAS 
            project and ServiceNow CRM/ITSM platforms. <br/><br/>
        </p>
    </div>
                <div className="about-img">
                    <ImageSlider slides={SliderData} /> {/* Passing slider data to the image slider */}
                    <Captions slides={SliderData} /> {/* Passing slider data to the captions component */}
                </div>
            </div>
            
            <h2 style={{ color: theme.primary, textAlign: "center", fontSize: '3rem', marginBottom: '20px', fontFamily: 'var(--primaryFont)' }}> Links </h2>
                
            <div className="container"> {/* Placeholder for link container */}
                <a href="https://www.gdit.com/industries/health/publichealth/" target={"_blank"}> 
                    <div className="item item--1"> Figma </div> {/* Placeholder for Figma link */}
                </a>
                <a href="https://docs.google.com/presentation/d/1UUlGkBNYeRQN5X7cGvU7_KteP1yDBg9G/edit?usp=sharing&ouid=103983399674632896262&rtpof=true&sd=true" target={"_blank"}> 
                    <div className="item item--2"> Presentation</div> {/* Placeholder for Presentation link */}
                </a>
            </div>
        </div>
    );
}

export default CdcMedia; // Exporting the component
