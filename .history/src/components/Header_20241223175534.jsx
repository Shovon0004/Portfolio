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
        <header className="shadow sticky z-50 top-0 dark:bg-grey-900">
            <nav className="bg-white border-gray-800 px-4 lg:px-6 py-2.5 dark:bg-gray-900">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center ">
                        <img
                            src="https://media.tenor.com/kQ5Gj88WGuwAAAAj/taking-notes-kedet.gif"
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
                        <Link
                            href="https://github.com/yourusername/your-repo"
                            target="_blank"
                            img="ee.svg"
                            rel="noopener noreferrer"
                            className="p-2 bg-rose-700 rounded-lg hover:bg-rose-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            title="Fork My Repo"
                        >
                            Fork My Repo
                        </Link>
                        
                        
                        
                        
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
  to="/"
  className={({ isActive }) =>
    `block py-2 pr-4 pl-3 duration-200 ${
      isActive ? "text-orange-700" : "text-gray-700"
    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
  }
  title="Go to Home"
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
                            <li>
                                <NavLink
                                to="/Blogs"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 rounded border-red-500 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Blogs
                                </NavLink>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}