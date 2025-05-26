import React, { useState } from "react";
import { motion } from "framer-motion";
import Footer from "./Footer"
const api = import.meta.env._API_URL;

const ContactUsSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${api}/send-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log("Email Sent:", data);
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message.");
    }
  };

  return (
    <>
    <section className="bg-white py-24 px-3 text-gray-800">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-4xl font-bold text-green-600 mb-4">Contact Us</h2>
        <p className="text-gray-600">
          Got a question, feedback, or want to collaborate? We'd love to hear from you.
          Fill out the form below and our team will get back to you shortly.
        </p>
      </div>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto bg-green-50 p-4 rounded-lg shadow-lg grid gap-6"
      >
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded w-full"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded w-full"
          />
        </div>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Your Message..."
          value={formData.message}
          onChange={handleChange}
          className="p-3 border border-gray-300 rounded w-full"
        />
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          className="bg-green-500 hover:bg-green-400 text-white px-6 py-3 rounded text-lg font-medium"
        >
          Send Message
        </motion.button>
      </motion.form>

      {/* Thank You Modal */}
      {submitted && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center w-full max-w-sm animate-fadeIn">
            <h3 className="text-xl font-semibold text-green-600 mb-2">Thank You!</h3>
            <p className="text-gray-700 mb-4">We’ve received your message and will get back to you soon.</p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-400"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
    <Footer />
    </>
  );
};

export default ContactUsSection;
