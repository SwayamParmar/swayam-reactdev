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
            <header className="bg-white dark:bg-[#030712] w-full p-4 shadow-md flex items-center justify-between">
                <div className="text-2xl text-black dark:text-white font-bold">
                    <NavLink to="/" className="no-underline">
                        <span className="text-xl text-black dark:text-white">Swayam Parmar</span>
                    </NavLink>
                </div>
                <button onClick={toggleNav} className="text-2xl text-black dark:text-white">
                    {isNavOpen ? <AiOutlineClose onClick={ closeToggleNav } /> : <AiOutlineMenu />}
                </button>
            </header>
            {isNavOpen && (
                <nav className="bg-white dark:bg-[#030712] w-full text-left p-4 space-y-2 shadow">
                    <a href="#about" className="py-1 block text-black dark:text-white">About</a>
                    <a href="#work" className="py-1 block text-black dark:text-white">Work</a>
                    <a href="#contact" className="py-1 block text-black dark:text-white">Testimonials</a>
                    <a href="#contact" className="py-1 block text-black dark:text-white">Contact</a>
                    
                    <button onClick={toggleDarkMode} className="text-black dark:text-white p-2 py-4 border-t border-gray-700 w-full text-left flex align-center justify-between">
                        Switch Theme {darkMode ? <MdDarkMode  className="text-2xl" /> : <CiLight className="text-2xl" />} 
                    </button>

                    <a href="#download-cv" className="block text-center bg-[#030712] dark:bg-gray-300 text-white dark:text-black px-4 py-2 rounded-xl hover:bg-slate-900 dark:hover:bg-gray-200 w-full">
                        Download CV
                    </a>
                </nav>
            )}
        </div>
    );
}

export default MobileHeader;
