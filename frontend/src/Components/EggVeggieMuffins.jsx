import React, { useEffect, useRef, useState } from "react";
import {
  FaCheckCircle,
  FaHeart,
  FaInfoCircle,
  FaLeaf,
} from "react-icons/fa";
import eggVeggieMuffinsImg from "../assets/egg-muffins.webp"; // Update with your image path

const EggVeggieMuffins = () => {
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
          src={eggVeggieMuffinsImg}
          alt="Egg & Veggie Muffins"
          className={`rounded-3xl shadow-xl max-w-md w-full transition-transform duration-1000 ${
            inView ? "scale-100" : "scale-90"
          }`}
        />
      </div>

      {/* Text Left */}
      <div className="lg:w-1/2 space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-green-400 flex items-center gap-2">
          Egg & Veggie Muffins: Protein-Packed & Portable
        </h2>

        <p className="text-gray-700 leading-relaxed">
          Delicious mini muffins filled with eggs and colorful veggies — perfect for quick breakfasts or snacks.
        </p>

        {/* Ingredients */}
        <div>
          <h3 className="text-xl font-semibold text-green-400 mb-2 flex items-center gap-2">
            <FaCheckCircle className="text-green-500" /> Ingredients
          </h3>
          <ul className="list-disc ml-5 text-gray-700 space-y-1">
            <li><FaLeaf className="inline mr-2 text-green-500" /> 6 large eggs</li>
            <li>1/2 cup diced bell peppers (any color)</li>
            <li>1/4 cup chopped spinach or kale</li>
            <li>1/4 cup diced onion</li>
            <li><span className="inline text-yellow-500">1/4 cup shredded cheese (optional)</span></li>
            <li>Salt and pepper to taste</li>
            <li><FaHeart className="inline mr-2 text-pink-400" /> 1 tsp olive oil or cooking spray</li>
          </ul>
        </div>

        {/* Preparation */}
        <div>
          <h3 className="text-xl font-semibold text-green-400 mb-2 flex items-center gap-2">
            <FaInfoCircle className="text-blue-500" /> How to Make It
          </h3>
          <ol className="list-decimal ml-5 text-gray-700 space-y-1">
            <li>Preheat oven to 350°F (175°C) and grease a muffin tin with oil or cooking spray.</li>
            <li>In a bowl, whisk eggs with salt and pepper.</li>
            <li>Stir in bell peppers, spinach, onion, and cheese if using.</li>
            <li>Pour mixture evenly into muffin cups.</li>
            <li>Bake for 18-20 minutes or until muffins are set and lightly golden.</li>
            <li>Cool slightly before removing and serve warm or store for later.</li>
          </ol>
        </div>

        {/* Health Benefits */}
        <div>
          <h3 className="text-xl font-semibold text-green-400 mb-2 flex items-center gap-2">
            <span className="text-purple-500">Health Benefits</span>
          </h3>
          <p className="text-gray-700">
            🥚 High in <strong>protein, vitamins, and antioxidants</strong>. Great for muscle repair, energy, and immune support.
          </p>
        </div>

        {/* Why You’ll Love It */}
        <div>
          <h3 className="text-xl font-semibold text-green-400 mb-2 flex items-center gap-2">
            <FaHeart className="text-pink-500" /> Why You’ll Love It
          </h3>
          <ul className="list-disc ml-5 text-gray-700 space-y-1">
            <li>Easy to make ahead and grab on the go</li>
            <li>Customizable with your favorite veggies or cheese</li>
            <li>Low carb, keto-friendly option</li>
            <li>Kid-friendly and delicious</li>
          </ul>
        </div>

        {/* Pro Tip */}
        <div className="bg-green-50 border-l-4 border-green-400 p-4 mt-4 rounded-lg">
          <p className="text-green-800 font-medium">
            💡 Pro Tip: Add a pinch of smoked paprika or chili flakes for a flavor kick!
          </p>
        </div>
      </div>
    </section>
  );
};

export default EggVeggieMuffins;
