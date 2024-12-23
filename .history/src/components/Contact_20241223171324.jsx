import React, { useState } from "react";
import emailjs from "emailjs-com"; // Make sure to import emailjs

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");
    
    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        e.target,
        "YOUR_USER_ID" // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          setStatus("Message sent successfully!");
        },
        (error) => {
          setStatus("Error: " + error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="contact-form">
      <h2>Contact Me</h2>
      <form onSubmit={sendEmail}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
}
