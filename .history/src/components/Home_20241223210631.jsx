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
            <div class="sketchfab-embed-wrapper"> <iframe title="phoenix bird" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/844ba0cf144a413ea92c779f18912042/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/phoenix-bird-844ba0cf144a413ea92c779f18912042?utm_medium=embed&utm_campaign=share-popup&utm_content=844ba0cf144a413ea92c779f18912042" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> phoenix bird </a> by <a href="https://sketchfab.com/norberto3d?utm_medium=embed&utm_campaign=share-popup&utm_content=844ba0cf144a413ea92c779f18912042" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> NORBERTO-3D </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=844ba0cf144a413ea92c779f18912042" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>
            <aside className="relative overflow-hidden dark:bg-gray-900  rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4   sm:py-24 mx-auto sm:px-6 lg:px-8">
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
                    <img className="w-96" src="https://i.ibb.co/fS8TLsy/40484123-8794242.png" alt="image1" />
                </motion.div>
            </aside>
            <motion.h1 className="relative text-2xl sm:text-5xl py-2 font-bold text-gray-900 dark:text-white transition-colors duration-200"
                initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
            >
    Here is my <span className='text-green-700'>CV</span>
            </motion.h1>
            <button onClick={handleDownload} className=" rounded-full bg-gray-300 hover:bg-gray-400 dark:bg-blue-900 dark:hover:bg-gray-600 
                       text-gray-800 dark:text-gray-200 
                       font-bold py-2 px-4 rounded 
                       inline-flex items-center 
                       transition-colors duration-200">
                            <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
      
      <span>Download Cv</span>
    </button>
            <motion.div
                className=" grid  place-items-end  dark:bg-gray-900"
            initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}>
                
                <img className="sm:w-96 w-48 place-items-end mb-10" src="https://i.ibb.co/rkr54Np/rb-2151182332.png" alt="image2" />   
            </motion.div>   
        </motion.div>
    );
}