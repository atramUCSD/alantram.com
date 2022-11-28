import React, { useContext } from 'react';

import './CapsMedia.scss';
import { ThemeContext } from '../../contexts/ThemeContext';
import { aboutData } from '../../data/aboutData';
import capsPainPoints from '../../assets/svg/Presentation.svg'
import designConstraints from '../../assets/svg/Design-Constraints.svg';
import accessibility from '../../assets/svg/Accessibility.svg'
import designChanges from '../../assets/svg/Design-Changes.svg'
import websiteHeader from '../../assets/svg/header.svg'

{/* 
import {sonyData} from '../../data/sonyData';
import sonylogoLight from '../../assets/png/sony/sonylogoLight.png'
import infoSession from '../../assets/png/sony/infoSession.png'
import { info } from 'sass';
import ImageSlider from "./CapsImageSlider";
import { SliderData } from './CapsSliderData';

*/}





function SonyMedia() {

    const { theme } = useContext(ThemeContext);
    return (
        <div className="about" id="about" style={{backgroundColor: theme.secondary}}>
            <div className="line-styling">
              <div className="style-circle" style={{backgroundColor: theme.primary}}></div>
              <div className="style-circle" style={{backgroundColor: theme.primary}}></div>
              <div className="style-line" style={{backgroundColor: theme.primary}}></div>
            </div>
            
            <div className="about-body" style={{textAlign:"left", paddingBottom:"15vh"}}>
                
                <div className="about-description">
                    <h2 style={{color: theme.primary}}> My Journey as a Sony CLP Intern</h2>
                    <p style={{color:theme.tertiary80}}> Being more design and programming minded in my repertoire, the program really let me expand my horizons by 
                    having me ideate and discuss rather than creating. <br/><br/>
                    
                    Though I've learned about Wizard of Oz prototyping and undergoing an extensive design thinking process to circumvent creating poorly directed mockups; 
                    it never really hit me until I had to mock up multiple ideas for this new TV remote. There's no professor or TA giving you in depth prompts with 
                    office hours to provide constant support. I'm glad for the Sony CLP program giving me the chance to simulate an environment where
                    I have to rely on my skills and brief opportunities with my mentor to properly meet deadlines  <br/><br/>


                    </p>
                </div>
                <div className="about-img">
                    {/* Insert Images Here */}
                 </div>
            </div>
            
            <div className="about-body2" style={{textAlign:"right", paddingBottom:"15vh"}}>

            <div class="container2">
            <div className="column-image">
                    <img src= {capsPainPoints} style={{ backgroundColor:"white"}}/>
                 </div>
                
                <div className="about-description">
                    <h2 style={{color: theme.primary}}> My Journey as a Sony CLP Intern</h2>
                    <p style={{color:theme.tertiary80}}> Being more design and programming minded in my repertoire, the program really let me expand my horizons by 
                    having me ideate and discuss rather than creating. <br/><br/>
                    
                    Though I've learned about Wizard of Oz prototyping and undergoing an extensive design thinking process to circumvent creating poorly directed mockups; 
                    it never really hit me until I had to mock up multiple ideas for this new TV remote. There's no professor or TA giving you in depth prompts with 
                    office hours to provide constant support. I'm glad for the Sony CLP program giving me the chance to simulate an environment where
                    I have to rely on my skills and brief opportunities with my mentor to properly meet deadlines  <br/><br/>


                    </p>
                </div>
                </div>
            </div>
            
                <h2 style={{color: theme.primary, textAlign:"center", fontSize: '3rem', marginBottom: '20px', fontFamily:'var(--primaryFont)'}}> Links </h2>
                
                <div class="container">
                    <a href= "https://www.figma.com/proto/wkdVzJM4kxQsZp2AjrGyPS/Sony-CLP?page-id=245%3A1480&node-id=429%3A1477&viewport=591%2C646%2C0.04&scaling=scale-down" target={"blank"}> 
                        <div class="item item--1"> Figma </div>
                    </a>
                    <a href= "https://docs.google.com/presentation/d/1UUlGkBNYeRQN5X7cGvU7_KteP1yDBg9G/edit?usp=sharing&ouid=103983399674632896262&rtpof=true&sd=true" target={"blank"}> 
                        <div class="item item--2"> Presentation</div>
                    </a>
                </div>
        </div>

        

    )
}

export default SonyMedia
