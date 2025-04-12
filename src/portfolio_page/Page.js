import React from 'react';
import Hero from './Hero.js';
import About from './Aboutme.js';
import Skills from './Skills.js';
import Projects from './Projects.js';
import Certifications from './Certifications.js';
import Contact from './Contactme.js';
import Navbar from './Navbar.js';
import Education from './Education.js';




function Page() {
    return (<>

        <Navbar />
        <div id='hero'><Hero /></div>

        <div id="about"><About /></div>
        <Education />
        <div id="skills"><Skills /></div>
        <div id="projects"><Projects /></div>
        <div id="certifications"><Certifications /></div>
        <div id="contact"><Contact /></div>



    </>


    );
}

export default Page;