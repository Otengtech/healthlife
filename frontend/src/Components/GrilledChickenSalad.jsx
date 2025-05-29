import React, { useEffect, useRef, useState } from "react";
import {
  FaLeaf,
  FaCheckCircle,
  FaHeart,
  FaInfoCircle,
  FaCarrot,
  FaAppleAlt,
  FaPepperHot,
} from "react-icons/fa";
import { GiChickenOven, GiHealthPotion, GiOlive } from "react-icons/gi";
import grilledChickenImg from "../assets/gcs.jpg"; // Make sure this path is correct

const GrilledChickenSalad = () => {
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
      className={`flex flex-col lg:flex-row items-center justify-between px-6 lg:px-28 py-28 transition-all duration-1000 ease-in-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Left - Text */}
      <div className="lg:w-1/2 space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-green-600 flex items-center gap-2">
          <GiChickenOven /> Grilled Chicken Salad: Clean, Lean, and Green
        </h2>

        <p className="text-gray-700 leading-relaxed">
          This vibrant, protein-packed salad is a <strong>nutrient powerhouse</strong>. Perfect for lunch or dinner, it blends fresh greens, juicy grilled chicken, and delicious dressing — keeping your goals on track without sacrificing flavor.
        </p>

        {/* Ingredients */}
        <div>
          <h3 className="text-xl font-semibold text-green-700 mb-2 flex items-center gap-2">
            <FaCheckCircle className="text-green-500" /> What You Need
          </h3>
          <ul className="list-disc ml-5 text-gray-700 space-y-1">
            <li>
              <GiChickenOven className="inline mr-2 text-orange-500" />
              1 grilled chicken breast (sliced)
            </li>
            <li>
              <FaLeaf className="inline mr-2 text-green-500" /> Mixed greens (spinach, kale, romaine)
            </li>
            <li>
              <FaCarrot className="inline mr-2 text-orange-400" /> Sliced cucumber & shredded carrots
            </li>
            <li>
              <FaAppleAlt className="inline mr-2 text-red-500" /> Cherry tomatoes, apple slices (optional)
            </li>
            <li>
              <GiOlive className="inline mr-2 text-green-600" /> Olive oil, lemon juice, balsamic vinegar
            </li>
            <li>
              <FaPepperHot className="inline mr-2 text-red-400" /> Salt, black pepper, herbs to taste
            </li>
          </ul>
        </div>

        {/* Preparation */}
        <div>
          <h3 className="text-xl font-semibold text-green-700 mb-2 flex items-center gap-2">
            <FaInfoCircle className="text-blue-500" /> How to Prepare
          </h3>
          <ol className="list-decimal ml-5 text-gray-700 space-y-1">
            <li>Grill the chicken with a pinch of salt, pepper, and herbs.</li>
            <li>Chop veggies and greens, mix them in a large bowl.</li>
            <li>Add sliced grilled chicken over the salad base.</li>
            <li>Drizzle with olive oil, lemon juice, and balsamic vinegar.</li>
          </ol>
        </div>

        {/* Nutritional Benefits */}
        <div>
          <h3 className="text-xl font-semibold text-green-700 mb-2 flex items-center gap-2">
            <GiHealthPotion className="text-purple-500" /> Nutritional Benefits
          </h3>
          <p className="text-gray-700">
            🥗 This salad delivers <strong>lean protein</strong>,{" "}
            <strong>vitamins A, C, K</strong>, <strong>fiber</strong>, and{" "}
            <strong>antioxidants</strong>. It promotes <strong>muscle repair</strong>,
            <strong>heart health</strong>, and a <strong>balanced metabolism</strong>.
          </p>
        </div>

        {/* Why It Matters */}
        <div>
          <h3 className="text-xl font-semibold text-green-700 mb-2 flex items-center gap-2">
            <FaHeart className="text-pink-500" /> Why It Matters
          </h3>
          <ul className="list-disc ml-5 text-gray-700 space-y-1">
            <li>
              Great for <strong>weight control</strong> &{" "}
              <strong>clean eating</strong>
            </li>
            <li>
              Supports <strong>muscle growth</strong> and{" "}
              <strong>bone strength</strong>
            </li>
            <li>
              A top choice for <strong>keto, paleo, and low-carb diets</strong>
            </li>
            <li>
              Easily customizable with fruits, nuts, or seeds
            </li>
          </ul>
        </div>

        {/* Pro Tip */}
        <div className="bg-green-50 border-l-4 border-green-400 p-4 mt-4 rounded-lg">
          <p className="text-green-800 font-medium">
            💡 Pro Tip: Add quinoa or chickpeas for extra fiber & minerals!
          </p>
        </div>
      </div>

      {/* Image */}
        <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center">
          <img
            src={grilledChickenImg}
            alt="Grilled Chicken Salad"
            className={`rounded-3xl shadow-xl max-w-md w-full transition-transform duration-1000 ${
              inView ? "scale-100" : "scale-90"
            }`}
          />
        </div>
    </section>
  );
};

export default GrilledChickenSalad;
