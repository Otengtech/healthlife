import React from "react";
import {
  FaClock,
  FaUtensils,
  FaRegCalendarAlt,
  FaHeartbeat,
} from "react-icons/fa";

const MealTimingFrequency = () => {
  return (
    <section className="w-full bg-white text-gray-800">
      {/* Hero Section */}
      <div className="relative">
        <div className="w-full h-[350px] bg-green-600 rounded-b-lg"></div>
        <div className="absolute inset-0 flex items-center justify-center text-white text-center px-4">
          <div>
            <h1 className="text-4xl font-bold mb-3 pt-8">Meal Timing & Frequency</h1>
            <p className="text-lg max-w-2xl mx-auto">
              The timing and frequency of your meals can significantly impact your energy, metabolism, and overall health.
            </p>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="py-12 px-6 max-w-6xl mx-auto grid gap-10 lg:grid-cols-2 items-center">
        <div className="space-y-6 animate-slideUp">
          <h2 className="text-3xl font-bold text-green-600">Optimize Your Meal Schedule</h2>
          <p>
            When and how often you eat affects digestion, blood sugar levels, and energy balance. Tailoring your meal timing to your lifestyle can improve performance and wellness.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Supports stable energy throughout the day</li>
            <li>Improves metabolism and nutrient absorption</li>
            <li>Helps regulate hunger and prevent overeating</li>
            <li>Can enhance workout recovery and performance</li>
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-6 text-center">
          <div className="bg-yellow-100 cursor-pointer p-6 rounded-lg shadow-md hover:scale-105 transition-all duration-300">
            <FaClock className="text-4xl text-yellow-600 mx-auto mb-2" />
            <h3 className="font-bold text-lg">Regular Intervals</h3>
            <p className="text-sm">Eating meals every 3-4 hours helps maintain energy and keeps hunger at bay.</p>
          </div>
          <div className="bg-orange-100 cursor-pointer p-6 rounded-lg shadow-md hover:scale-105 transition-all duration-300">
            <FaUtensils className="text-4xl text-orange-600 mx-auto mb-2" />
            <h3 className="font-bold text-lg">Balanced Meals</h3>
            <p className="text-sm">Include protein, carbs, and fats in each meal for sustained fullness and nutrient supply.</p>
          </div>
          <div className="bg-blue-100 cursor-pointer p-6 rounded-lg shadow-md hover:scale-105 transition-all duration-300">
            <FaRegCalendarAlt className="text-4xl text-blue-600 mx-auto mb-2" />
            <h3 className="font-bold text-lg">Meal Timing Strategies</h3>
            <p className="text-sm">Explore intermittent fasting, smaller frequent meals, or intuitive eating based on your needs.</p>
          </div>
          <div className="bg-green-100 cursor-pointer p-6 rounded-lg shadow-md hover:scale-105 transition-all duration-300">
            <FaHeartbeat className="text-4xl text-green-600 mx-auto mb-2" />
            <h3 className="font-bold text-lg">Listen to Your Body</h3>
            <p className="text-sm">Adjust meal frequency and timing to your hunger cues and daily routine for optimal health.</p>
          </div>
        </div>
      </div>

      {/* Final Call-to-Action */}
      <div className="text-gray-600 text-center py-12 px-4 animate-fadeInUp">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          Time Your Meals, Fuel Your Life
        </h2>
        <p className="text-md md:text-lg max-w-2xl mx-auto">
          Developing a meal schedule that suits your lifestyle can help boost energy, improve digestion, and support your wellness goals.
        </p>
      </div>
    </section>
  );
};

export default MealTimingFrequency;
