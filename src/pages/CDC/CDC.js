// src/pages/CDC.js
import React from 'react';
import { Helmet } from 'react-helmet';
import { Navbar, Footer } from '../../components'; // Keep these components if they are shared across all pages.
import { CdcWhatIs, Timeline, CdcSkills, CdcMedia } from '../../components'; // Ensure this path is correct
import { cdcData } from '../../data/cdcData'; // Ensure this path is correct.
import { cdcTimeline } from '../../data/cdcTimeline'; // Ensure this path is correct.
import MainPage from '../../components/CDC/Main_Page'; // MainPage component

function CDC() {
    return (
        <div>
            <Helmet>
                <title>{cdcData.name} - Portfolio</title> {/* Make sure this is correctly set up */}
            </Helmet>
            <Navbar />
            <MainPage />
        </div>
    );
}

export default CDC; // Ensure this line is present and correct
