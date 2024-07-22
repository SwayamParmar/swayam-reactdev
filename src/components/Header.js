import React, { useState } from 'react'
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";

import "../styles/header.css";

const Header = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        if (!darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    return (
        <div className={`text-center ${darkMode ? 'dark' : ''}`}>
            <header className="bg-white dark:bg-[#030712] flex items-center justify-between p-4 shadow-md">
                <div className="text-2xl text-black dark:text-white font-bold">
                    Swayam Parmar
                </div>
                <nav className="flex items-center space-x-5">
                    <a href="#about" className="text-black dark:text-white">About</a>
                    <a href="#work" className="text-black dark:text-white">Work</a>
                    <a href="#contact" className="text-black dark:text-white">Contact</a>
                    <button onClick={toggleDarkMode} className="text-black dark:text-white p-2 border-l border-grey dark:border-black">
                        <span className="material-icons"> {darkMode ? <MdDarkMode /> : <CiLight />}  </span>
                    </button>
                    
                    <a href="#download-cv" 
                        className="bg-[#030712] dark:bg-gray-300 text-white dark:text-black px-4 py-2 rounded-xl hover:bg-slate-900 dark:hover:bg-gray-200" >
                        Download CV
                    </a>
                </nav>
            </header>
        </div>
    );
}

export default Header;