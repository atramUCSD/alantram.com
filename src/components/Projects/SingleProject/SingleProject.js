import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FaPlay, FaCode, FaReadme } from 'react-icons/fa';
import Fade from 'react-reveal/Fade';

import { Link } from 'react-router-dom'

import placeholder from '../../../assets/png/placeholder.png';
import CAPSThumbnail from '../../../assets/png/CAPS-Thumbnail.png';
import ReCODEThumbnail from '../../../assets/png/ReCODE-Thumbnail.png';
import sonyThumbnail from '../../../assets/png/sony/Sony-logo.png';

import './SingleProject.css';

function SingleProject({ id, name, desc, tags, code, casestudy, demo, image, theme }) {

    function nullCode(){
        if(code === null){
            return;
        } else {
            return (
                <a
                href={code}
                target='_blank'
                rel='noreferrer'
                className={classes.iconBtn}
                aria-labelledby={`${name
                    .replace(' ', '-')
                    .toLowerCase()} ${name
                    .replace(' ', '-')
                    .toLowerCase()}-code`}>
                    <FaCode
                        id={`${name.replace(' ', '-').toLowerCase()}-code`}className={classes.icon}aria-label='Code'
                    />
                </a>
            )
        }
    }

    function nullCasestudy(){
        if(casestudy === null){
            return;
        } else if(casestudy == '/Sony'){
            return (
                <Link to = {casestudy} className={classes.iconBtn}>
                    <FaReadme
                        id={`${name.replace(' ', '-').toLowerCase()}-readme`}className={classes.icon}aria-label='Readme'
                    />
                </Link>
            )
        }
        else {
            return (
                <a
                href={casestudy}
                target='_blank'
                rel='noreferrer'
                className={classes.iconBtn}
                aria-labelledby={`${name
                    .replace(' ', '-')
                    .toLowerCase()} ${name
                    .replace(' ', '-')
                    .toLowerCase()}-demo`}
            >
                <FaReadme
                    id={`${name
                        .replace(' ', '-')
                        .toLowerCase()}-demo`}
                    className={classes.icon}
                    aria-label='Readme'
                />
            </a>
            )
    }
}

    const useStyles = makeStyles((t) => ({
        iconBtn: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 40,
            height: 40,
            borderRadius: 50,
            border: `2px solid ${theme.tertiary}`,
            color: theme.tertiary,
            transition: 'all 0.2s',
            '&:hover': {
                backgroundColor: theme.secondary,
                color: theme.primary,
                transform: 'scale(1.1)',
                border: `2px solid ${theme.secondary}`,
            },
        },
        icon: {
            fontSize: '1.1rem',
            transition: 'all 0.2s',
            '&:hover': {},
        },
    }));

    const classes = useStyles();

    return (
        <Fade bottom>
            <div
                key={id}
                className='singleProject'
                style={{ backgroundColor: theme.primary400 }}
            >
                <div className='projectContent'>
                    <h2
                        id={name.replace(' ', '-').toLowerCase()}
                        style={{ color: theme.tertiary }}
                    >
                        {name}
                    </h2>
                    <img style = {{height:"50%", borderRadius:"10px"}} src={image ? image : placeholder} alt={name} />
                    <div className='project--showcaseBtn'>
                        <a
                            href={demo}
                            target='_blank'
                            rel='noreferrer'
                            className={classes.iconBtn}
                            aria-labelledby={`${name
                                .replace(' ', '-')
                                .toLowerCase()} ${name
                                .replace(' ', '-')
                                .toLowerCase()}-demo`}
                        >
                            <FaPlay
                                id={`${name
                                    .replace(' ', '-')
                                    .toLowerCase()}-demo`}
                                className={classes.icon}
                                aria-label='Demo'
                            />
                        </a>
                        {/* 
                        <a
                            href={casestudy}
                            target='_blank'
                            rel='noreferrer'
                            className={classes.iconBtn}
                            aria-labelledby={`${name
                                .replace(' ', '-')
                                .toLowerCase()} ${name
                                .replace(' ', '-')
                                .toLowerCase()}-demo`}
                        >
                            <FaReadme
                                id={`${name
                                    .replace(' ', '-')
                                    .toLowerCase()}-demo`}
                                className={classes.icon}
                                aria-label='Readme'
                            />
                        </a>
                        */}
                        {nullCasestudy()}
                        {/*
                        <a
                            href={code}
                            target='_blank'
                            rel='noreferrer'
                            className={classes.iconBtn}
                            aria-labelledby={`${name
                                .replace(' ', '-')
                                .toLowerCase()} ${name
                                .replace(' ', '-')
                                .toLowerCase()}-code`}
                        >
                            <FaCode
                                id={`${name
                                    .replace(' ', '-')
                                    .toLowerCase()}-code`}
                                className={classes.icon}
                                aria-label='Code'
                            />
                        </a>
                        
                        {/* Creat a function for projects without code */}
                        {nullCode()}

                    </div>
                </div>
                <p
                    className='project--desc'
                    style={{
                        background: theme.secondary,
                        color: theme.tertiary,
                    }}
                >
                    {desc}
                </p>

                {/* 

                <div
                    className='project--lang'
                    style={{
                        background: theme.secondary,
                        color: theme.tertiary80,
                    }}
                >
                    {tags.map((tag, id) => (
                        <span key={id}>{tag}</span>
                    ))}
                </div>

                    */}
            </div>
        </Fade>
    );
}

export default SingleProject;
