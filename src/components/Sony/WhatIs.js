import React, { useContext } from 'react';

import './WhatIs.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { aboutData } from '../../data/aboutData';
import {sonyData} from '../../data/sonyData';
import sonylogoLight from '../../assets/png/sony/sonylogoLight.png'
import infoSession from '../../assets/png/sony/infoSession.png'
import { info } from 'sass';



function WhatIs() {

    const { theme } = useContext(ThemeContext);
    return (
        <div className="about" id="about" style={{backgroundColor: theme.secondary}}>
            <div className="line-styling">
              <div className="style-circle" style={{backgroundColor: theme.primary}}></div>
              <div className="style-circle" style={{backgroundColor: theme.primary}}></div>
              <div className="style-line" style={{backgroundColor: theme.primary}}></div>
            </div>
            
            <div className="about-body" style={{textAlign:"center"}}>
                
                <div className="about-description">
                    <h2 style={{color: theme.primary}}> Sony Pathways Casestudy</h2>
                    <p style={{color:theme.tertiary80}}> The Sony Connected Learning Pathways Program (SONY CLP), designed to introduce students to the ideas of design thinking through hands-on experiences and 
                    collaborative work with students from a variety of academic disciplines, backgrounds, and perspectives. 
                    This program is ideal for students who want to learn about design thinking and are looking to get real-world 
                    experience working with industry mentors. <br/><br/>

                    My experience with the SONY CLP program was a great opportunity to learn about the design thinking process and how to optimally meet industry deadlines 
                    when working with a design team. I was able to work with a team of 3 other students to mock a prototype for a new TV remote that would be seen by Sony employees.


                    </p>
                </div>
                <div className="about-img">
                    <img style = {{width: '30vw'}}
                        src={sonylogoLight}
                        alt="" 
                    />
                </div>
            </div>
        </div>

    )
}

export default WhatIs
