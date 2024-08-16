import React from 'react';
import useMediaQuery from '../mediaQuery/useMediaQuery';
import { LuExternalLink } from "react-icons/lu";
import { NavLink } from 'react-router-dom';

const Projects = () => {
    const isMobile = useMediaQuery(868);

    return (
        <section id='work' className='bg-white dark:bg-slate-900 transition-colors duration-300'>
        <div className={`${isMobile ? 'w-full pt-16 pb-10' : 'w-11/12 py-8'} mx-auto px-4 sm:py-16 lg:pt-20 lg:pb-10 transition-colors duration-300`}>
                <p className="text-base max-w-max py-1.5 px-6 mx-auto font-medium bg-slate-200 dark:bg-slate-400 text-gray-700 dark:text-gray-200 text-center rounded-full shadow transition-colors duration-300">
                    Work
                </p>
                <p className={`${isMobile ? 'text-medium' : 'text-xl'} mt-3 py-2 px-6 mx-auto font-base text-gray-700 dark:text-gray-200 text-center transition-colors duration-300`}>
                    Some of the noteworthy projects I have built:
                </p>
                <div className={`bg-white dark:bg-[#1F2937] my-8 sm:my-8 lg:my-10 ${isMobile ? 'w-full' : 'w-9/12'} mx-auto rounded-lg shadow`}>
                    <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} items-start justify-between rounded-xl transition-colors duration-300`}>
                        <div className={`${isMobile ? 'w-full rounded-t-lg' : 'w-6/12 rounded-tl-lg rounded-bl-lg'} h-full dark:bg-[#374151] p-8`}>
                            <img
                                src="../images/flipkart2.png"
                                alt="swayam"
                                className='w-full h-full rounded-lg shadow'
                            />
                        </div>
                        <div className={`${isMobile ? 'w-full my-2' : 'w-6/12'} p-8`}>
                            <span className='text-lg font-semibold text-gray-900 dark:text-gray-200 transition-colors duration-300'>
                                Flipkart Clone
                            </span>

                            <p className="py-4 text-base font-base text-gray-600 dark:text-gray-300 transition-colors duration-300">
                            A e-commerce site, Flipkart Clone offers a variety of products including fashion, footwear, 
                            electronics, and more. With features like secure login/signup, search capabilities, and user notifications, 
                            it offers a flawless buying experience that is reminiscent of the original Flipkart platform.
                            </p>

                            <div className='flex flex-wrap gap-2'>
                                {['React Js', 'Node.js', 'Express.js', 'MongoDB', 'Axios', 'Cors'].map((tech, index) => (
                                    <span key={index} className='mb-2 text-base py-1.5 px-4 bg-slate-200 dark:bg-slate-400 text-gray-600 dark:text-gray-700 font-medium rounded-full shadow transition-colors duration-300'>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <NavLink to="#" target="_blank" rel="noopener noreferrer" className='text-gray-900 dark:text-gray-200 hover:text-slate-700 dark:hover:text-white transition-colors duration-300'>
                                <LuExternalLink className='mt-4 text-2xl' />
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
