import React from 'react'
import { MdCopyright } from "react-icons/md";
import useMediaQuery from '../mediaQuery/useMediaQuery';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const isMobile = useMediaQuery(800);

  return (
    <footer className={`w-full bg-[#F9FAFB] dark:bg-gray-800 flex items-center justify-center p-4 transition-colors duration-300`}>
      <div className={`${isMobile ? 'flex-cols w-full' : 'flex w-11/12'} mx-auto items-center justify-center space-x-1 transition-colors duration-300`}>
        <div className='flex items-center justify-center space-x-1'>
          <p className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-200 hover:text-gray-500 hover:dark:text-gray-300 transition-colors duration-300 mr-1">
            <MdCopyright className='h-6 w-6 font-bold text-gray-900 dark:text-white' />
            {currentYear}
          </p>
          <span className='text-gray-600 dark:text-gray-200 hover:text-gray-500 hover:dark:text-gray-300transition-colors duration-300'>|</span>
          <p className='flex items-center justify-center text-gray-600 dark:text-white hover:text-gray-500 hover:dark:text-gray-300 transition-colors duration-300'>
            <a href="https://github.com/SwayamParmar/" target="_blank" rel="noopener noreferrer" className='underline text-gray-600 dark:text-gray-200 hover:text-gray-700 hover:dark:text-gray-300 p-2 transition-colors duration-300'>Developed</a>
            and
            <a href="https://github.com/SwayamParmar/swayam-reactdev" target="_blank" rel="noopener noreferrer" className='underline text-gray-600 dark:text-white hover:text-gray-700 hover:dark:text-gray-300 p-2 transition-colors duration-300'>Coded</a>
          </p>
        </div>

        <div className='flex items-center justify-center space-x-1'>
          <p className='flex items-center text-gray-600 dark:text-white hover:text-gray-500 hover:dark:text-gray-300 transition-colors duration-300'>
            with ❤️ by Swayam Parmar
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;