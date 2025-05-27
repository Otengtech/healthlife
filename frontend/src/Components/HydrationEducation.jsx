import React from "react";
import {
  FaTint,
  FaGlassWhiskey,
  FaAppleAlt,
  FaHeartbeat,
} from "react-icons/fa";
import hydrationImg from "../assets/hydration.jpg"; // (Optional) Replace with a real hydration image

const HydrationEducation = () => {
  return (
    <section className="w-full bg-white text-gray-800">
      {/* Hero Section */}
      <div className="relative">
        <div className="w-full h-[350px] bg-green-600 rounded-b-lg"></div>
        <div className="absolute inset-0 flex items-center justify-center text-white text-center px-4">
          <div>
            <h1 className="text-4xl font-bold mb-3 pt-8">Hydration</h1>
            <p className="text-lg max-w-2xl mx-auto">
              Staying hydrated is crucial for your body’s daily functions, energy levels, and overall health.
            </p>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="py-12 px-6 max-w-6xl mx-auto grid gap-10 lg:grid-cols-2 items-center">
        <div className="space-y-6 animate-slideUp">
          <h2 className="text-3xl font-bold text-green-600">Why Hydration Matters</h2>
          <p>
            Hydration plays a vital role in maintaining body temperature, transporting nutrients, and supporting organ function. Dehydration can lead to fatigue, headaches, and impaired concentration.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Improves energy and focus</li>
            <li>Supports digestion and detoxification</li>
            <li>Regulates body temperature</li>
            <li>Enhances skin health and elasticity</li>
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-6 text-center">
          <div className="bg-blue-100 cursor-pointer p-6 rounded-lg shadow-md hover:scale-105 transition-all duration-300">
            <FaTint className="text-4xl text-blue-600 mx-auto mb-2" />
            <h3 className="font-bold text-lg">Water</h3>
            <p className="text-sm">The best hydration source. Aim for 6–8 glasses daily depending on activity level.</p>
          </div>
          <div className="bg-cyan-100 cursor-pointer p-6 rounded-lg shadow-md hover:scale-105 transition-all duration-300">
            <FaGlassWhiskey className="text-4xl text-cyan-600 mx-auto mb-2" />
            <h3 className="font-bold text-lg">Electrolytes</h3>
            <p className="text-sm">Help maintain fluid balance, especially after intense workouts or hot weather.</p>
          </div>
          <div className="bg-green-100 cursor-pointer p-6 rounded-lg shadow-md hover:scale-105 transition-all duration-300">
            <FaAppleAlt className="text-4xl text-green-600 mx-auto mb-2" />
            <h3 className="font-bold text-lg">Hydrating Foods</h3>
            <p className="text-sm">Fruits and veggies like cucumber, watermelon, and oranges contribute to hydration.</p>
          </div>
          <div className="bg-pink-100 cursor-pointer p-6 rounded-lg shadow-md hover:scale-105 transition-all duration-300">
            <FaHeartbeat className="text-4xl text-pink-500 mx-auto mb-2" />
            <h3 className="font-bold text-lg">Heart & Kidney Health</h3>
            <p className="text-sm">Proper hydration supports heart rate, blood pressure, and kidney function.</p>
          </div>
        </div>
      </div>

      {/* Final Call-to-Action */}
      <div className="text-gray-600 text-center py-12 px-4 animate-fadeInUp">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          Drink Up and Stay Energized!
        </h2>
        <p className="text-md md:text-lg max-w-2xl mx-auto">
          Make water your best friend — hydrate regularly and nourish your body from within for optimal wellness.
        </p>
      </div>
    </section>
  );
};

export default HydrationEducation;
