import React from 'react';
import useMediaQuery from '../mediaQuery/useMediaQuery';

const AboutMe = () => {
    const isMobile = useMediaQuery(800);

    return (
        <section id='about' className='bg-[#F9FAFB] dark:bg-slate-800 transition-colors duration-300'>
            <div className={`${isMobile ? 'w-full py-16' : 'w-11/12 py-8'} mx-auto px-4 sm:py-16 lg:pt-20 lg:pb-10 transition-colors duration-300`}>
                <p className="text-base max-w-max py-1.5 px-6 mx-auto font-medium bg-slate-200 dark:bg-slate-400 text-gray-700 dark:text-gray-200 text-center rounded-full shadow transition-colors duration-300">
                    About me
                </p>
                <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} pt-10 ${isMobile ? 'items-center' : 'items-start'} justify-between transition-colors duration-300`}>
                    <div className={`${isMobile ? 'w-11/12 ml-0' : 'w-full'} flex justify-start lg:justify-center`}>
                        <div className="relative pt-3 flex justify-center">
                            <img src="../images/4.jpg" alt="Swayam Parmar" className="relative w-full h-80 sm:w-full sm:h-96 border-8 border-[#F9FAFB] dark:border-gray-800 z-10" />
                            <div className={`absolute bg-[#E5E7EB] dark:bg-slate-700 ${isMobile ? 'w-64 h-80 sm:w-64 sm:h-80 top-8' : 'w-80 h-80 sm:w-80 sm:h-80 top-28'} rounded-sm shadow`} style={{ left: isMobile ? '-15px' : '-30px', zIndex: 1 }}>
                            </div>
                        </div>
                    </div>

                    <div className={`w-full mt-8 lg:mt-0 transition-colors duration-300 text-gray-900 dark:text-white`}>
                        <h2 className="text-gray-700 dark:text-gray-300 text-3xl font-bold mb-4">Curious about me? Here you have it:</h2>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                            I began my career in 2023 as a  <span className='text-xl text-gray-700 dark:text-gray-200 font-semibold'>Full Stack Developer</span> , and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, with a year of experience under my belt, I'm building web applications using modern technologies such as Node.js, React, Express, Laravel, TailwindCSS, Bootstrap and much more.
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
                            <li className='mb-2'>Full Time Developer</li>
                            <li className='mb-2'>Avid Learner</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
