import React from 'react';
import { CiLocationOn } from "react-icons/ci";
import { GoDotFill } from "react-icons/go";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import useMediaQuery from '../mediaQuery/useMediaQuery';
import { BsInstagram } from "react-icons/bs";

const HeroSection = () => {
    const isMobile = useMediaQuery(800);

    return (
        <section className='bg-white dark:bg-gray-900 transition-colors duration-300'>
            <div className="bg-white dark:bg-gray-900 w-11/12 mx-auto px-4 py-8 sm:py-16 lg:py-24 transition-colors duration-300">
                <div className={`flex ${isMobile ? 'flex-col-reverse' : 'flex'} lg:flex-row items-center justify-between lg:space-x-8 transition-colors duration-300`}>
                    <div className="w-full sm:w-1/1 mt-8 lg:mt-0 transition-colors duration-300">
                        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
                            Hi, I'm Swayam Parmar <span role="img" aria-label="wave">👋</span>
                        </h1>
                        <p className="text-lg sm:text-xl lg:text-base text-gray-600 dark:text-gray-400 mb-6 text-justify transition-colors duration-300">
                            I'm an aspiring Web Developer seeking an opportunity to apply my passion for web development, 
                            strong problem-solving skills, and knowledge of cutting-edge technologies to contribute to dynamic 
                            and innovative web projects. Eager to learn and grow in a collaborative and fast-paced development environment.
                        </p>
                        
                        <div className="flex items-start flex-col space-y-3 mb-6 transition-colors duration-300">
                            <span className="flex items-center text-gray-700 dark:text-gray-300 transition-colors duration-300">
                                <CiLocationOn className='h-6 w-10' />
                                Mumbai, India
                            </span>
                            <span className="flex items-center text-green-600 dark:text-green-400 transition-colors duration-300">
                                <GoDotFill className='h-5 w-10' />
                                Available for new projects
                            </span>
                        </div>
                        
                        <div className="flex space-x-2 pt-4 transition-colors duration-300">
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/SwayamParmar" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
                                <FaGithub className="h-7 w-9"/>
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/swayam-parmar-988a45214/" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
                                <FaLinkedin className="h-7 w-9"/>
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/swayu_1012/" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
                                <BsInstagram className="h-7 w-9"/>
                            </a>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                        <img src="../images/swayam.jpg" alt="Sagar" className={`w-82 h-80 sm:w-82 sm:h-80 lg:w-250 lg:h-250 shadow-lg`} />
                    </div>

                </div>
            </div>
        </section>
    );
};


export default HeroSection;
