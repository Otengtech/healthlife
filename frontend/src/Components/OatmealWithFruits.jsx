import React, { useEffect, useRef, useState } from "react";
import {
  FaCheckCircle,
  FaHeart,
  FaInfoCircle,
  FaAppleAlt,
} from "react-icons/fa";
import {
  GiFruitBowl,
  GiHealthPotion,
  GiSpoon,
  GiWheat,
} from "react-icons/gi";
import oatmealImg from "../assets/oatmeal-fruits.jpg"; // update with correct path

const OatmealWithFruits = () => {
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
          src={oatmealImg}
          alt="Oatmeal with Fruits"
          className={`rounded-3xl shadow-xl max-w-md w-full transition-transform duration-1000 ${
            inView ? "scale-100" : "scale-90"
          }`}
        />
      </div>

      {/* Text Right */}
      <div className="lg:w-1/2 space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-600 flex items-center gap-2">
          <GiFruitBowl /> Oatmeal with Fruits: A Perfect Morning Boost
        </h2>

        <p className="text-gray-700 leading-relaxed">
          Start your day with this energizing, fiber-rich bowl packed with fruits and whole grains.
        </p>

        {/* Ingredients */}
        <div>
          <h3 className="text-xl font-semibold text-yellow-700 mb-2 flex items-center gap-2">
            <FaCheckCircle className="text-yellow-500" /> Ingredients
          </h3>
          <ul className="list-disc ml-5 text-gray-700 space-y-1">
            <li>
              <GiWheat className="inline mr-2 text-orange-600" />
              1/2 cup rolled oats
            </li>
            <li>
              <FaAppleAlt className="inline mr-2 text-red-500" />
              1/2 sliced apple + 1/2 banana
            </li>
            <li>
              <GiSpoon className="inline mr-2 text-blue-600" />
              1 tbsp chia seeds or flaxseeds
            </li>
            <li>
              <FaHeart className="inline mr-2 text-pink-500" />
              1 cup milk or plant-based milk
            </li>
            <li>
              <GiFruitBowl className="inline mr-2 text-green-500" />
              Berries, nuts, or honey for topping
            </li>
          </ul>
        </div>

        {/* Preparation */}
        <div>
          <h3 className="text-xl font-semibold text-yellow-700 mb-2 flex items-center gap-2">
            <FaInfoCircle className="text-blue-500" /> How to Prepare
          </h3>
          <ol className="list-decimal ml-5 text-gray-700 space-y-1">
            <li>Cook oats in milk for 5–7 mins until creamy.</li>
            <li>Add chia seeds while cooking, stir well.</li>
            <li>Top with sliced fruits and nuts.</li>
            <li>Drizzle honey or maple syrup if desired.</li>
          </ol>
        </div>

        {/* Health Benefits */}
        <div>
          <h3 className="text-xl font-semibold text-yellow-700 mb-2 flex items-center gap-2">
            <GiHealthPotion className="text-purple-500" /> Health Benefits
          </h3>
          <p className="text-gray-700">
            🥣 Full of <strong>complex carbs, antioxidants, and dietary fiber</strong>—perfect for heart health and steady energy release.
          </p>
        </div>

        {/* Why You'll Love It */}
        <div>
          <h3 className="text-xl font-semibold text-yellow-700 mb-2 flex items-center gap-2">
            <FaHeart className="text-pink-500" /> Why You’ll Love It
          </h3>
          <ul className="list-disc ml-5 text-gray-700 space-y-1">
            <li>Fast to make</li>
            <li>Sweet, creamy & naturally nourishing</li>
            <li>Customizable toppings</li>
            <li>Great for kids and adults alike</li>
          </ul>
        </div>

        {/* Pro Tip */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4 rounded-lg">
          <p className="text-yellow-800 font-medium">
            💡 Pro Tip: Soak oats overnight for extra creaminess and faster prep!
          </p>
        </div>
      </div>
    </section>
  );
};

export default OatmealWithFruits;
