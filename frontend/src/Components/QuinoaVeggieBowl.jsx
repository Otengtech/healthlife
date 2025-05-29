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
import {
  GiBowlOfRice,
  GiHealthPotion,
  GiOlive,
  GiBroccoli,
} from "react-icons/gi";
import quinoaVeggieImg from "../assets/qvb.jpg"; // Update this path if necessary

const QuinoaVeggieBowl = () => {
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
      {/* Left - Image */}
      <div className="lg:w-1/2 mb-10 lg:mb-0">
        <img
          src={quinoaVeggieImg}
          alt="Quinoa Veggie Bowl"
          className={`rounded-3xl shadow-xl max-w-md w-full transition-transform duration-1000 ${
            inView ? "scale-100" : "scale-90"
          }`}
        />
      </div>

      {/* Right - Text */}
      <div className="lg:w-1/2 space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-green-600 flex items-center gap-2">
          <GiBowlOfRice /> Quinoa Veggie Bowl: Plant-Powered Fuel
        </h2>

        <p className="text-gray-700 leading-relaxed">
          A colorful, plant-based bowl packed with <strong>fiber, protein, and vitamins</strong>. Perfect for vegetarians or anyone craving a clean, energizing meal.
        </p>

        {/* Ingredients */}
        <div>
          <h3 className="text-xl font-semibold text-green-700 mb-2 flex items-center gap-2">
            <FaCheckCircle className="text-green-500" /> Ingredients
          </h3>
          <ul className="list-disc ml-5 text-gray-700 space-y-1">
            <li>
              <GiBowlOfRice className="inline mr-2 text-yellow-500" />
              1 cup cooked quinoa
            </li>
            <li>
              <GiBroccoli className="inline mr-2 text-green-600" /> Steamed broccoli and bell peppers
            </li>
            <li>
              <FaCarrot className="inline mr-2 text-orange-500" /> Shredded carrots & red cabbage
            </li>
            <li>
              <FaLeaf className="inline mr-2 text-green-500" /> Baby spinach or kale
            </li>
            <li>
              <GiOlive className="inline mr-2 text-green-700" /> Olive oil, lemon juice
            </li>
            <li>
              <FaPepperHot className="inline mr-2 text-red-500" /> Salt, pepper, herbs
            </li>
          </ul>
        </div>

        {/* Preparation */}
        <div>
          <h3 className="text-xl font-semibold text-green-700 mb-2 flex items-center gap-2">
            <FaInfoCircle className="text-blue-500" /> How to Make It
          </h3>
          <ol className="list-decimal ml-5 text-gray-700 space-y-1">
            <li>Cook quinoa until fluffy and let cool slightly.</li>
            <li>Steam or sauté the veggies lightly.</li>
            <li>In a bowl, layer quinoa, greens, and veggies.</li>
            <li>Drizzle with olive oil and lemon juice, season to taste.</li>
          </ol>
        </div>

        {/* Benefits */}
        <div>
          <h3 className="text-xl font-semibold text-green-700 mb-2 flex items-center gap-2">
            <GiHealthPotion className="text-purple-500" /> Nutritional Power
          </h3>
          <p className="text-gray-700">
            🌿 Quinoa is a <strong>complete protein</strong> and a fantastic{" "}
            <strong>fiber source</strong>. Combined with veggies, it boosts{" "}
            <strong>digestion, immunity</strong>, and provides{" "}
            <strong>slow-releasing energy</strong>.
          </p>
        </div>

        {/* Why It Matters */}
        <div>
          <h3 className="text-xl font-semibold text-green-700 mb-2 flex items-center gap-2">
            <FaHeart className="text-pink-500" /> Why You’ll Love It
          </h3>
          <ul className="list-disc ml-5 text-gray-700 space-y-1">
            <li>Perfect for meal prep and quick lunchboxes</li>
            <li>Supports weight control and digestion</li>
            <li>Great source of iron, magnesium, and antioxidants</li>
            <li>Customizable with sauces, seeds, or avocado</li>
          </ul>
        </div>

        {/* Pro Tip */}
        <div className="bg-green-50 border-l-4 border-green-400 p-4 mt-4 rounded-lg">
          <p className="text-green-800 font-medium">
            💡 Pro Tip: Add hummus or tahini drizzle for extra flavor & creaminess!
          </p>
        </div>
      </div>
    </section>
  );
};

export default QuinoaVeggieBowl;
