const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the 'frontend' directory
app.use(express.static(path.join(__dirname, 'frontend')));

// Parse JSON requests
app.use(express.json());

// Define allowed origins
const allowedOrigins = process.env.ALLOWED_ORIGINS.split(',');

// CORS middleware to allow requests from allowed origins
app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  // Other CORS headers can be added here if needed
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Define an API endpoint for sending emails
app.post('/send-email', async (req, res) => {
  try {
    const formData = req.body;

    const email = process.env.GMAIL_EMAIL;
    const password = process.env.GMAIL_PASSWORD;

    // Create a Nodemailer transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: email,
        pass: password,
      },
      secure: true, // Use TLS
      tls: {
        // For security reasons, only use secure protocols
        ciphers: 'TLS_AES_128_GCM_SHA256',
      },
    });

    // Email content
    const mailOptions = {
      from: email,
      to: formData.email, // Recipient's email from the form
      subject: 'Form Submission',
      text: JSON.stringify(formData, null, 2), // Convert the data to a JSON string
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Respond with a JSON object containing a 'message' property
    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    // Respond with a JSON object containing an 'error' property
    return res.status(500).json({ error: 'Email could not be sent' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
