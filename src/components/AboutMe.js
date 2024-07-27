import React from 'react';
import useMediaQuery from '../mediaQuery/useMediaQuery';

const AboutMe = () => {
    const isMobile = useMediaQuery(800);

    return (
        <section id='about' className='bg-white dark:bg-slate-700 transition-colors duration-300'>
            <div className="w-11/12 mx-auto px-4 py-8 sm:py-16 lg:pt-20 lg:pb-10 transition-colors duration-300">
                <p className="text-base max-w-max py-1.5 px-6 mx-auto font-medium bg-slate-200 dark:bg-slate-400 text-gray-700 dark:text-gray-200 text-center rounded-full shadow transition-colors duration-300">
                    About me
                </p>
                <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} pt-10 ${isMobile ? 'items-center' : 'items-start'} justify-between transition-colors duration-300`}>
                    <div className="w-full flex justify-center lg:justify-start">
                        <div className="relative pt-3">
                            <img src="../images/swayam.jpg" alt="Sagar" className="w-82 h-80 sm:w-82 sm:h-80 lg:w-250 lg:h-250 shadow-lg border-4 border-white dark:border-gray-700" />
                        </div>
                    </div>

                    <div className={`w-full mt-8 lg:mt-0 transition-colors duration-300 text-gray-900 dark:text-white ${isMobile ? 'text-justify' : ''}`}>
                        <h2 className="text-gray-700 dark:text-gray-300 text-3xl font-bold mb-4">Curious about me? Here you have it:</h2>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                            I began my career in 2023 as a  <span className='text-gray-900 dark:text-gray-200 font-semibold'>full stack developer</span> , and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, with a year of experience under my belt, I'm building web applications using modern technologies such as Node.js, React, Express, Laravel, TailwindCss, Bootstrap and much more.
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                        I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development.
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                            When I'm not in full-on developer mode, you can find me hovering around on LinkedIn and GitHub, 
                            connecting with fellow developers, sharing tech-related insights, and contributing to open-source projects.
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 mb-4 font-semibold">Finally, some quick bits about me:</p>
                        <ul className={`text-gray-700 dark:text-gray-300 grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2'} list-disc list-inside mb-4`}>
                            <li className='mb-2'>B.Sc in Information Technology</li>
                            <li className='mb-2'>Full time Developer</li>
                            <li className='mb-2'>Avid learner</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
