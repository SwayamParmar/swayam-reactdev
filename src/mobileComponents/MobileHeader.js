import React, { useState } from 'react';
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { NavLink } from 'react-router-dom';

const MobileHeader = ({ toggleDarkMode, darkMode }) => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    const closeToggleNav = () => {
        setIsNavOpen(false);
    };

    return (
        <div className={`text-center ${darkMode ? 'dark' : ''}`}>
            <header className="bg-white dark:bg-gray-900 w-full p-4 shadow-md flex items-center justify-between transition-colors duration-300">
                <div className="text-2xl text-black dark:text-white font-bold transition-colors duration-300">
                    <NavLink to="/" className="no-underline">
                        <span className="text-xl text-gray-900 dark:text-white">Swayam Parmar</span>
                    </NavLink>
                </div>
                <button onClick={toggleNav} className="text-2xl text-black dark:text-white transition-colors duration-300">
                    {isNavOpen ? <AiOutlineClose onClick={closeToggleNav} /> : <AiOutlineMenu />}
                </button>
            </header>
            {isNavOpen && (
                <nav className="bg-white dark:bg-gray-900 w-full text-left p-4 space-y-2 shadow transition-colors duration-300">
                    <a href="#about" className="text-base font-medium py-1 block text-gray-600 dark:text-white transition-colors duration-300">About</a>
                    <a href="#work" className="text-base font-medium py-1 block text-gray-600 dark:text-white transition-colors duration-300">Work</a>
                    <a href="#contact" className="text-base font-medium py-1 block text-gray-600 dark:text-white transition-colors duration-300">Testimonials</a>
                    <a href="#contact" className="text-base font-medium py-1 block text-gray-600 dark:text-white transition-colors duration-300">Contact</a>
                    
                    <button onClick={toggleDarkMode} className="text-base font-medium text-gray-600 dark:text-white p-2 py-4 border-t border-gray-300 w-full text-left flex items-center justify-between transition-colors duration-300">
                        Switch Theme {darkMode ? <MdDarkMode className="text-2xl" /> : <CiLight className="text-2xl" />} 
                    </button>

                    <a href="#download-cv" className="text-base font-medium block text-center bg-slate-900 dark:bg-gray-300 text-white dark:text-black px-4 py-2 rounded-xl hover:bg-slate-700 dark:hover:bg-gray-200 w-full transition-colors duration-300">
                        Download CV
                    </a>
                </nav>
            )}
        </div>
    );
}

export default MobileHeader;
