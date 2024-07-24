import React, { useState } from 'react'
import { FaMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import useMediaQuery from '../mediaQuery/useMediaQuery';
// import "../styles/header.css";
import MobileHeader from '../mobileComponents/MobileHeader';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [darkMode, setDarkMode] = useState(false);
    const isMobile = useMediaQuery(768);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        if (!darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    const WebHeader = () => {
        return (
            <div className={`text-center ${darkMode ? 'dark' : ''}`}>
                <header className="bg-white dark:bg-gray-900 flex items-center justify-between p-4 shadow-md transition-colors duration-300">
                    <div className="w-11/12 mx-auto flex items-center justify-between transition-colors duration-300">
                        <div className="transition-colors duration-300">
                            <NavLink to="/" className="no-underline">
                                <span className="text-2xl text-gray-900 dark:text-white font-bold">Swayam Parmar</span>
                            </NavLink>
                        </div>
                        <nav className="flex items-center space-x-5 transition-colors duration-300">
                            <a href="#about" className="text-base font-medium text-gray-600 dark:text-white hover:text-gray-500  hover:dark:text-gray-300 transition-colors duration-300">About</a>
                            <a href="#work" className="text-base font-medium text-gray-600 dark:text-white hover:text-gray-500  hover:dark:text-gray-300 transition-colors duration-300">Work</a>
                            <a href="#contact" className="text-base font-medium text-gray-600 dark:text-white hover:text-gray-500  hover:dark:text-gray-300 transition-colors duration-300">Contact</a>
                            <button onClick={toggleDarkMode} className="text-gray-600 dark:text-white hover:text-gray-500  hover:dark:text-gray-300 p-2 border-l border-grey dark:border-white transition-colors duration-300">
                                {darkMode ? <FaMoon /> : <FiSun />}
                            </button>
                            <a href="#download-cv" className="text-base font-medium bg-gray-900 dark:bg-gray-300 text-white dark:text-black px-4 py-2 rounded-xl hover:bg-slate-700 dark:hover:bg-gray-200 transition-colors duration-300">
                                Download CV
                            </a>
                        </nav>
                    </div>
                </header>
            </div>
        );
    };

    return (
        <>
            {isMobile ? <MobileHeader toggleDarkMode={toggleDarkMode} darkMode={darkMode} /> : <WebHeader />}
        </>
    );
}

export default Header;
