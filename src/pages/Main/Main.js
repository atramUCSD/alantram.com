import React from 'react'
import { Helmet } from 'react-helmet'

import { Navbar, Footer, Landing, About, Skills, Testimonials, Blog, Education, Experience, Contacts, Projects, Services, Achievement } from '../../components'
import { headerData } from '../../data/headerData'

function Main() {
    return (
        <div>
            <Helmet>
                <title>{headerData.name} - Porfolio</title>
            </Helmet>
            <Navbar />        
            <Landing />
            <About />
            <Projects />
            <Education />
            <Skills />
            <Experience />
            {/* 
                <Achievement />
                <Services />
                <Testimonials />
                <Blog />
            */}
            <Testimonials />
            <Contacts />
            <Footer />
        </div>
    )
}

export default Main
