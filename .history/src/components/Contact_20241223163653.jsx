import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            const result = await response.json();
            setStatus(result.message);
            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            setStatus("An error occurred. Please try again.");
        }
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
                style={{ backgroundImage:("")}}
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
