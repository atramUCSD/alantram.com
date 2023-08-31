import React, { useContext } from 'react';

import './WhatIs.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { aboutData } from '../../data/aboutData'
import {caps_redesignData} from '../../data/caps_redesignData'



function CapsWhatIs() {

    const { theme } = useContext(ThemeContext);
    return (
        <div className="about" id="about" style={{backgroundColor: theme.secondary}}>
            <div className="line-styling">
              <div className="style-circle" style={{backgroundColor: theme.primary}}></div>
              <div className="style-circle" style={{backgroundColor: theme.primary}}></div>
              <div className="style-line" style={{backgroundColor: theme.primary}}></div>
            </div>
            
            <div className="about-body">
                <div className="about-description">
                    <h2 style={{color: theme.primary}}>{caps_redesignData.title}</h2>
                    
                    <dd> Who is our Stakeholder and What are their goals  </dd> 
                    <dl> Students consult with CAPS about a variety of more specific personal, academic and relationship problems. No problem or concern is too big or small. </dl> 
                    <dl> CAPS is committed to promoting student mental health and well-being at an individual and organizational level, as well as the preservation and sustainability of an environment conducive to growth and lifelong learning. </dl>

                    <ul>    
                    <dd> How do we help them achieve their goals? </dd>
                        <dl> - Eliminating poorly implemented points of contact   </dl>
                        <dl> - Important information being hidden at the end of lengthy pages </dl>
                        <dl> - Lowering the amount of clicks needed to reach one's destination</dl>
                        <dl> - Improving intuitiveness of drop downs, menus, hyperlinks, etc.</dl>
                    </ul>

                   {/* <p style={{color:theme.tertiary80}}>{caps_redesignData.description1}<br/><br/>{caps_redesignData.description2}</p> */} 

                </div>
                <div className="about-img">
                    <img 
                        src={aboutData.image === 1 ? theme.aboutimg1 : theme.aboutimg2}  
                        alt="" 
                    />
                </div>
            </div>
        </div>

    )
}

export default CapsWhatIs
