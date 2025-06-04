import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../App.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import wall4 from "../assets/wall4.webp";

import scurvyImg from "../assets/scurvy.webp";
import ricketsImg from "../assets/rickets.webp";
import pellagraImg from "../assets/pellagra.webp";
import beriberiImg from "../assets/beriberi.webp";
import nightBlindnessImg from "../assets/night-blindness.webp";

import { FaBrain, FaCarrot, FaRunning } from "react-icons/fa";

const HealthyFoods = () => {
  const sentences = [
    "Live Healthy, Stay Fit",
    "Eat Clean, Train Hard",
    "Fuel Your Body Right",
    "Strong Mind, Strong Body",
    "Wellness Starts Within",
    "Health is True Wealth",
  ];

  const services = [
    {
      icon: <FaRunning className="text-red-400 text-center text-4xl" />,
      title: "Personal Training",
      description:
        "Tailored fitness programs to meet your specific goals and needs.",
      to: "/personaltraining",
    },
    {
      icon: <FaCarrot className="text-yellow-400 text-center text-4xl" />,
      title: "Nutrition Counseling",
      description: "Get expert advice on your diet and eating habits.",
      to: "/nutritioncounseling",
    },
    {
      icon: <FaBrain className="text-green-500 text-center text-4xl" />,
      title: "Mental Wellness",
      description:
        "Support your mental health through mindfulness and counseling.",
      to: "/mentalwellness",
    },
  ];

  const diseases = [
    {
      name: "Scurvy",
      description: "Scurvy is a disease resulting from a vitamin C deficiency.",
      image: scurvyImg,
      symptoms: ["Bleeding gums", "Weakness", "Bruising", "Joint pain"],
      causes: "Vitamin C deficiency (lack of citrus fruits/vegetables).",
      prevention: [
        "Eat citrus fruits like oranges and lemons",
        "Include broccoli, strawberries, and bell peppers in your diet",
      ],
    },
    {
      name: "Rickets",
      description:
        "Rickets causes weak and soft bones in children due to vitamin D deficiency.",
      image: ricketsImg,
      symptoms: ["Soft, weak bones", "Delayed growth", "Bowed legs"],
      causes: "Vitamin D, calcium, or phosphate deficiency.",
      prevention: [
        "Ensure adequate sun exposure",
        "Include fortified dairy, fish, and eggs in diet",
      ],
    },
    {
      name: "Pellagra",
      description: "Pellagra is a niacin (Vitamin B3) deficiency disease.",
      image: pellagraImg,
      symptoms: ["Dermatitis", "Diarrhea", "Dementia"],
      causes: "Niacin (Vitamin B3) deficiency.",
      prevention: [
        "Consume protein-rich foods like meat, fish, and legumes",
        "Use fortified cereals and grains",
      ],
    },
    {
      name: "Beriberi",
      description:
        "Beriberi is caused by thiamine (Vitamin B1) deficiency, affecting the nervous system.",
      image: beriberiImg,
      symptoms: ["Weak muscles", "Difficulty walking", "Heart problems"],
      causes: "Thiamine (Vitamin B1) deficiency.",
      prevention: [
        "Eat whole grains, nuts, and seeds",
        "Avoid excessive alcohol",
      ],
    },
    {
      name: "Night Blindness",
      description:
        "Night blindness is a condition caused by Vitamin A deficiency, leading to poor vision in low light.",
      image: nightBlindnessImg,
      symptoms: ["Poor vision in low light", "Dry eyes"],
      causes: "Vitamin A deficiency.",
      prevention: [
        "Eat carrots, sweet potatoes, and leafy greens",
        "Include liver and dairy in diet",
      ],
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % sentences.length);
    }, 8000); // Change every 8 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 3);
    }, 300);

    return () => clearInterval(interval);
  }, []);

  const myNavigate = useNavigate();

  return (
    <div>
      <section
        style={{ backgroundImage: `url(${wall4})` }}
        className="min-h-screen relative bg-cover bg-center flex items-center justify-center text-center p-6"
      >
        <div className="absolute top-0 z-0 left-0 w-full h-screen bg-black/50"></div>

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 space-y-6 max-w-4xl mx-auto px-4 text-white text-center md:text-left"
        >
          {/* Headings */}
          <motion.h1 className="text-3xl pt-14 md:text-5xl font-extrabold text-left leading-tight">
            WELCOME TO HEALTHLIFE
          </motion.h1>

          <div className="h-[100px] md:h-[150px] overflow-hidden relative">
            <AnimatePresence mode="wait">
              <motion.h2
                key={sentences[index]}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="text-5xl md:text-7xl drop-shadow-lg font-bold md:text-left text-left text-green-500 absolute w-full"
              >
                {sentences[index]}
              </motion.h2>
            </AnimatePresence>
          </div>

          {/* Paragraph */}
          <p className="text-left md:text-lg max-w-xl mx-auto md:mx-0 text-white">
            Your trusted companion for balanced living — find workouts, foods,
            and wellness tips tailored to you.
          </p>

          {/* Buttons */}
          <motion.div className="flex md:flex-row justify-center md:justify-start items-center gap-4 mt-6">
            <button className="bg-gray-700 shadow-lg hover:bg-gray-600 text-white px-8 py-3 rounded-full font-semibold transition">
              <Link to="/blog">Blog</Link>
            </button>
            <button className="bg-green-500 shadow-lg hover:bg-green-400 text-gray-100 px-6 py-3 rounded-full font-semibold transition">
              <Link to="/recipe">Recipes</Link>
            </button>
          </motion.div>

          {/* Animated Dots */}
          <motion.div className="flex items-center justify-center md:justify-start space-x-3">
            {[0, 1, 2].map((index) => (
              <div
                key={index}
                className={`w-5 h-5 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-green-500 scale-150"
                    : "bg-white scale-100"
                }`}
              ></div>
            ))}
          </motion.div>
        </motion.div>
      </section>
      {/* SERVICES SECTION */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            Empowering your mind and body with personalized wellness services.
          </p>
          <div className="grid gap-10 md:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-green-50 p-6 rounded-lg shadow-md"
                whileHover={{ scale: 1.03 }}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 40 }}
                transition={{ duration: 0.4 }}
              >
                <div className="w-full flex justify-center my-3">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-green-700 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-700 mb-4">{service.description}</p>
                <button
                  onClick={() => myNavigate(service.to)}
                  className="text-white bg-green-500 px-6 py-2 rounded-full hover:bg-green-400 transition"
                >
                  Read More
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 px-6 md:px-20 bg-white dark:bg-slate-900 text-slate-800 dark:text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-green-500 mb-6">
            Why Living a Healthy Life Matters
          </h2>
          <p className="text-lg md:text-xl mb-10">
            Living a healthy life isn't just about looking good—it's about
            feeling energized, preventing disease, and living longer. Here are
            key reasons why you should start prioritizing your health today.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-green-500 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold mb-2">Boosts Energy</h3>
            <p>
              A healthy lifestyle improves stamina, sharpens focus, and helps
              you power through your day with less fatigue.
            </p>
          </div>

          <div className="bg-green-500 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold mb-2">Prevents Diseases</h3>
            <p>
              Proper nutrition and exercise reduce the risk of chronic illnesses
              like diabetes, heart disease, and obesity.
            </p>
          </div>

          <div className="bg-green-500 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold mb-2">
              Improves Mental Health
            </h3>
            <p>
              Regular activity and good nutrition can lower stress, anxiety, and
              improve your overall mood and well-being.
            </p>
          </div>
        </div>
      </section>

      <section className="py-28 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8 text-green-800">
          Some Diseases & Prevention
        </h2>

        <div className="overflow-hidden relative">
          <div className="grid grid-cols- sm:grid-3 md:grid-cols-3 gap-6 px-4">
            {diseases.map((disease, index) => (
              <div
                key={index}
                className="min-w-[300px] bg-white rounded-2xl p-4 transition hover:scale-105 duration-300"
              >
                <img
                  src={disease.image}
                  alt={disease.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-green-700 mb-2">
                  {disease.name}
                </h3>

                <p className="text-sm font-bold text-gray-600">Symptoms:</p>
                <ul className="text-sm list-disc list-inside mb-2 text-gray-700">
                  {disease.symptoms.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>

                <p className="text-sm font-bold text-gray-600">Causes:</p>
                <p className="text-sm mb-2 text-gray-700">{disease.causes}</p>

                <p className="text-sm font-bold text-gray-600">Prevention:</p>
                <ul className="text-sm list-disc list-inside text-gray-700">
                  {disease.prevention.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HealthyFoods;
