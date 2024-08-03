import React, { useState } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaRegEnvelope } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { LuPhone } from "react-icons/lu";
import { LuCopy } from "react-icons/lu";
import { FaCheck } from "react-icons/fa6";

const ContactMe = () => {
    const [emailCopied, setEmailCopied] = useState(false);
    const [phoneCopied, setPhoneCopied] = useState(false);

    const handleCopy = (text, type) => {
        navigator.clipboard.writeText(text).then(() => {
            if (type === 'email') {
                setEmailCopied(true);
                setTimeout(() => setEmailCopied(false), 2000);
            } else if (type === 'phone') {
                setPhoneCopied(true);
                setTimeout(() => setPhoneCopied(false), 2000);
            }
        }).catch(err => console.error('Failed to copy text: ', err));
    };

    return (
        <section id='contact' className='bg-white dark:bg-slate-900 transition-colors duration-300 py-16'>
            <div className="w-11/12 mx-auto text-center">
                <p className="text-base max-w-max py-1.5 px-6 mx-auto font-medium bg-slate-200 dark:bg-slate-400 text-gray-700 dark:text-white text-center rounded-full shadow transition-colors duration-300">
                    Get in touch
                </p>
                <p className="text-base mt-3 py-2 px-6 mx-auto font-base text-gray-700 dark:text-gray-200 text-center transition-colors duration-300">
                    What's next? Feel free to reach out to me if you're looking for <br /> a developer, have a query, or simply want to connect.
                </p>
                <div className="flex flex-col items-center my-6">
                    <div className="flex items-center gap-3 mb-4">
                        <FaRegEnvelope className="text-4xl text-gray-900 dark:text-gray-200 mt-1" />
                        <span className="text-4xl font-semibold text-gray-900 dark:text-gray-200 transition-colors duration-300">swayamparmar1012@gail.com</span>
                        <button onClick={() => handleCopy('swayamparmar1012@gail.com', 'email')} className="ml-2 text-gray-700 dark:text-gray-200">
                            {
                                emailCopied ? <FaCheck className="text-4xl text-gray-900 dark:text-gray-200 mt-1 transition-colors duration-300" /> : 
                                    <LuCopy className="text-4xl text-gray-900 dark:text-gray-200 mt-1 transition-colors duration-300" />
                            }
                        </button>
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                        <LuPhone className="text-4xl text-gray-900 dark:text-gray-200 mt-1 transition-colors duration-300" />
                        <span className="text-4xl font-semibold text-gray-900 dark:text-gray-200 transition-colors duration-300">+91 9359082545</span>
                        <button onClick={() => handleCopy('+91 9359082545', 'phone')} className="ml-2 text-gray-700 dark:text-gray-200">
                            {
                                phoneCopied ? <FaCheck className="text-4xl text-gray-900 dark:text-gray-200 mt-1 transition-colors duration-300" /> : 
                                    <LuCopy className="text-4xl text-gray-900 dark:text-gray-200 mt-1 transition-colors duration-300" />
                            }
                        </button>
                    </div>
                </div>
                <p className="text-base mb-4 text-gray-600 dark:text-gray-200">
                    You may also find me on these platforms!
                </p>
                <div className="flex justify-center space-x-2">
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/SwayamParmar" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
                        <FaGithub className="h-7 w-9" />
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/swayam-parmar-988a45214/" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
                        <FaLinkedin className="h-7 w-9" />
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/swayu_1012/" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
                        <BsInstagram className="h-7 w-9" />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default ContactMe;
