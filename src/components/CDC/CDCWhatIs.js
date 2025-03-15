import React from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

function CdcWhatIs() {
    const { theme } = useContext(ThemeContext);
    
    return (
        <div className="what-is" style={{ backgroundColor: theme.secondary }}>
            <h2 style={{ color: theme.primary }}>What is the CDC Project?</h2>
            <p style={{ color: theme.tertiary80 }}>
                The CDC project is an initiative by GDIT to address IT challenges and improve the user experience in public health data systems.
            </p>
        </div>
    );
}

export default CdcWhatIs;
