import React from 'react';
import useMediaQuery from '../mediaQuery/useMediaQuery';
import { IoLogoCss3 } from "react-icons/io5";
import { FaReact } from "react-icons/fa6";
import { BsBootstrapFill } from "react-icons/bs";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiJavascript } from "react-icons/si";
import { SiJquery } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { SiMongodb } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaLaravel } from "react-icons/fa";

const skills = [
    { id: 1, name: 'CSS3', icon: <IoLogoCss3 />, color: 'text-blue-500 dark:text-blue-400' },
    { id: 2, name: 'Bootstrap 5', icon: <BsBootstrapFill />, color: 'text-[#2b1240] dark:text-[#2b1240]' },
    { id: 3, name: 'Tailwind CSS', icon: <RiTailwindCssFill />, color: 'text-[#44a8b3] dark:text-[#44a8b3]' },
    { id: 4, name: 'JavaScript', icon: <SiJavascript />, color: 'text-[#ffd600] dark:text-[#ffd600]' },
    { id: 5, name: 'jQuery', icon: <SiJquery />, color: 'text-[#0868ac] dark:text-[#0868ac]' },
    { id: 6, name: 'React', icon: <FaReact />, color: 'text-teal-500 dark:text-teal-400' },
    { id: 7, name: 'Node', icon: <FaNodeJs />, color: 'text-[#8cc84b] dark:text-[#8cc84b]' },
    { id: 8, name: 'Git', icon: <FaGitAlt />, color: 'text-[#F4511E] dark:text-[#F4511E]' },
    { id: 9, name: 'MYSQL', icon: <GrMysql />, color: 'text-[#00678c] dark:text-[#00678c]' },
    { id: 10, name: 'MongoDB', icon: <SiMongodb />, color: 'text-[#538a4a] dark:text-[#538a4a]' },
    { id: 11, name: 'Postman', icon: <SiPostman />, color: 'text-[#FF6C37] dark:text-[#FF6C37]' },
    { id: 12, name: 'Express', icon: <SiExpress />, color: 'text-slate-700 dark:text-gray-200' },
    { id: 13, name: 'Figma', icon: <img src="../images/figma.svg" alt='figma' name='figma' />, color: '' },
    { id: 14, name: 'Laravel', icon: <FaLaravel />, color: 'text-[#ff2c1c] dark:text-[#ff2c1c]' },
];

const Skills = () => {
    const isMobile = useMediaQuery(800);

    return (
        <section id='about' className='bg-white dark:bg-slate-900 transition-colors duration-300'>
            <div className={`${isMobile ? 'w-full py-16' : 'w-11/12 py-8'} mx-auto px-4 sm:py-16 lg:pt-20 lg:pb-15 transition-colors duration-300`}>
                <p className="text-base max-w-max py-1.5 px-6 mx-auto font-medium bg-slate-200 dark:bg-slate-400 text-gray-700 dark:text-gray-200 text-center rounded-full shadow transition-colors duration-300">
                    Skills
                </p>
                <p className={`${isMobile ? 'text-medium' : 'text-xl'} mt-3 py-1.5 px-6 mx-auto font-medium text-gray-700 dark:text-gray-200 text-center transition-colors duration-300`}>
                    The skills, tools and technologies I am really good at:
                </p>
                <div className={`grid ${isMobile ? 'grid-cols-3' : 'grid-cols-7'} w-full mx-auto ${isMobile ? 'gap-8' : 'gap-12'} pt-10 items-center justify-between transition-colors duration-300`}>
                    {skills.map(skill => (
                        <div key={skill.id} className="flex flex-col items-center">
                            <div className="h-20 w-20 flex items-center justify-center p-1">
                                {React.cloneElement(skill.icon, { className: `h-16 w-16 ${skill.color}` })}
                            </div>
                            <p className={` ${isMobile ? 'text-sm' : 'text-medium' } mt-2 text-center font-medium text-gray-700 dark:text-gray-200 transition-colors duration-300`}>{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
