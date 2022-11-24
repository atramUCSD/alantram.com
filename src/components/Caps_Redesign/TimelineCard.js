import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';

import { ThemeContext } from '../../contexts/ThemeContext';

import eduImgWhite from '../../assets/svg/education/eduImgWhite.svg'
import eduImgBlack from '../../assets/svg/education/eduImgBlack.svg'

import One from '../../assets/png/sony/One.png'
import Two from '../../assets/png/sony/Two.png'
import Three from '../../assets/png/sony/Three.png'
import Four from '../../assets/png/sony/Four.png'

import ucsdIcon from '../../assets/svg/education/ucsdIcon.svg'
import { sonyTimeline } from '../../data/sonyTimeline'
import './Timeline'



function TimelineCard({ id, description, title, week, img}){

    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        educationCard : {
            backgroundColor:theme.primary30,
            "&:hover": {
                backgroundColor:theme.primary50,
            },
        },
    }));

    const classes = useStyles();

    return (
        <Fade bottom>
            <div key={sonyTimeline.id} className={`education-card ${classes.educationCard}`} >
                <div className="educard-img" style={{backgroundColor: theme.primary}}>
                    {/* <img src={theme.type === 'light' ? eduImgBlack : eduImgWhite} alt="" /> */}
                    <img src={img} alt="" />
                </div>
                <div className="education-details">
                    <h6 style={{color: theme.primary}}>{week}</h6>
                    <h4 style={{color: theme.tertiary}}>{title}</h4>
                    <h5 style={{color: theme.tertiary80}}>{description}</h5>
                </div>
            </div>
        </Fade>        
    )
}

export default TimelineCard
