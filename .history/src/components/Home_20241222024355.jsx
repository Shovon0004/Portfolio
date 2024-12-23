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
        <div className="mx-auto w-full max-w-7xl dark:bg-gray-900">
            <aside className="relative overflow-hidden dark:bg-gray-900  rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto dark:bg-gray-900">
                        <h2 className="text-4xl font-bold sm:text-5xl ">
                            
                            Hey,I'm <span className='text-orange-700'>Shovon Halder!</span>I'm always eager to learn new things and take on challenging projects.😊
                        </h2>

                        
                    </div>
                </div>

                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full dark:bg-gray-900">
                    <img className="w-96" src="https://i.ibb.co/5BCcDYB/Remote2.png" alt="image1" />
                </div>
            </aside>
            

            <div className=" grid  place-items-end sm:mt-20 dark:bg-gray-900">
                <img className="sm:w-96 w-48 mb-10" src="https://i.ibb.co/2M7rtLk/Remote1.png" alt="image2" />
                
            </div>

            
        </div>
    );
}