const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// POST route to handle forgot password
app.post('/forgot-password', (req, res) => {
    const { email } = req.body;

    // Configure the email transport using the default SMTP transport and a Gmail account
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER, // Your Gmail address from .env file
            pass: process.env.EMAIL_PASS  // Your Gmail password from .env file
        }
    });

    // Setup email data
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Password Reset',
        text: 'Click the link to reset your password: http://yourwebsite.com/reset-password'
    };

    // Send mail
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.status(200).send('Password reset link sent to your email.');
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
