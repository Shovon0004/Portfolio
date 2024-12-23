import React from "react";
import { motion } from "framer-motion";

const Blog = () => {
  const blogs = [
    {
      title: "Understanding React Hooks",
      url: "https://medium.com/your-profile/react-hooks",
      description: "A beginner's guide to understanding and using React Hooks effectively.",
    },
    {
      title: "CSS Tricks for Modern Web Design",
      url: "https://medium.com/your-profile/css-tricks",
      description: "Explore some advanced CSS techniques to create stunning web pages.",
    },
    {
      title: "Getting Started with Machine Learning",
      url: "https://medium.com/your-profile/machine-learning",
      description: "An introductory guide to the world of Machine Learning and its applications.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-white p-8">
      <motion.div
        className="text-center mb-8"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold mb-2">My Blogs</h1>
        <p className="text-lg text-gray-400">Sharing knowledge and ideas on Medium</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
        {blogs.map((blog, index) => (
          <motion.a
            key={index}
            href={blog.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:scale-105"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-white">{blog.title}</h2>
            <p className="text-gray-400">{blog.description}</p>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default Blog;