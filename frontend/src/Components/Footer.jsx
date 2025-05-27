import React, { useState, useEffect } from "react";
import "../App.css";
import { Link } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL;

const Footer = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      setStatus({ type: "error", message: "Please enter a valid email." });
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("email", email);

      const res = await fetch(`${API_URL}/subscribe`, {
        method: "POST",
        body: formData, // no headers needed!
      });

      const data = await res.json();
      if (res.ok) {
        setStatus({ type: "success", message: data.message });
        setEmail("");
      } else {
        setStatus({
          type: "error",
          message: data.message || "Subscription failed.",
        });
      }
    } catch (error) {
      setStatus({ type: "error", message: "Network error, please try again." });
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        setStatus(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <footer className="bg-gray-900 text-gray-300 pt-14 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-gray-700">
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

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-green-500 mb-4">
            Newsletter
          </h3>
          <p className="text-sm mb-4 text-gray-400">
            Subscribe to get the latest health tips and updates.
          </p>
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row items-center gap-2"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
              className="w-full sm:flex-1 px-4 py-2 text-sm rounded bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              type="submit"
              disabled={loading}
              className={`${
                loading
                  ? "bg-green-300 cursor-not-allowed"
                  : "bg-green-500 hover:bg-green-400"
              } text-white px-4 py-2 rounded text-sm transition duration-300`}
            >
              {loading ? "Subscribing..." : "Subscribe"}
            </button>
          </form>
          {status && (
            <div
              className={`mt-3 text-sm font-medium transition-opacity duration-300 ${
                status.type === "success" ? "text-green-400" : "text-red-500"
              }`}
            >
              {status.message}
            </div>
          )}
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-sm text-gray-500 mt-6 pb-4">
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
