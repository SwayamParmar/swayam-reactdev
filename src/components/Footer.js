import React from 'react'
import { MdCopyright } from "react-icons/md";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full bg-white dark:bg-gray-700 flex items-center justify-center p-4 transition-colors duration-300">
      <div className="w-11/12 mx-auto flex items-center justify-center space-x-1 transition-colors duration-300">
        <p className="text-gray-600 dark:text-white hover:text-gray-500 hover:dark:text-gray-300 transition-colors duration-300 mr-2"> 
          { currentYear }
        </p>
        <span>|</span>
        <p className='flex items-center justify-center text-gray-600 dark:text-white hover:text-gray-500 hover:dark:text-gray-300 transition-colors duration-300'>
          <a href="#" className='text-gray-600 dark:text-white hover:text-gray-500 hover:dark:text-gray-300 p-2 transition-colors duration-300 mr-1'>Designed</a>
            and 
          <a href="#" className='text-gray-600 dark:text-white hover:text-gray-500 hover:dark:text-gray-300 p-2 transition-colors duration-300'>Coded</a>
        </p>
        <p className='text-gray-600 dark:text-white hover:text-gray-500 hover:dark:text-gray-300 transition-colors duration-300'>
          with by Swayam Parmar
        </p>
      </div>
    </footer>
  )
}

export default Footer;