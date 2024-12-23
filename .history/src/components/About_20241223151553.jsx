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
                className="text-3xl sm:text-5xl font-bold text-gray-900 dark:text-white text-center mb-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                About Me
            </motion.h1>

            {/* Intro Section */}
            <motion.div
                className="flex flex-col-reverse sm:flex-row items-center gap-8"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                {/* Text Section */}
                <div className="sm:w-2/3 text-center sm:text-left">
                    <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                        Hello! I'm <span className="font-bold text-orange-700">Shovon Halder</span>, a passionate developer and a lifelong learner.
                        I love tackling new challenges and diving into exciting projects that make an impact. My goal is to create intuitive and innovative digital experiences.
                    </p>
                    <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                        Whether it's designing user-friendly websites, solving complex coding problems, or exploring new technologies, I am always eager to expand my horizons and refine my skills.
                    </p>
                </div>

                {/* Image Section */}
                <motion.img
                    src="/public/about-image.png" // Replace with your actual image path
                    alt="About Me"
                    className="w-48 sm:w-64 rounded-lg shadow-lg"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                />
            </motion.div>

            {/* Skills Section */}
            <motion.div
                className="mt-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-6">
                    My Skills
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
                    {["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Framer Motion"].map((skill, index) => (
                        <motion.div
                            key={index}
                            className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-semibold"
                            whileHover={{ scale: 1.1 }}
                        >
                            {skill}
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Connect With Me Section */}
            <motion.div
                className="mt-12 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    Connect with Me
                </h2>
                <div className="flex justify-center gap-6">
                    {/* LinkedIn */}
                    <a
                        href="https://linkedin.com/in/your-linkedin-profile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 dark:text-blue-400 hover:scale-110 transition-transform"
                    >
                        <i className="fab fa-linkedin text-3xl"></i>
                    </a>
                    {/* GitHub */}
                    <a
                        href="https://github.com/your-github-profile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-900 dark:text-gray-300 hover:scale-110 transition-transform"
                    >
                        <i className="fab fa-github text-3xl"></i>
                    </a>
                    {/* LeetCode */}
                    <a
                        href="https://leetcode.com/your-leetcode-profile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-500 hover:scale-110 transition-transform"
                    >
                        <i className="fas fa-code text-3xl"></i>
                    </a>
                </div>
            </motion.div>
        </motion.div>
    );
}
