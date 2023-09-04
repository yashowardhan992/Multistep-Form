require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

const cors = require("cors");
const app = express();
const port = 3001; // You can choose any port

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/send-email", async (req, res) => {
  try {
    const formData = req.body;

    const email = process.env.GMAIL_EMAIL;
    const password = process.env.GMAIL_PASSWORD;

    // Create a Nodemailer transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: email,
        pass: password,
      },
      secure: true, // Use TLS
      tls: {
        // For security reasons, only use secure protocols
        ciphers: "TLS_AES_128_GCM_SHA256",
      },
    });

    // Email content
    const mailOptions = {
      from: email,
      to: formData.email, // Recipient's email from the form
      subject: "Form Submission",
      text: JSON.stringify(formData, null, 2), // Convert the data to a JSON string
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Email could not be sent" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
