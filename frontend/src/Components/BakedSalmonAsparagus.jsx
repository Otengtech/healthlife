import React, { useEffect, useRef, useState } from "react";
import {
  FaCheckCircle,
  FaHeart,
  FaInfoCircle,
  FaLeaf,
} from "react-icons/fa";
import salmonImg from "../assets/baked-salmon.webp"; // Update with your image path

const BakedSalmonAsparagus = () => {
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
          src={salmonImg}
          alt="Baked Salmon with Asparagus"
          className={`rounded-3xl shadow-xl max-w-md w-full transition-transform duration-1000 ${
            inView ? "scale-100" : "scale-90"
          }`}
        />
      </div>

      {/* Text Left */}
      <div className="lg:w-1/2 space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-green-400 flex items-center gap-2">
          Baked Salmon with Asparagus: Simple & Nutritious
        </h2>

        <p className="text-gray-700 leading-relaxed">
          A flavorful and healthy meal packed with omega-3 fatty acids,
          vitamins, and antioxidants. Perfect for a balanced dinner.
        </p>

        {/* Ingredients */}
        <div>
          <h3 className="text-xl font-semibold text-green-400 mb-2 flex items-center gap-2">
            <FaCheckCircle className="text-green-500" /> Ingredients
          </h3>
          <ul className="list-disc ml-5 text-gray-700 space-y-1">
            <li><FaLeaf className="inline mr-2 text-green-500" /> 2 salmon fillets</li>
            <li><span className="inline text-green-600">1 bunch asparagus, trimmed</span></li>
            <li><span className="inline text-yellow-500">2 tbsp olive oil</span></li>
            <li><span className="inline text-red-500">2 cloves garlic, minced</span></li>
            <li>Salt, pepper, and lemon slices to taste</li>
            <li>
              <FaHeart className="inline mr-2 text-pink-400" />
              Optional: fresh dill or parsley for garnish
            </li>
          </ul>
        </div>

        {/* Preparation */}
        <div>
          <h3 className="text-xl font-semibold text-green-400 mb-2 flex items-center gap-2">
            <FaInfoCircle className="text-blue-500" /> How to Make It
          </h3>
          <ol className="list-decimal ml-5 text-gray-700 space-y-1">
            <li>Preheat oven to 400°F (200°C).</li>
            <li>Place salmon and asparagus on a baking sheet lined with parchment paper.</li>
            <li>Drizzle olive oil, sprinkle garlic, salt, and pepper over everything.</li>
            <li>Add lemon slices on top of salmon.</li>
            <li>Bake for 12–15 minutes until salmon is cooked through and asparagus is tender.</li>
            <li>Garnish with dill or parsley before serving.</li>
          </ol>
        </div>

        {/* Health Benefits */}
        <div>
          <h3 className="text-xl font-semibold text-green-400 mb-2 flex items-center gap-2">
            <span className="text-purple-500">Health Benefits</span>
          </h3>
          <p className="text-gray-700">
            🐟 Rich in <strong>omega-3 fatty acids, protein, and antioxidants</strong>.
            Supports heart health, brain function, and reduces inflammation.
          </p>
        </div>

        {/* Why You’ll Love It */}
        <div>
          <h3 className="text-xl font-semibold text-green-400 mb-2 flex items-center gap-2">
            <FaHeart className="text-pink-500" /> Why You’ll Love It
          </h3>
          <ul className="list-disc ml-5 text-gray-700 space-y-1">
            <li>Easy to prepare in under 30 minutes</li>
            <li>Light yet satisfying meal</li>
            <li>Perfect for paleo and keto diets</li>
            <li>Minimal cleanup required</li>
          </ul>
        </div>

        {/* Pro Tip */}
        <div className="bg-green-50 border-l-4 border-green-400 p-4 mt-4 rounded-lg">
          <p className="text-green-800 font-medium">
            💡 Pro Tip: Let salmon rest for a few minutes after baking to keep it juicy!
          </p>
        </div>
      </div>
    </section>
  );
};

export default BakedSalmonAsparagus;
