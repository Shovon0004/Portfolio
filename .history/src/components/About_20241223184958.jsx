import React from "react";
import { motion } from "framer-motion";

export default function About() {
    return (
        <motion.div
            className="w-full max-w-7xl mx-auto px-6 py-12 dark:bg-gray-900"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            {/* Title Section */}
            <motion.h1
                className="text-3xl sm:text-5xl font-bold text-gray-900 text-orange-500 hover:text-orange-700 focus:text-orange-700 text-center mb-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                About Me
            </motion.h1>

            {/* Introduction */}
            <motion.div
                className="flex flex-col sm:flex-row items-center gap-8 mb-12"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <motion.img
                    src="/public/55.jpg" // Replace with your actual image path
                    alt="About Me"
                    className="w-48 sm:w-64 rounded-lg shadow-lg"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                />
                <div className="sm:w-2/3 text-center sm:text-left">
                    <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                        Hello! I'm <span className="font-bold text-orange-700">Shovon Halder</span>, a passionate developer and a lifelong learner. I thrive on solving challenges, creating impactful projects, and constantly improving my skills.
                    </p>
                    <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                        My journey is fueled by curiosity, hard work, and a commitment to excellence in all I do. Let’s build something meaningful together!
                    </p>
                </div>
            </motion.div>

            {/* Education Section with Image */}
            <motion.div
                className="mb-12 flex items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
                {/* Text and Content */}
                <div className="w-full sm:w-2/3">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Education</h2>
                    <div className="space-y-4">
                        <div className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                Bachelor of Technology in Computer Science
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300">Adamas University, 2023 - 2027</p>
                        </div>
                        <div className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                High School
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300">Chakdaha Ramlal Acadeny, 2012 - 2022</p>
                        </div>
                    </div>
                </div>

                {/* Image Section */}
                <motion.img
                    src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExejBjeHZ1cWtxengzMnhpMmx4ZnI2MnUxdHUzMnBlYzN5MTZ6aTU5YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/4gK3Z6gJqdcCVpK794/giphy.webp" // Replace with your actual image path
                    alt="Education Image"
                    className="w-48 sm:w-64 ml-8 rounded-lg shadow-lg"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                />
            </motion.div>

            {/* Achievements/Interests */}
            <motion.div
                className="mb-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    Achievements & Interests
                </h2>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                    <li>Solved 100+ problems in LeetCode.</li>
                    <li>Participated in various hackathons and coding competitions.</li>
                    <li>Certified in Full-Stack Development from Udemy.</li>
                    <li>Passionate about solving puzzles, exploring AI/ML, and contributing to open-source projects.</li>
                </ul>
            </motion.div>
        </motion.div>
    );
}
