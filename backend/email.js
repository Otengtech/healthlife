import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true,
}));
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection failed:", err.message));


app.get("/", (req, res) => {
  res.send("Welcome to HealthLife API!");
});

/* ------------------------------------------
   ✅ CONTACT FORM (Sends to Admin)
------------------------------------------ */
app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

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
      to: "otengebenezer326@gmail.com", // Admin email
      subject: `Message from ${name}`,
      text: `Email: ${email}\n\nMessage:\n${message}`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email successfully sent" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Error sending email" });
  }
});

/* ------------------------------------------
   ✅ NEWSLETTER SUBSCRIBE (Admin + User Mail)
------------------------------------------ */
app.post("/subscribe", async (req, res) => {
  console.log("Received body:", req.body);
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email to Admin
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: "otengebenezer326@gmail.com",
      subject: "New Newsletter Subscriber",
      text: `A new user has subscribed to your newsletter: ${email}`,
    };

    // Confirmation Email to Subscriber
    const subscriberMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank you for subscribing to HealthLife!",
      text: `Hi there! 👋\n\nThank you for subscribing to HealthLife. You’ll now receive regular health tips, updates, and exclusive wellness content.\n\nStay healthy!\n\n— HealthLife Team`,
    };

    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(subscriberMailOptions);

    res.status(200).json({ message: "Subscribed successfully!" });
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    res.status(500).json({ message: "Subscription failed." });
  }
});

/* ------------------------------------------
   ✅ REVIEW SCHEMA AND ROUTES
------------------------------------------ */
const reviewSchema = new mongoose.Schema({
  name: { type: String, required: true },
  comment: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const Review = mongoose.model("Review", reviewSchema);

// Create Review
app.post("/reviews", async (req, res) => {
  const { name, comment } = req.body;

  if (!name || !comment) {
    return res.status(400).json({ error: "Name and comment are required" });
  }

  try {
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
    res.status(200).json(reviews);
  } catch (err) {
    console.error("Error fetching reviews:", err);
    res.status(500).json({ error: "Failed to fetch reviews" });
  }
});

/* ------------------------------------------
   ✅ SERVER START
------------------------------------------ */
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
