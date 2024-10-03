import React, { useContext } from 'react';

import './WhatIs.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { aboutData } from '../../data/aboutData';
import { cdcData } from '../../data/cdcData'; // Changed to Cdc data import
import cdclogoLight from '../../assets/png/cdc/cdclogoLight.png'; // Changed to Cdc logo asset
import infoSession from '../../assets/png/cdc/infoSession.png'; // Changed to Cdc asset
import { info } from 'sass'; // This import seems unused; consider removing it.

function WhatIs() {
    const { theme } = useContext(ThemeContext);
    return (
        <div className="about" id="about" style={{ backgroundColor: theme.secondary }}>
            <div className="line-styling">
                <div className="style-circle" style={{ backgroundColor: theme.primary }}></div>
                <div className="style-circle" style={{ backgroundColor: theme.primary }}></div>
                <div className="style-line" style={{ backgroundColor: theme.primary }}></div>
            </div>

            <div className="about-body" style={{ textAlign: "center" }}>
                <div className="about-description">
                    <h2 style={{ color: theme.primary }}>Cdc Pathways Casestudy</h2> {/* Changed title */}
                    <p style={{ color: theme.tertiary80 }}>
                        The Cdc Connected Learning Pathways Program (CDC CLP), designed to introduce students to the ideas of design thinking through hands-on experiences and
                        collaborative work with students from a variety of academic disciplines, backgrounds, and perspectives.
                        This program is ideal for students who want to learn about design thinking and are looking to get real-world
                        experience working with industry mentors. <br /><br />

                        My experience with the CDC CLP program was a great opportunity to learn about the design thinking process and how to optimally meet industry deadlines
                        when working with a design team. I was able to work with a team of 3 other students to mock a prototype for a new TV remote that would be seen by Cdc employees.
                    </p>
                </div>
                <div className="about-img">
                    <img style={{ width: '30vw' }}
                        src={cdclogoLight} // Changed to Cdc logo
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
}

export default WhatIs;
