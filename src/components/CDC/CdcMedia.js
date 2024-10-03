import React, { useContext } from 'react'; // Importing React and useContext hook
import './CdcMedia.scss'; // Placeholder for the styling file
import { ThemeContext } from '../../contexts/ThemeContext'; // Theme context for managing theme colors
import { aboutData } from '../../data/aboutData'; // Placeholder for about data
import { cdcData } from '../../data/cdcData'; // Placeholder for Cdc specific data
import cdcLogoLight from '../../assets/png/cdc/cdcLogoLight.png'; // Placeholder for logo
import infoSession from '../../assets/png/cdc/infoSession.png'; // Placeholder for session info image
import ImageSlider from "./CdcImageSlider"; // Placeholder for the image slider component
import Captions from "./Captions"; // Placeholder for captions component
import { SliderData } from './CdcSliderData'; // Placeholder for slider data source

function CdcMedia() {
    const { theme } = useContext(ThemeContext); // Getting theme from context

    return (
        <div className="about" id="about" style={{ backgroundColor: theme.secondary }}>
            <div className="line-styling">
                <div className="style-circle" style={{ backgroundColor: theme.primary }}></div>
                <div className="style-circle" style={{ backgroundColor: theme.primary }}></div>
                <div className="style-line" style={{ backgroundColor: theme.primary }}></div>
            </div>
            
            <div className="about-body" style={{ textAlign: "center" }}>
                <div className="about-description">
                    <h2 style={{ color: theme.primary }}> My Journey as a Cdc CLP Intern</h2>
                    <p style={{ color: theme.tertiary80 }}> 
                        Being more design and programming minded in my repertoire, the program really let me expand my horizons by 
                        having me ideate and discuss rather than creating. <br/><br/>
                        
                        Though I've learned about Wizard of Oz prototyping and undergoing an extensive design thinking process to circumvent creating poorly directed mockups; 
                        it never really hit me until I had to mock up multiple ideas for this new TV remote. There's no professor or TA giving you in-depth prompts with 
                        office hours to provide constant support. I'm glad for the Cdc CLP program giving me the chance to simulate an environment where
                        I have to rely on my skills and brief opportunities with my mentor to properly meet deadlines. <br/><br/>
                    </p>
                </div>
                <div className="about-img">
                    <ImageSlider slides={SliderData} /> {/* Passing slider data to the image slider */}
                    <Captions slides={SliderData} /> {/* Passing slider data to the captions component */}
                </div>
            </div>
            
            <h2 style={{ color: theme.primary, textAlign: "center", fontSize: '3rem', marginBottom: '20px', fontFamily: 'var(--primaryFont)' }}> Links </h2>
                
            <div className="container"> {/* Placeholder for link container */}
                <a href="https://www.figma.com/proto/wkdVzJM4kxQsZp2AjrGyPS/Cdc?page-id=245%3A1480&node-id=429%3A1477&viewport=591%2C646%2C0.04&scaling=scale-down" target={"_blank"}> 
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
