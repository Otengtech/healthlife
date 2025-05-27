import React from "react";
import {
  FaDumbbell,
  FaFire,
  FaRunning,
  FaCarrot,
} from "react-icons/fa";

const SportsNutrition = () => {
  return (
    <section className="w-full bg-white text-gray-800">
      {/* Hero Section */}
      <div className="relative">
        <div className="w-full h-[350px] bg-green-600 rounded-b-lg"></div>
        <div className="absolute inset-0 flex items-center justify-center text-white text-center px-4">
          <div>
            <h1 className="text-4xl font-bold mb-3 pt-8">Sports Nutrition</h1>
            <p className="text-lg max-w-2xl mx-auto">
              Fueling your body with the right nutrients enhances performance, recovery, and overall athletic health.
            </p>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="py-12 px-6 max-w-6xl mx-auto grid gap-10 lg:grid-cols-2 items-center">
        <div className="space-y-6 animate-slideUp">
          <h2 className="text-3xl font-bold text-green-600">Nutrition for Active Bodies</h2>
          <p>
            Athletes and active individuals require proper nutrition to support energy demands, muscle repair, endurance, and hydration. A balanced approach ensures peak performance and sustained wellness.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Optimizes physical performance and stamina</li>
            <li>Speeds up muscle recovery and repair</li>
            <li>Supports energy metabolism and endurance</li>
            <li>Prevents fatigue, cramps, and overtraining injuries</li>
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-6 text-center">
          <div className="bg-orange-100 cursor-pointer p-6 rounded-lg shadow-md hover:scale-105 transition-all duration-300">
            <FaFire className="text-4xl text-orange-600 mx-auto mb-2" />
            <h3 className="font-bold text-lg">Fuel for Energy</h3>
            <p className="text-sm">Carbohydrates provide the primary fuel source for workouts and endurance sports.</p>
          </div>
          <div className="bg-red-100 cursor-pointer p-6 rounded-lg shadow-md hover:scale-105 transition-all duration-300">
            <FaDumbbell className="text-4xl text-red-600 mx-auto mb-2" />
            <h3 className="font-bold text-lg">Protein for Recovery</h3>
            <p className="text-sm">Essential for muscle repair and growth after strength training or intense exercise.</p>
          </div>
          <div className="bg-green-100 cursor-pointer p-6 rounded-lg shadow-md hover:scale-105 transition-all duration-300">
            <FaCarrot className="text-4xl text-green-600 mx-auto mb-2" />
            <h3 className="font-bold text-lg">Micronutrient Support</h3>
            <p className="text-sm">Vitamins and minerals help reduce inflammation and maintain immune health.</p>
          </div>
          <div className="bg-blue-100 cursor-pointer p-6 rounded-lg shadow-md hover:scale-105 transition-all duration-300">
            <FaRunning className="text-4xl text-blue-600 mx-auto mb-2" />
            <h3 className="font-bold text-lg">Hydration & Timing</h3>
            <p className="text-sm">Water, electrolytes, and proper meal timing enhance performance and reduce fatigue.</p>
          </div>
        </div>
      </div>

      {/* Final Call-to-Action */}
      <div className="text-gray-600 text-center py-12 px-4 animate-fadeInUp">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          Eat Smart, Train Hard, Recover Strong
        </h2>
        <p className="text-md md:text-lg max-w-2xl mx-auto">
          With the right nutrition plan, your body will be energized, resilient, and ready for every challenge — on and off the field.
        </p>
      </div>
    </section>
  );
};

export default SportsNutrition;
