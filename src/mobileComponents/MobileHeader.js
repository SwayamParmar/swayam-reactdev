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
            <header className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 p-4 shadow-sm flex items-center justify-between transition-colors duration-300">
                <div className="text-2xl text-black dark:text-white font-bold transition-colors duration-300">
                    <NavLink to="/" className="no-underline">
                        <span className={`${isNavOpen ? 'opacity-15 visible' : 'opacity-100 visible'} text-xl text-gray-900 dark:text-white`}>Swayam Parmar</span>
                    </NavLink>
                </div>
                <button onClick={toggleNav} className="text-2xl text-black dark:text-white transition-colors duration-300">
                    {isNavOpen ? <AiOutlineClose onClick={closeToggleNav} /> : <AiOutlineMenu />}
                </button>
            </header>
            <div className={`fixed inset-0 z-40 transition-opacity duration-300 ${isNavOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} onClick={closeToggleNav} style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}></div>
            <nav className={`fixed top-0 right-0 h-full w-80 bg-white dark:bg-gray-900 z-50 shadow-lg transform transition-transform duration-300 ease-in-out ${isNavOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="bg-white dark:bg-gray-900 shadow-sm p-4 flex items-center justify-between transition-colors duration-300">
                    <NavLink to="/" className="text-xl text-gray-800 dark:text-white font-bold">Swayam Parmar</NavLink>
                    <button onClick={toggleNav} className="text-xl text-black dark:text-white transition-colors duration-300">
                        {isNavOpen ? <AiOutlineClose onClick={closeToggleNav} /> : <AiOutlineMenu />}
                    </button>
                </div>
                <div className="p-4 space-y-2">
                    <a onClick={closeToggleNav} href="#about" className="text-base font-medium py-1 text-left block text-gray-600 dark:text-white transition-colors duration-300">About</a>
                    <a onClick={closeToggleNav} href="#work" className="text-base font-medium text-left py-1 block text-gray-600 dark:text-white transition-colors duration-300">Work</a>
                    <a onClick={closeToggleNav} href="#services" className="text-base font-medium text-left py-1 block text-gray-600 dark:text-white transition-colors duration-300">Services</a>
                    <a onClick={closeToggleNav} href="#contact" className="text-base font-medium text-left py-1 block text-gray-600 dark:text-white transition-colors duration-300">Contact</a>
                    <button onClick={toggleDarkMode} className="text-base font-medium text-gray-600 dark:text-white p-1 py-4 border-t border-gray-300 w-full text-left flex items-center justify-between transition-colors duration-300">
                        Switch Theme {darkMode ? <MdDarkMode className="text-2xl" onClick={closeToggleNav} /> : <CiLight className="text-2xl" onClick={closeToggleNav} />}
                    </button>
                    <a onClick={closeToggleNav} href="#download-cv" className="text-base font-medium block text-center bg-slate-900 dark:bg-gray-300 text-white dark:text-black px-4 py-2 rounded-xl hover:bg-slate-700 dark:hover:bg-gray-200 w-full transition-colors duration-300">
                        Download CV
                    </a>
                </div>
            </nav>
        </div>
    );
}

export default MobileHeader;
