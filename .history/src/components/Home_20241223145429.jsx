import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export default function Home() {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/cv.pdf'; // Path to the CV file in the public folder
        link.download = 'My_CV.pdf'; // Suggested file name for the download
        link.click();
    };
    return (
        <motion.div className="mx-auto w-full max-w-7xl dark:bg-gray-900">
            <aside className="relative overflow-hidden dark:bg-gray-900  rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto dark:bg-gray-900">
                        <motion.h2 className="text-4xl font-bold sm:text-5xl "
                        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}>
                            
                            Hey,I'm <span className='text-orange-700'>Shovon Halder!</span>I'm always eager to learn new things and take on challenging projects.😊
                        </motion.h2>

                        
                    </div>
                </div>

                <motion.div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full dark:bg-gray-900"
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}>
                    <img className="w-96" src="/public/123.png" alt="image1" />
                </motion.div>
            </aside>
            <motion.div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-left sm:ml-auto dark:bg-gray-900">
            <motion.h1 className="relative text-2xl sm:text-5xl py-10 font-bold text-gray-900 dark:text-white transition-colors duration-200"
                initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
            >
    Here is my CV
            </motion.h1>
            <button onClick={handleDownload} className=" rounded-full bg-gray-300 hover:bg-gray-400 dark:bg-blue-900 dark:hover:bg-gray-600 
                       text-gray-800 dark:text-gray-200 
                       font-bold py-2 px-4 rounded 
                       inline-flex items-center 
                       transition-colors duration-200">
                            <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
      
                    <span>Download Cv</span>
                    
                </button>
                </motion.div>

            <motion.div
                className=" grid  place-items-end  dark:bg-gray-900"
            initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}>
                <img className="sm:w-96 w-48 mb-10" src="/public/1234.png" alt="image2" />   
            </motion.div>

            
        </motion.div>
    );
}