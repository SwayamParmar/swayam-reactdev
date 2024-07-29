import React from 'react';
import useMediaQuery from '../mediaQuery/useMediaQuery';

const experienceData = [
    {
        company: 'Pranic Healthcare',
        role: 'Digital Marketing',
        duration: 'Feb 2023 - June 2023',
        type: 'Internship',
        details: [
            'B.Sc in Information Technology',
            'Full Time Developer',
            'Avid Learner'
        ]
    },
    {
        company: 'ENATS Technology LLP',
        role: 'Full Stack Developer',
        duration: 'Oct 2023 - Present',
        details: [
            'B.Sc in Information Technology',
            'Full Time Developer',
            'Avid Learner'
        ]
    },
    {
        company: 'Djobzy',
        role: 'Full Stack Laravel Developer',
        duration: 'Feb 2024 - Present',
        details: [
            'B.Sc in Information Technology',
            'Full Time Developer',
            'Avid Learner'
        ]
    }
];

const Experience = () => {
    const isMobile = useMediaQuery(800);

    return (
        <section id='experience' className='bg-white dark:bg-slate-800 transition-colors duration-300'>
            <div className="w-11/12 mx-auto py-8 sm:py-16 lg:pt-20 lg:pb-15 transition-colors duration-300">
                <p className="text-base max-w-max py-1.5 px-6 mx-auto font-medium bg-slate-200 dark:bg-slate-400 text-gray-700 dark:text-gray-200 text-center rounded-full shadow transition-colors duration-300">
                    Experience
                </p>
                <p className="text-xl mt-3 py-2 px-6 mx-auto font-medium text-gray-700 dark:text-gray-200 text-center transition-colors duration-300">
                    Here is a quick summary of my most recent experiences:
                </p>
                {
                    experienceData.map((experience, index) => (
                        <div key={index} className={`bg-white dark:bg-slate-700 my-8 sm:my-8 lg:my-10 ${isMobile ? 'w-full' : 'w-7/12'} mx-auto rounded-lg sm:shadow-lg shadow-lg p-5`}>
                            <div className={`flex ${isMobile ? 'flex-col' : 'flex'} lg:flex-row items-start justify-between lg:space-x-6 transition-colors duration-300`}>
                                <div className={`${isMobile ? 'my-2 w-full' : 'w-4/12'} order-1`}>
                                    <span className='text-medium font-medium text-gray-700 dark:text-gray-200 transition-colors duration-300'>
                                        { experience.company }
                                    </span>
                                </div>
                                <div className={`${isMobile ? 'order-3 w-full my-2' : 'order-2 w-5/12'}`}>
                                    <span className='text-lg font-semibold text-gray-900 dark:text-gray-200 transition-colors duration-300'>
                                        { experience.role }
                                    </span>
                                    <ul className={`text-gray-700 dark:text-gray-300 list-disc list-inside my-3 w-full`}>
                                        {
                                            experience.details.map((detail, i) => (
                                                <li key={i} className='w-full mb-2 text-medium'>{ detail }</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                                <div className={` ${isMobile ? 'order-2 w-full my-2' : 'order-3 w-4/12'}`}>
                                    <span className='text-medium font-medium text-gray-700 dark:text-gray-200 transition-colors duration-300'>
                                        {experience.duration} <br />
                                        {experience.type && <>{experience.type}</>}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
}

export default Experience;
