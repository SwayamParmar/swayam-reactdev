import React from 'react'
import HeroSection from '../components/HeroSection';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills';
import Experience from '../components/Experience';

const Home = () => {
    return (
        <>
            <HeroSection />
            <AboutMe />
            <Skills />
            <Experience />
        </>
    )
}

export default Home;