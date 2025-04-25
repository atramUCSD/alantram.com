import React, { useContext } from 'react';
import Marquee from "react-fast-marquee";

import './MainPage.scss';

import { ThemeContext } from '../../contexts/ThemeContext';
import { cdcSkillsData } from '../../data/cdcskillsData';
import { skillsImage } from '../../utils/skillsImage';

function CdcSkills() {
    const { theme } = useContext(ThemeContext);

    const skillBoxStyle = {
        backgroundColor: theme.secondary,
        boxShadow: `0px 0px 30px ${theme.primary30}`
    };

    return (
        <div className="skills" style={{ backgroundColor: theme.secondary}}>
            <div className="skillsContainer">
                <div className="skill--scroll">
                    <Marquee
                        gradient={false}
                        speed={100}
                        pauseOnHover={true}
                        pauseOnClick={true}
                        delay={0}
                        play={true}
                        direction="left"
                    >
                        {cdcSkillsData.map((skill, id) => (
                            <div className="skill--box" key={id} style={skillBoxStyle}>
                                <img src={skillsImage(skill)} alt={skill} />
                                <h3 style={{ color: theme.tertiary }}>
                                    {skill}
                                </h3>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </div>
    );
}

export default CdcSkills;
