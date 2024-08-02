import React from 'react'
import HeroSection from '../components/HeroSection';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import ProvidedService from '../components/ProvidedService';

const Home = () => {
    return (
        <>
            <HeroSection />
            <AboutMe />
            <Skills />
            <Experience />
            <Projects />
            <ProvidedService />
        </>
    )
}

export default Home;