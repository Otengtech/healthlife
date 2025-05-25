import React, { useState } from "react";
import "../App.css";
import axios from "axios";
import {Link} from "react-router-dom"

const Footer = () => {
  const [subscriber, setSubscriber] = useState("");
  const [subMessage, setSubMessage] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/subscribe`, {
        email: subscriber,
      });
      setSubMessage(res.data.message);
      alert("SENT");
      setSubscriber("");
    } catch (error) {
      setSubMessage("Subscription failed. Please try again.");
      console.log(error);
    } finally {
      setTimeout(() => setSubMessage(""), 5000);
    }
  };

  return (
    <footer className="bg-black text-gray-300 py-10 px-6 sm:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 animate-fadeIn">
        {/* About Section */}
        <div>
          <h2 className="text-green-500 text-xl font-semibold mb-4">
            HealthLife
          </h2>
          <p className="text-sm leading-relaxed">
            Your partner in wellness. Empowering lives through health tips,
            nutrition, fitness, and mental well-being content.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-green-500 text-lg font-semibold mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 flex flex-col text-sm">
            <Link
              to="/"
              className="hover:text-green-400 transition"
            >
              Home
            </Link>
            <Link
              to="/blog"
              className="hover:text-green-400 transition"
            >
              Blog
            </Link>
            <Link
              to="/aboutussection"
              className="hover:text-green-400 transition"
            >
              About
            </Link>
            <Link
              to="/contactussection"
              className="hover:text-green-400 transition"
            >
              Contact
            </Link>
            <Link
              to="/privacy"
              className="hover:text-green-500 transition"
            >
              Privacy Policy
            </Link>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-green-500 text-lg font-semibold mb-4">
            Services
          </h3>
          <ul className="space-y-2 text-sm">
            <li>Nutrition Advice</li>
            <li>Fitness Coaching</li>
            <li>Mental Wellness</li>
            <li>Health Articles</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-green-500 text-lg font-semibold mb-4">
            Newsletter
          </h3>
          <p className="text-sm mb-3">
            Stay updated with the latest health trends.
          </p>
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row gap-2"
          >
            <input
              type="email"
              value={subscriber}
              onChange={(e) => setSubscriber(e.target.value)}
              required
              placeholder="Enter your email"
              className="w-full px-4 py-2 text-sm rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-400 px-4 py-2 text-sm rounded transition"
            >
              Subscribe
            </button>
          </form>
          {subMessage && (
            <p
              className={`mt-4 text-sm ${
                subMessage.toLowerCase().includes("success")
                  ? "text-green-400"
                  : "text-red-400"
              }`}
            >
              {subMessage}
            </p>
          )}
        </div>
      </div>

      <div className="text-center text-sm mt-10 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} HealthLife. All rights reserved.
      </div>
      <div className="text-center text-md text-green-500 mt-4">Designed by Ebenezer Oteng Siaw</div>
    </footer>
  );
};

export default Footer;
