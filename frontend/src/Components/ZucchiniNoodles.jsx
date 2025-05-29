import React, { useEffect, useRef, useState } from "react";
import {
  FaCheckCircle,
  FaHeart,
  FaInfoCircle,
  FaLeaf,
} from "react-icons/fa";
import zucchiniImg from "../assets/zucchini-noodles.jpg"; // ✅ Replace with actual image path

const ZucchiniNoodles = () => {
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
          src={zucchiniImg}
          alt="Zucchini Noodles"
          className={`rounded-3xl shadow-xl max-w-md w-full transition-transform duration-1000 ${
            inView ? "scale-100" : "scale-90"
          }`}
        />
      </div>

      {/* Text Left */}
      <div className="lg:w-1/2 space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-green-400 flex items-center gap-2">
          Zucchini Noodles: Light, Fresh & Guilt-Free
        </h2>

        <p className="text-gray-700 leading-relaxed">
          Zoodles are spiralized zucchini strands — the perfect low-carb,
          gluten-free alternative to traditional pasta, full of freshness and nutrients.
        </p>

        {/* Ingredients */}
        <div>
          <h3 className="text-xl font-semibold text-green-400 mb-2 flex items-center gap-2">
            <FaCheckCircle className="text-green-500" /> Ingredients
          </h3>
          <ul className="list-disc ml-5 text-gray-700 space-y-1">
            <li><FaLeaf className="inline mr-2 text-green-500" /> 2 medium zucchinis</li>
            <li><span className="inline text-yellow-500">1 tbsp olive oil</span></li>
            <li><span className="inline text-red-500">2 cloves garlic, minced</span></li>
            <li>Salt & pepper to taste</li>
            <li>
              <FaHeart className="inline mr-2 text-pink-400" />
              Optional: cherry tomatoes, basil, parmesan
            </li>
          </ul>
        </div>

        {/* Preparation */}
        <div>
          <h3 className="text-xl font-semibold text-green-400 mb-2 flex items-center gap-2">
            <FaInfoCircle className="text-blue-500" /> How to Make It
          </h3>
          <ol className="list-decimal ml-5 text-gray-700 space-y-1">
            <li>Spiralize the zucchinis using a spiralizer or julienne peeler.</li>
            <li>Heat olive oil in a pan and sauté garlic for 1 minute.</li>
            <li>Add zucchini noodles and toss for 2–3 minutes until slightly soft.</li>
            <li>Season and serve immediately with your favorite toppings.</li>
          </ol>
        </div>

        {/* Health Benefits */}
        <div>
          <h3 className="text-xl font-semibold text-green-400 mb-2 flex items-center gap-2">
            <span className="text-purple-500">Health Benefits</span>
          </h3>
          <p className="text-gray-700">
            🌱 Packed with <strong>fiber, antioxidants, and hydration</strong>.
            Zucchini supports digestion, eye health, and weight loss.
          </p>
        </div>

        {/* Why You’ll Love It */}
        <div>
          <h3 className="text-xl font-semibold text-green-400 mb-2 flex items-center gap-2">
            <FaHeart className="text-pink-500" /> Why You’ll Love It
          </h3>
          <ul className="list-disc ml-5 text-gray-700 space-y-1">
            <li>Low in carbs & calories</li>
            <li>Ready in under 10 minutes</li>
            <li>Customizable with any sauce</li>
            <li>Great for keto, vegan, and paleo diets</li>
          </ul>
        </div>

        {/* Pro Tip */}
        <div className="bg-green-50 border-l-4 border-green-400 p-4 mt-4 rounded-lg">
          <p className="text-green-800 font-medium">
            💡 Pro Tip: Avoid overcooking zoodles — they should stay firm to prevent sogginess!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ZucchiniNoodles;
