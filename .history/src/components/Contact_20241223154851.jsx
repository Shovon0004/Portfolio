import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-6">
      {/* Heading */}
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-gray-800 mb-4"
      >
        Get in Touch
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-gray-600 text-center mb-8 max-w-lg"
      >
        I'd love to hear from you! Whether you have a question, want to
        collaborate, or just say hi, feel free to drop a message below.
      </motion.p>

      {/* Form */}
      <motion.form
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-white shadow-lg rounded-lg p-6"
      >
        <motion.input
          whileFocus={{ scale: 1.05 }}
          type="text"
          placeholder="Your Name"
          className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <motion.input
          whileFocus={{ scale: 1.05 }}
          type="email"
          placeholder="Your Email"
          className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <motion.textarea
          whileFocus={{ scale: 1.05 }}
          placeholder="Your Message"
          rows="5"
          className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 focus:outline-none"
        >
          Send Message
        </motion.button>
      </motion.form>
    </div>
  );
};

export default Contact;
