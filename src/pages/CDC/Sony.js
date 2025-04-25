import React from 'react'
import { Helmet } from 'react-helmet'

import { Navbar, Footer, Landing, About, Skills, Testimonials, Blog, Education, Experience, Contacts, Projects, Services, Achievement } from '../../components'
import { WhatIs, Timeline, SonySkills, SonyMedia} from '../../components'

import { sonyData } from '../../data/sonyData'
import { sonyTimeline} from '../../data/sonyTimeline'

function Sony() {
    return (
        <div>
            <Helmet>
                <title>{sonyData.name} - Porfolio</title>
            </Helmet>
            <Navbar />        
            <WhatIs />
            <Timeline />
            <SonySkills />
            <SonyMedia />
        </div>
    )
}

export default Sony
