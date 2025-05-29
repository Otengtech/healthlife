import React, { useState, useEffect } from "react";
import "../App.css";
import { Link } from "react-router-dom";
const API_URL = import.meta.env.VITE_API_URL;

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (!email) return alert("Please enter your email.");

    try {
      const res = await fetch(`${API_URL}/api/subscribe`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      alert(data.message);
      setEmail("");
    } catch (err) {
      alert("Subscription failed. Please try again later.");
    }
  };
  return (
    <footer className="bg-gray-900 text-gray-300 pt-14 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 pb-10 border-b border-gray-700">
        {/* Brand Intro */}
        <div>
          <h2 className="text-2xl font-bold text-green-500 mb-4">HealthLife</h2>
          <p className="text-sm leading-relaxed text-gray-400">
            Your partner in wellness. Empowering lives with tips on nutrition,
            fitness, and mental well-being.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-green-500 mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-green-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-green-400 transition">
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/aboutussection"
                className="hover:text-green-400 transition"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contactussection"
                className="hover:text-green-400 transition"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-green-400 transition">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-green-500 mb-4">
            Services
          </h3>
          <ul className="space-y-2 text-sm">
            <li>Nutrition Advice</li>
            <li>Fitness Coaching</li>
            <li>Mental Wellness</li>
            <li>Health Articles</li>
          </ul>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="max-w-4xl mx-auto mt-10 pt-10">
        <h3 className="text-xl font-semibold text-green-400 mb-4 text-center">
          Subscribe to Our Newsletter
        </h3>
        <p className="text-sm text-gray-400 mb-4 text-center">
          Get weekly health tips and updates delivered straight to your inbox.
        </p>
        <form
          onSubmit={handleSubscribe}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="px-4 py-2 text-gray-700 placeholder:text-gray-500 rounded-md w-full sm:w-96 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 px-6 py-2 rounded-md text-white transition"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-sm text-gray-500 mt-12 border-t pt-10 border-t-gray-700 pb-4">
        © {new Date().getFullYear()}{" "}
        <span className="text-green-400 font-semibold">HealthLife</span>. All
        rights reserved.
      </div>
      <div className="text-center text-sm text-green-500 pb-8">
        Designed by Ebenezer Oteng Siaw
      </div>
    </footer>
  );
};

export default Footer;
