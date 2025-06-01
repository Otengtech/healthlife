import React, { useEffect, useRef, useState } from "react";
import {
  FaCheckCircle,
  FaHeart,
  FaInfoCircle,
  FaLeaf,
} from "react-icons/fa";
import parfaitImg from "../assets/yogurt-parfait.webp"; // Update image path

const GreekYogurtParfait = () => {
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
          src={parfaitImg}
          alt="Greek Yogurt Parfait"
          className={`rounded-3xl shadow-xl max-w-md w-full transition-transform duration-1000 ${
            inView ? "scale-100" : "scale-90"
          }`}
        />
      </div>

      {/* Text Left */}
      <div className="lg:w-1/2 space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-green-400 flex items-center gap-2">
          Greek Yogurt Parfait: Fresh & Creamy Delight
        </h2>

        <p className="text-gray-700 leading-relaxed">
          A refreshing and nutritious parfait layered with creamy Greek yogurt,
          fresh fruits, and crunchy granola. Perfect for breakfast or a healthy snack.
        </p>

        {/* Ingredients */}
        <div>
          <h3 className="text-xl font-semibold text-green-400 mb-2 flex items-center gap-2">
            <FaCheckCircle className="text-green-500" /> Ingredients
          </h3>
          <ul className="list-disc ml-5 text-gray-700 space-y-1">
            <li><FaLeaf className="inline mr-2 text-green-500" /> 1 cup Greek yogurt</li>
            <li><span className="inline text-red-500">1/2 cup mixed berries (strawberries, blueberries, raspberries)</span></li>
            <li><span className="inline text-yellow-500">1/4 cup granola</span></li>
            <li>1 tbsp honey or maple syrup (optional)</li>
            <li>
              <FaHeart className="inline mr-2 text-pink-400" />
              Optional: chia seeds or nuts for extra crunch
            </li>
          </ul>
        </div>

        {/* Preparation */}
        <div>
          <h3 className="text-xl font-semibold text-green-400 mb-2 flex items-center gap-2">
            <FaInfoCircle className="text-blue-500" /> How to Make It
          </h3>
          <ol className="list-decimal ml-5 text-gray-700 space-y-1">
            <li>In a glass or bowl, layer 1/3 of the Greek yogurt.</li>
            <li>Add a layer of mixed berries.</li>
            <li>Sprinkle granola over the berries.</li>
            <li>Repeat layers until all ingredients are used.</li>
            <li>Drizzle honey or maple syrup on top, if desired.</li>
            <li>Sprinkle chia seeds or nuts for added texture.</li>
          </ol>
        </div>

        {/* Health Benefits */}
        <div>
          <h3 className="text-xl font-semibold text-green-400 mb-2 flex items-center gap-2">
            <span className="text-purple-500">Health Benefits</span>
          </h3>
          <p className="text-gray-700">
            🥛 Packed with <strong>protein, probiotics, antioxidants, and fiber</strong>.
            Supports digestion, boosts immunity, and promotes healthy skin.
          </p>
        </div>

        {/* Why You’ll Love It */}
        <div>
          <h3 className="text-xl font-semibold text-green-400 mb-2 flex items-center gap-2">
            <FaHeart className="text-pink-500" /> Why You’ll Love It
          </h3>
          <ul className="list-disc ml-5 text-gray-700 space-y-1">
            <li>Quick to assemble</li>
            <li>Light yet filling</li>
            <li>Customizable with any fruits or toppings</li>
            <li>Great for all ages</li>
          </ul>
        </div>

        {/* Pro Tip */}
        <div className="bg-green-50 border-l-4 border-green-400 p-4 mt-4 rounded-lg">
          <p className="text-green-800 font-medium">
            💡 Pro Tip: Chill your glass beforehand for an extra refreshing parfait!
          </p>
        </div>
      </div>
    </section>
  );
};

export default GreekYogurtParfait;
