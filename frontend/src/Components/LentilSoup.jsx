import React, { useEffect, useRef, useState } from "react";
import {
  FaCheckCircle,
  FaHeart,
  FaInfoCircle,
  FaLeaf,
} from "react-icons/fa";
import lentilSoupImg from "../assets/lentil-soup.jpg"; // Update image path

const LentilSoup = () => {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => sectionRef.current && observer.unobserve(sectionRef.current);
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`flex flex-col lg:flex-row-reverse items-center justify-between px-6 lg:px-20 py-28 transition-all duration-1000 ease-in-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Image Right */}
      <div className="lg:w-1/2 mb-10 lg:mb-0">
        <img
          src={lentilSoupImg}
          alt="Lentil Soup"
          className={`rounded-3xl shadow-xl max-w-md w-full transition-transform duration-1000 ${
            inView ? "scale-100" : "scale-90"
          }`}
        />
      </div>

      {/* Text Left */}
      <div className="lg:w-1/2 space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-green-400 flex items-center gap-2">
          Lentil Soup: Warm & Nourishing
        </h2>

        <p className="text-gray-700 leading-relaxed">
          A hearty and comforting soup packed with protein, fiber, and warming spices — perfect for any season.
        </p>

        {/* Ingredients */}
        <div>
          <h3 className="text-xl font-semibold text-green-400 mb-2 flex items-center gap-2">
            <FaCheckCircle className="text-green-500" /> Ingredients
          </h3>
          <ul className="list-disc ml-5 text-gray-700 space-y-1">
            <li><FaLeaf className="inline mr-2 text-green-500" /> 1 cup dried lentils, rinsed</li>
            <li>1 tbsp olive oil</li>
            <li>1 onion, diced</li>
            <li>2 cloves garlic, minced</li>
            <li><span className="inline text-yellow-500">2 carrots, diced</span></li>
            <li>1 celery stalk, diced</li>
            <li>1 tsp cumin</li>
            <li>4 cups vegetable broth</li>
            <li><FaHeart className="inline mr-2 text-pink-400" /> Salt and pepper to taste</li>
          </ul>
        </div>

        {/* Preparation */}
        <div>
          <h3 className="text-xl font-semibold text-green-400 mb-2 flex items-center gap-2">
            <FaInfoCircle className="text-blue-500" /> How to Make It
          </h3>
          <ol className="list-decimal ml-5 text-gray-700 space-y-1">
            <li>Heat olive oil in a large pot over medium heat.</li>
            <li>Sauté onion, garlic, carrots, and celery until softened.</li>
            <li>Add lentils, cumin, and vegetable broth; bring to a boil.</li>
            <li>Reduce heat and simmer for 25-30 minutes until lentils are tender.</li>
            <li>Season with salt and pepper.</li>
            <li>Serve warm, optionally with a squeeze of lemon or fresh herbs.</li>
          </ol>
        </div>

        {/* Health Benefits */}
        <div>
          <h3 className="text-xl font-semibold text-green-400 mb-2 flex items-center gap-2">
            <span className="text-purple-500">Health Benefits</span>
          </h3>
          <p className="text-gray-700">
            🍲 Rich in <strong>plant protein, fiber, and antioxidants</strong>. Supports heart health, digestion, and sustained energy.
          </p>
        </div>

        {/* Why You’ll Love It */}
        <div>
          <h3 className="text-xl font-semibold text-green-400 mb-2 flex items-center gap-2">
            <FaHeart className="text-pink-500" /> Why You’ll Love It
          </h3>
          <ul className="list-disc ml-5 text-gray-700 space-y-1">
            <li>Easy to make and budget-friendly</li>
            <li>Comforting and filling</li>
            <li>Great for meal prep and leftovers</li>
            <li>Customizable with your favorite spices</li>
          </ul>
        </div>

        {/* Pro Tip */}
        <div className="bg-green-50 border-l-4 border-green-400 p-4 mt-4 rounded-lg">
          <p className="text-green-800 font-medium">
            💡 Pro Tip: Blend part of the soup for a creamier texture without cream!
          </p>
        </div>
      </div>
    </section>
  );
};

export default LentilSoup;
