const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Nodemailer Transporter Setup
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "shovonhalder04@gmail.com", // Replace with your email
        pass: "#313704#Sh", // Replace with your email password (or use OAuth for security)
    },
});

// POST Route to Handle Form Submission
app.post("/api/contact", (req, res) => {
    const { name, email, message } = req.body;

    // Email Configuration
    const mailOptions = {
        from: email,
        to: "", // Replace with your email address
        subject: `Contact Form Submission from ${name}`,
        text: `You have received a new message from the contact form on your website.\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Send Email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).json({ message: "Error sending message. Please try again." });
        }
        res.status(200).json({ message: "Your message has been sent successfully!" });
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
