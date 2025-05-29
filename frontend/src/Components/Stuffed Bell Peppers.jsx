import React, { useEffect, useRef, useState } from "react";
import {
  FaCheckCircle,
  FaHeart,
  FaInfoCircle,
  FaLeaf,
} from "react-icons/fa";
import stuffedPeppersImg from "../assets/stuffed-peppers.jpg"; // Update image path

const StuffedBellPeppers = () => {
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
          src={stuffedPeppersImg}
          alt="Stuffed Bell Peppers"
          className={`rounded-3xl shadow-xl max-w-md w-full transition-transform duration-1000 ${
            inView ? "scale-100" : "scale-90"
          }`}
        />
      </div>

      {/* Text Left */}
      <div className="lg:w-1/2 space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-green-400 flex items-center gap-2">
          Stuffed Bell Peppers: Hearty & Healthy
        </h2>

        <p className="text-gray-700 leading-relaxed">
          Colorful bell peppers stuffed with a savory mix of rice, veggies, and protein — a comforting and nutritious meal.
        </p>

        {/* Ingredients */}
        <div>
          <h3 className="text-xl font-semibold text-green-400 mb-2 flex items-center gap-2">
            <FaCheckCircle className="text-green-500" /> Ingredients
          </h3>
          <ul className="list-disc ml-5 text-gray-700 space-y-1">
            <li><FaLeaf className="inline mr-2 text-green-500" /> 4 large bell peppers (any color)</li>
            <li><span className="inline text-yellow-500">1 cup cooked rice</span></li>
            <li>1 cup cooked ground meat or lentils (for vegetarian)</li>
            <li><span className="inline text-red-500">1 small onion, diced</span></li>
            <li>2 cloves garlic, minced</li>
            <li>1 cup diced tomatoes</li>
            <li><FaHeart className="inline mr-2 text-pink-400" /> 1/2 cup shredded cheese (optional)</li>
            <li>Salt, pepper, and herbs to taste (e.g., oregano, basil)</li>
          </ul>
        </div>

        {/* Preparation */}
        <div>
          <h3 className="text-xl font-semibold text-green-400 mb-2 flex items-center gap-2">
            <FaInfoCircle className="text-blue-500" /> How to Make It
          </h3>
          <ol className="list-decimal ml-5 text-gray-700 space-y-1">
            <li>Preheat oven to 375°F (190°C).</li>
            <li>Cut the tops off the peppers and remove seeds.</li>
            <li>Sauté onion and garlic until soft, then add meat or lentils and cook through.</li>
            <li>Mix cooked rice, tomatoes, and herbs into the sautéed mixture.</li>
            <li>Stuff peppers with the filling and place in a baking dish.</li>
            <li>Sprinkle cheese on top if using.</li>
            <li>Bake for 25–30 minutes until peppers are tender and cheese is melted.</li>
          </ol>
        </div>

        {/* Health Benefits */}
        <div>
          <h3 className="text-xl font-semibold text-green-400 mb-2 flex items-center gap-2">
            <span className="text-purple-500">Health Benefits</span>
          </h3>
          <p className="text-gray-700">
            🫑 Rich in <strong>vitamins A & C, fiber, and protein</strong>. Supports immune health, digestion, and muscle repair.
          </p>
        </div>

        {/* Why You’ll Love It */}
        <div>
          <h3 className="text-xl font-semibold text-green-400 mb-2 flex items-center gap-2">
            <FaHeart className="text-pink-500" /> Why You’ll Love It
          </h3>
          <ul className="list-disc ml-5 text-gray-700 space-y-1">
            <li>Balanced and filling</li>
            <li>Perfect for meal prep and leftovers</li>
            <li>Versatile for vegetarian or meat options</li>
            <li>Visually appealing & colorful</li>
          </ul>
        </div>

        {/* Pro Tip */}
        <div className="bg-green-50 border-l-4 border-green-400 p-4 mt-4 rounded-lg">
          <p className="text-green-800 font-medium">
            💡 Pro Tip: Use leftover cooked grains or veggies to reduce waste and save time!
          </p>
        </div>
      </div>
    </section>
  );
};

export default StuffedBellPeppers;
