const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5000; // Port from environment variable (for deployment)

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Nodemailer Transporter Setup (for Gmail)
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER, // Use environment variable for email
        pass: process.env.EMAIL_PASS, // Use environment variable for password or app-specific password
    },
});

// POST Route to Handle Form Submission
app.post("/api/contact", (req, res) => {
    const { name, email, message } = req.body;

    // Input validation (optional but recommended)
    if (!name || !email || !message) {
        return res.status(400).json({ message: "All fields are required!" });
    }

    // Email Configuration
    const mailOptions = {
        from: email,
        to: process.env.RECIPIENT_EMAIL, // Use environment variable for recipient email
        subject: `Contact Form Submission from ${name}`,
        text: `You have received a new message from the contact form on your website.\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Send Email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error("Error sending email:", error);
            return res.status(500).json({ message: "Error sending message. Please try again." });
        }
        res.status(200).json({ message: "Your message has been sent successfully!" });
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
