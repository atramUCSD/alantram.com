import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';
import { ThemeContext } from '../../contexts/ThemeContext';

function TimelineCard({ id, description, title, week, img }) {
    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles(() => ({
        educationCard: {
            backgroundColor: theme.primary30, // Themed background color for cards
            "&:hover": {
                backgroundColor: theme.primary50, // Hover state background color
            },
        },
    }));

    const classes = useStyles();

    return (
        <Fade bottom>
            {/* Each timeline card with dynamic content */}
            <div key={id} className={`education-card ${classes.educationCard}`}>
                <div className="educard-img" style={{ backgroundColor: theme.primary }}>
                    {/* Image is now directly passed as a prop */}
                    <img src={img} alt="Timeline Entry" />
                </div>
                <div className="education-details">
                    {/* Dynamic placeholders for content */}
                    <h6 style={{ color: theme.primary }}>{week || 'Week Placeholder'}</h6>
                    <h4 style={{ color: theme.tertiary }}>{title || 'Title Placeholder'}</h4>
                    <h5 style={{ color: theme.tertiary80 }}>{description || 'Description Placeholder'}</h5>
                </div>
            </div>
        </Fade>
    );
}

export default TimelineCard;
