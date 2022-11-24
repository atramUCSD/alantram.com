import React from 'react'
import { Helmet } from 'react-helmet'

import { Navbar, Footer, Landing, About, Skills, Testimonials, Blog, Education, Experience, Contacts, Projects, Services, Achievement } from '../../components'
import { CapsWhatIs, CapsTimeline, Caps_RedesignSkills} from '../../components'

import { caps_redesignData } from '../../data/caps_redesignData'
import { caps_redesignTimeline} from '../../data/caps_redesignTimeline'

function Caps_Redesign() {
    return (
        <div>
            <Helmet>
                <title>{caps_redesignData.name} - Porfolio</title>
            </Helmet>
            <Navbar />        
            <CapsWhatIs />
            <CapsTimeline />
            <Caps_RedesignSkills/>
        </div>
    )
}

export default Caps_Redesign
