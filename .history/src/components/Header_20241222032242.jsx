import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import  { useState,useEffect } from 'react'
import { Moon, Sun } from 'lucide-react';

export default function Header() {
    const [darkMode, setDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme === 'dark';
    });

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);
    return (
        <header className="shadow sticky z-50 top-0 dark:bg-gray-900">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-900">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center ">
                        <img
                            src="data:image/png;base64,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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKezyTYAAAILSURBVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4P9vDw4EAAAAAAT5Wy8wQgUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADACo5hniXM+UznAAAAAElFTkSuQmCC"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className="p-2 mr-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700"
                            aria-label="Toggle dark mode"
                        >
                            {darkMode ? (
                                <Sun className="w-5 h-5 text-gray-800 dark:text-gray-200" />
                            ) : (
                                <Moon className="w-5 h-5 text-gray-800 dark:text-gray-200" />
                            )}
                        </button>
                        
                        
                        
                        
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                to="/"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/about"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/contact"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/Projects"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Projects
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/Skill"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Skills
                                </NavLink>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}