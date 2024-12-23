import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);  const sendEmail = (e) => {
    e.persist();
    e.preventDefault();
    setIsSubmitting(true);    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          setStateMessage('Message sent!');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        },
        (error) => {
          setStateMessage('Something went wrong, please try again later');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        }
      );
    
    // Clears the form after sending the email
    e.target.reset();
  };
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
                Contact Me
            </motion.h1>

            {/* Form Section */}
            <motion.div
                className="max-w-2xl mx-auto "
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name Input */}
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />

                    {/* Email Input */}
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />

                    {/* Message Input */}
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your Message"
                        rows="5"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    ></textarea>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
                    >
                        Send Message
                    </button>
                </form>

                {/* Status Message */}
                {status && (
                    <div
                        className={`mt-4 p-4 text-center rounded-lg ${
                            status.includes("error")
                                ? "bg-red-500 text-white"
                                : "bg-green-500 text-white"
                        }`}
                    >
                        {status}
                    </div>
                )}
            </motion.div>
            <motion.div
                            className=" grid  place-items-end  dark:bg-gray-900"
                        initial={{ opacity: 0, y: -100 }}
                                animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}>
                            
                            <img className="sm:w-96 w-48 place-items-end mb-10" src="/public/11.png" alt="image2" />   
                        </motion.div>
        </motion.div>
    );
}
