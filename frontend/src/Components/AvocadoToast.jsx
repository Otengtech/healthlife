import React, { useEffect, useRef, useState } from "react";
import {
  FaLeaf,
  FaCheckCircle,
  FaHeart,
  FaInfoCircle,
  FaEgg,
  FaFireAlt,
  FaBreadSlice,
  FaLemon,
  FaLightbulb,
} from "react-icons/fa";
import { GiOlive, GiHealthPotion } from "react-icons/gi";
import avocadoImg from "../assets/avocado-toast.webp";

const AvocadoToast = () => {
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
      className={`flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-28 py-28 gap-12 transition-all duration-1000 ease-in-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Left - Content */}
      <div className="lg:w-1/2 space-y-8 text-gray-700">
        <h2 className="text-3xl md:text-4xl font-bold text-green-600 flex items-center gap-3">
          <FaLeaf className="text-green-500" /> Avocado Toast: Power-Packed Wellness
        </h2>

        <p className="text-lg leading-relaxed">
          Start your day strong with this creamy, nutrient-dense dish! Avocado toast is a global favorite thanks to its
          <strong> simplicity</strong>, <strong>bold flavor</strong>, and 
          <strong> incredible health benefits</strong>.
        </p>

        {/* Ingredients */}
        <div>
          <h3 className="text-xl font-semibold text-green-700 mb-2 flex items-center gap-2">
            <FaCheckCircle className="text-green-500" /> Ingredients You’ll Need
          </h3>
          <ul className="space-y-2 pl-5">
            <li className="flex items-center gap-2">
              <FaBreadSlice className="text-yellow-600" />
              2 slices whole grain or sourdough bread
            </li>
            <li className="flex items-center gap-2">
              <FaLeaf className="text-green-500" />
              1 ripe avocado
            </li>
            <li className="flex items-center gap-2">
              <FaLemon className="text-yellow-500" />
              A dash of lemon juice
            </li>
            <li className="flex items-center gap-2">
              <GiOlive className="text-green-700" />
              1 tsp olive oil (optional)
            </li>
            <li className="flex items-center gap-2">
              <FaFireAlt className="text-red-500" />
              Chili flakes, salt, pepper
            </li>
            <li className="flex items-center gap-2">
              <FaEgg className="text-orange-400" />
              Optional: Poached egg, tomato, microgreens
            </li>
          </ul>
        </div>

        {/* Preparation */}
        <div>
          <h3 className="text-xl font-semibold text-green-700 mb-2 flex items-center gap-2">
            <FaInfoCircle className="text-blue-500" /> How to Prepare
          </h3>
          <ol className="list-decimal space-y-2 pl-5">
            <li>Toast your bread until golden and crisp.</li>
            <li>Mash avocado with lemon juice, salt, and pepper.</li>
            <li>Spread the mixture generously on toast.</li>
            <li>Top with chili flakes, eggs, or veggies as desired.</li>
          </ol>
        </div>

        {/* Nutritional Info */}
        <div>
          <h3 className="text-xl font-semibold text-green-700 mb-2 flex items-center gap-2">
            <GiHealthPotion className="text-purple-600" /> Nutritional Benefits
          </h3>
          <p>
            🥑 Rich in <strong>healthy fats</strong>, <strong>fiber</strong>, <strong>potassium</strong>, and 
            <strong> vitamin E</strong>. Supports heart health, boosts metabolism, and keeps you fuller longer.
          </p>
        </div>

        {/* Importance */}
        <div>
          <h3 className="text-xl font-semibold text-green-700 mb-2 flex items-center gap-2">
            <FaHeart className="text-pink-500" /> Why It Matters
          </h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Boosts energy</strong> and supports <strong>weight management</strong></li>
            <li><strong>Improves digestion</strong> and promotes <strong>brain health</strong></li>
            <li>Great for <strong>vegetarians</strong>, adaptable to <strong>keto & paleo diets</strong></li>
            <li>Sweet or savory—<strong>fully customizable</strong></li>
          </ul>
        </div>

        {/* Tip Box */}
        <div className="bg-green-100 border-l-4 border-green-500 p-4 rounded-lg flex items-start gap-3">
          <FaLightbulb className="text-green-500 text-xl mt-1" />
          <p className="text-green-900 font-medium">
            Pro Tip: Add a poached egg or sprinkle hemp seeds on top for an extra protein boost!
          </p>
        </div>
      </div>

      {/* Right - Image */}
      <div className="lg:w-1/2 flex justify-center">
        <img
          src={avocadoImg}
          alt="Avocado Toast"
          className={`rounded-3xl shadow-2xl w-full max-w-md transform transition duration-1000 ${
            inView ? "scale-100" : "scale-90"
          }`}
        />
      </div>
    </section>
  );
};

export default AvocadoToast;
