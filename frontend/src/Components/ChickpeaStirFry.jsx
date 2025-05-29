import React, { useEffect, useRef, useState } from "react";
import {
  FaCheckCircle,
  FaHeart,
  FaInfoCircle,
  FaLeaf,
} from "react-icons/fa";
import chickpeaImg from "../assets/chickpea-stirfry.jpg"; // Update image path

const ChickpeaStirFry = () => {
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
      className={`flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-28 transition-all duration-1000 ease-in-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Image Left */}
      <div className="lg:w-1/2 mb-10 lg:mb-0">
        <img
          src={chickpeaImg}
          alt="Chickpea Stir Fry"
          className={`rounded-3xl shadow-xl max-w-md w-full transition-transform duration-1000 ${
            inView ? "scale-100" : "scale-90"
          }`}
        />
      </div>

      {/* Text Right */}
      <div className="lg:w-1/2 space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-600 flex items-center gap-2">
          Chickpea Stir Fry: Fast & Flavorful
        </h2>

        <p className="text-gray-700 leading-relaxed">
          A quick and satisfying dish full of protein, fiber, and colorful veggies. Ideal for lunch or a light dinner!
        </p>

        {/* Ingredients */}
        <div>
          <h3 className="text-xl font-semibold text-yellow-700 mb-2 flex items-center gap-2">
            <FaCheckCircle className="text-yellow-500" /> Ingredients
          </h3>
          <ul className="list-disc ml-5 text-gray-700 space-y-1">
            <li>
              <div className="inline mr-2 text-orange-600">
              1 can chickpeas (drained & rinsed)
               </div>
            </li>
            <li>
              <FaLeaf className="inline mr-2 text-green-500" /> 1 cup broccoli florets
            </li>
            <li>
              <div className="inline mr-2 text-yellow-500">
              1 tbsp olive oil
              </div>
            </li>
            <li>
              <div className="inline mr-2 text-red-500">
              2 tbsp soy sauce + 1 tsp garlic
              </div>
            </li>
            <li>
              <FaHeart className="inline mr-2 text-pink-400" />
              Optional: red pepper flakes or sesame seeds
            </li>
          </ul>
        </div>

        {/* Preparation */}
        <div>
          <h3 className="text-xl font-semibold text-yellow-700 mb-2 flex items-center gap-2">
            <FaInfoCircle className="text-blue-500" /> How to Make It
          </h3>
          <ol className="list-decimal ml-5 text-gray-700 space-y-1">
            <li>Heat olive oil in a pan over medium heat.</li>
            <li>Add garlic, chickpeas, and veggies; stir-fry for 5–7 minutes.</li>
            <li>Pour soy sauce and spices; toss well.</li>
            <li>Serve hot with rice or flatbread.</li>
          </ol>
        </div>

        {/* Health Benefits */}
        <div>
          <h3 className="text-xl font-semibold text-yellow-700 mb-2 flex items-center gap-2">
            <div className="text-purple-500" > Health Benefits</div>
          </h3>
          <p className="text-gray-700">
            🌿 Rich in <strong>plant protein, iron, and fiber</strong>. Great for digestion, muscle recovery, and keeping you full for longer.
          </p>
        </div>

        {/* Why You’ll Love It */}
        <div>
          <h3 className="text-xl font-semibold text-yellow-700 mb-2 flex items-center gap-2">
            <FaHeart className="text-pink-500" /> Why You’ll Love It
          </h3>
          <ul className="list-disc ml-5 text-gray-700 space-y-1">
            <li>Quick & customizable</li>
            <li>Delicious plant-based meal</li>
            <li>Perfect for meal prep</li>
            <li>Works with any seasonal veggies</li>
          </ul>
        </div>

        {/* Pro Tip */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4 rounded-lg">
          <p className="text-yellow-800 font-medium">
            💡 Pro Tip: Add a dash of lemon juice or tahini for extra flavor!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ChickpeaStirFry;
