import React from "react";
import { motion } from "framer-motion";
import Footer from "./Footer"

import AboutWall from "../assets/team.webp"

const AboutUsSection = () => {
  return (
    <>
    <section className="bg-green-50 py-24 px-6 text-gray-800">
    <h2 className="text-4xl font-bold text-center text-green-600 mb-10">About Us</h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <motion.img
          src={AboutWall}
          alt="About our team picture"
          className="rounded-xl shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        />
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          
          <p className="mb-4 text-lg">
            At <strong>HealthLife</strong>, we believe that good health starts from within.
            Our mission is to inspire and empower individuals to adopt healthier lifestyles through
            sustainable habits, nutritious meals, and mindful practices.
          </p>
          <p className="mb-4">
            Founded by a team of certified nutritionists, trainers, and wellness experts, we bring
            you credible content, tasty recipes, guided workouts, and more to help you thrive.
          </p>
          <p>
            Whether you're starting your fitness journey or already on the path, we’re here to
            support your goals — one healthy step at a time.
          </p>
        </motion.div>
      </div>
    </section>
      <Footer />
      </>
  );
};

export default AboutUsSection;
