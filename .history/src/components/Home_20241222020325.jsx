import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/cv.pdf'; // Path to the CV file in the public folder
        link.download = 'My_CV.pdf'; // Suggested file name for the download
        link.click();
    };
    return (
        <div className="mx-auto w-full max-w-7xl dark:bg-gray-800">
            <aside className="relative overflow-hidden dark:bg-gray-800 text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto dark:bg-gray-800">
                        <h2 className="text-4xl font-bold sm:text-5xl dark:bg-gray-800">
                            
                            Hey,I'm <span></span>Shovon Halder😊I'm always eager to learn new things and take on challenging projects.
                        </h2>

                        <button onClick={handleDownload} className=" rounded-full bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 
                       text-gray-800 dark:text-gray-200 
                       font-bold py-2 px-4 rounded 
                       inline-flex items-center 
                       transition-colors duration-200">
                            <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
      
      <span>Download Cv</span>
    </button>
                    </div>
                </div>

                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full dark:bg-gray-800">
                    <img className="w-96" src="https://i.ibb.co/5BCcDYB/Remote2.png" alt="image1" />
                </div>
            </aside>

            <div className="grid  place-items-center sm:mt-20 dark:bg-gray-800">
                <img className="sm:w-96 w-48" src="https://i.ibb.co/2M7rtLk/Remote1.png" alt="image2" />
            </div>

            <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">Lorem Ipsum Yojo</h1>
        </div>
    );
}