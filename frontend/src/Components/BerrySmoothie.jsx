import React, { useEffect, useRef, useState } from "react";
import {
  FaCheckCircle,
  FaHeart,
  FaInfoCircle,
  FaLeaf,
  FaGlassWhiskey,
} from "react-icons/fa";
import { GiHealthPotion, GiFruitBowl, GiMilkCarton } from "react-icons/gi";
import berrySmoothieImg from "../assets/berry-smoothie.webp"; // Update path if needed

const BerrySmoothie = () => {
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
      {/* Text - Right Side */}
      <div className="lg:w-1/2 space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-pink-600 flex items-center gap-2">
          <FaGlassWhiskey /> Berry Smoothie: A Sweet Health Boost
        </h2>

        <p className="text-gray-700 leading-relaxed">
          Start your morning with this{" "}
          <strong>antioxidant-rich smoothie</strong>, full of fresh berries,
          yogurt, and natural energy. It’s refreshing, tasty, and nourishing!
        </p>

        {/* Ingredients */}
        <div>
          <h3 className="text-xl font-semibold text-pink-700 mb-2 flex items-center gap-2">
            <FaCheckCircle className="text-pink-500" /> Ingredients
          </h3>
          <ul className="list-disc ml-5 text-gray-700 space-y-1">
            <li>
              <GiFruitBowl className="inline mr-2 text-red-500" />1 cup mixed
              berries (strawberries, blueberries, raspberries)
            </li>
            <li>
              <GiMilkCarton className="inline mr-2 text-blue-400" />½ cup Greek
              yogurt
            </li>
            <li>
              <FaLeaf className="inline mr-2 text-green-500" /> A handful of
              spinach (optional)
            </li>
            <li>
              <GiHealthPotion className="inline mr-2 text-purple-500" />½ banana
              + ½ cup milk or almond milk
            </li>
            <li>
              <FaHeart className="inline mr-2 text-pink-400" />1 tsp honey or
              maple syrup (optional)
            </li>
          </ul>
        </div>

        {/* Preparation */}
        <div>
          <h3 className="text-xl font-semibold text-pink-700 mb-2 flex items-center gap-2">
            <FaInfoCircle className="text-blue-500" /> How to Make It
          </h3>
          <ol className="list-decimal ml-5 text-gray-700 space-y-1">
            <li>Add all ingredients to a blender.</li>
            <li>Blend until smooth and creamy.</li>
            <li>Taste and adjust sweetness if needed.</li>
            <li>Pour into a glass and enjoy chilled!</li>
          </ol>
        </div>

        {/* Benefits */}
        <div>
          <h3 className="text-xl font-semibold text-pink-700 mb-2 flex items-center gap-2">
            <GiHealthPotion className="text-purple-500" /> Health Benefits
          </h3>
          <p className="text-gray-700">
            🍓 Berries are loaded with <strong>antioxidants</strong> that fight
            free radicals. This smoothie supports{" "}
            <strong>skin health, immunity, digestion</strong>, and provides a
            light energy boost.
          </p>
        </div>

        {/* Why You’ll Love It */}
        <div>
          <h3 className="text-xl font-semibold text-pink-700 mb-2 flex items-center gap-2">
            <FaHeart className="text-pink-500" /> Why You’ll Love It
          </h3>
          <ul className="list-disc ml-5 text-gray-700 space-y-1">
            <li>Refreshing and naturally sweet</li>
            <li>Great post-workout or breakfast option</li>
            <li>Boosts energy and hydration</li>
            <li>Kid-friendly and easy to make</li>
          </ul>
        </div>

        {/* Pro Tip */}
        <div className="bg-pink-50 border-l-4 border-pink-400 p-4 mt-4 rounded-lg">
          <p className="text-pink-800 font-medium">
            💡 Pro Tip: Add a scoop of protein powder or chia seeds for a fuller
            meal!
          </p>
        </div>
      </div>

      {/* Image - Left Side */}
      <div className="lg:w-1/2 mb-10 lg:mb-0">
        <img
          src={berrySmoothieImg}
          alt="Berry Smoothie"
          className={`rounded-3xl shadow-xl max-w-md w-full transition-transform duration-1000 ${
            inView ? "scale-100" : "scale-90"
          }`}
        />
      </div>
    </section>
  );
};

export default BerrySmoothie;
