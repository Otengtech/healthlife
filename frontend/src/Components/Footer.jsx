import React, { useState, useEffect } from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Footer = () => {
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
