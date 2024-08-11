import React, { useState, useEffect } from 'react'
import { FaMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import useMediaQuery from '../mediaQuery/useMediaQuery';
import MobileHeader from '../mobileComponents/MobileHeader';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [darkMode, setDarkMode] = useState(false);
    const isMobile = useMediaQuery(768);

    // Check the theme preference from localStorage when the component mounts
    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme === 'dark') {
            setDarkMode(true);
            document.documentElement.classList.add('dark');
        } else {
            setDarkMode(false);
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const toggleDarkMode = () => {
        const isDarkMode = !darkMode;
        setDarkMode(isDarkMode);

        if (isDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    const WebHeader = () => {
        return (
            <div className={`text-center ${darkMode ? 'dark' : ''}`}>
                <header className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 flex items-center justify-between p-4 transition-colors duration-300">
                    <div className="w-11/12 mx-auto flex items-center justify-between transition-colors duration-300">
                        <div className="transition-colors duration-300">
                            <NavLink to="/" className="no-underline">
                                <span className="text-2xl text-gray-900 dark:text-white font-bold">Swayam Parmar</span>
                            </NavLink>
                        </div>
                        <nav className="flex items-center space-x-4 transition-colors duration-300">
                            <a href="#about" className="text-base font-medium text-gray-600 dark:text-white hover:text-gray-500 hover:dark:text-gray-300 transition-colors duration-300">About</a>
                            <a href="#services" className="text-base font-medium text-gray-600 dark:text-white hover:text-gray-500 hover:dark:text-gray-300 transition-colors duration-300">Services</a>
                            <a href="#contact" className="text-base font-medium text-gray-600 dark:text-white hover:text-gray-500 hover:dark:text-gray-300 transition-colors duration-300">Contact</a>
                            <span className='text-[23px] text-gray-200 dark:text-white pb-1'>|</span>
                            <button onClick={toggleDarkMode} className="text-gray-600 dark:text-white hover:text-gray-500 hover:dark:text-gray-300 p-2 transition-colors duration-300">
                                {darkMode ? <FaMoon /> : <FiSun />}
                            </button>
                            <a href="/Swayam_Parmar_Resume.pdf" download className="text-base font-medium bg-gray-900 dark:bg-gray-300 text-white dark:text-black px-4 py-2 rounded-xl hover:bg-slate-700 dark:hover:bg-gray-200 transition">
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
