import React from 'react';
import useMediaQuery from '../mediaQuery/useMediaQuery';

const services = [
    {
        image: "../logo192.png",
        title: "Front End Development",
        description: "Creating visually appealing and user-friendly interfaces with a focus on performance and accessibility."
    },
    {
        image: "../logo192.png",
        title: "Backend Development",
        description: "Building robust and scalable server-side applications to power your website or application."
    },
    {
        image: "../logo192.png",
        title: "UI/UX Design",
        description: "Designing intuitive and engaging user experiences with a focus on user-centric design principles."
    }
];

const ProvidedService = () => {
    const isMobile = useMediaQuery(800);

    return (
        <section id='services' className='bg-white dark:bg-slate-800 transition-colors duration-300'>
            <div className="w-11/12 mx-auto px-4 py-8 sm:py-16 lg:py-20 transition-colors duration-300">
                <p className="text-base max-w-max py-1.5 px-6 mx-auto font-medium bg-slate-200 dark:bg-slate-400 text-gray-700 dark:text-white text-center rounded-full shadow transition-colors duration-300">
                    Services Provided
                </p>
                <p className="text-base mt-3 py-2 px-6 mx-auto font-base text-gray-700 dark:text-gray-200 text-center transition-colors duration-300">
                    Some of the noteworthy services I offer:
                </p>
                <div className={`grid grid-cols-1 md:grid-cols-3 w-11/12 mx-auto gap-6 mt-8`}>
                    {services.map((service, index) => (
                        <div key={index} className="bg-white w-11/12 mx-auto dark:bg-slate-700 p-6 rounded-lg shadow-lg transition-colors duration-300">
                            <div className="flex flex-col items-center">
                                <img src={service.image} alt={service.title} className="w-32 h-32 object-cover mb-4 rounded-full" />
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-200 mb-2">{service.title}</h3>
                                <p className="text-gray-700 dark:text-gray-300 text-center">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ProvidedService;
