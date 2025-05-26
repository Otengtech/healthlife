import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true
}));
app.use(express.json());

// MongoDB
mongoose.connect(process.env.MONGODB_STRING)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection failed:", err.message));

// Contact Form
app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "otengebenezer326@gmail.com", // Your email
      subject: `Message from ${name}`,
      text: `Email: ${email}\n\nMessage:\n${message}`
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email successfully sent" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Error sending email" });
  }
});

// Newsletter
app.post("/subscribe", async (req, res) => {
  const { email } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "otengebenezer326@gmail.com",
      subject: "New Newsletter Subscriber",
      text: `A new user has subscribed to your newsletter: ${email}`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Subscribed successfully!" });
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    res.status(500).json({ message: "Subscription failed." });
  }
});

// Review Model
const reviewSchema = new mongoose.Schema({
  name: String,
  comment: String,
  date: { type: Date, default: Date.now },
});

const Review = mongoose.model("Review", reviewSchema);

// Add Review
app.post("/reviews", async (req, res) => {
  try {
    const { name, comment } = req.body;
    if (!name || !comment) {
      return res.status(400).json({ error: "Name and comment are required" });
    }

    const review = new Review({ name, comment });
    await review.save();
    res.status(201).json(review);
  } catch (err) {
    console.error("Failed to save review:", err);
    res.status(500).json({ error: "Failed to save review" });
  }
});

// Get All Reviews
app.get("/reviews", async (req, res) => {
  try {
    const reviews = await Review.find().sort({ date: -1 });
    res.json(reviews);
  } catch (err) {
    console.error("Error fetching reviews:", err);
    res.status(500).json({ error: "Failed to fetch reviews" });
  }
});

app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
