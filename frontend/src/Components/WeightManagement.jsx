import React from "react";
import {
  FaBalanceScale,
  FaRunning,
  FaAppleAlt,
  FaClock,
} from "react-icons/fa";

const WeightManagement = () => {
  return (
    <section className="w-full bg-white text-gray-800">
      {/* Hero Section */}
      <div className="relative">
        <div className="w-full h-[350px] bg-green-600 rounded-b-lg"></div>
        <div className="absolute inset-0 flex items-center justify-center text-white text-center px-4">
          <div>
            <h1 className="text-4xl font-bold mb-3 pt-8">Weight Management</h1>
            <p className="text-lg max-w-2xl mx-auto">
              Achieving and maintaining a healthy weight supports overall wellness and longevity.
            </p>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="py-12 px-6 max-w-6xl mx-auto grid gap-10 lg:grid-cols-2 items-center">
        <div className="space-y-6 animate-slideUp">
          <h2 className="text-3xl font-bold text-green-600">Key Principles for Healthy Weight</h2>
          <p>
            Successful weight management involves balanced nutrition, regular physical activity, and mindful lifestyle habits. Avoid fad diets and focus on sustainable changes.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Balance calorie intake with energy expenditure</li>
            <li>Include nutrient-dense foods in your diet</li>
            <li>Stay physically active for cardiovascular and metabolic health</li>
            <li>Practice mindful eating and avoid emotional eating</li>
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-6 text-center">
          <div className="bg-yellow-100 cursor-pointer p-6 rounded-lg shadow-md hover:scale-105 transition-all duration-300">
            <FaBalanceScale className="text-4xl text-yellow-600 mx-auto mb-2" />
            <h3 className="font-bold text-lg">Calorie Balance</h3>
            <p className="text-sm">Understanding your calorie needs helps you maintain, lose, or gain weight effectively.</p>
          </div>
          <div className="bg-red-100 cursor-pointer p-6 rounded-lg shadow-md hover:scale-105 transition-all duration-300">
            <FaRunning className="text-4xl text-red-600 mx-auto mb-2" />
            <h3 className="font-bold text-lg">Physical Activity</h3>
            <p className="text-sm">Regular exercise boosts metabolism and supports fat loss while preserving muscle mass.</p>
          </div>
          <div className="bg-green-100 cursor-pointer p-6 rounded-lg shadow-md hover:scale-105 transition-all duration-300">
            <FaAppleAlt className="text-4xl text-green-600 mx-auto mb-2" />
            <h3 className="font-bold text-lg">Healthy Eating</h3>
            <p className="text-sm">Choose whole, unprocessed foods rich in fiber, protein, and healthy fats to feel satisfied.</p>
          </div>
          <div className="bg-blue-100 cursor-pointer p-6 rounded-lg shadow-md hover:scale-105 transition-all duration-300">
            <FaClock className="text-4xl text-blue-600 mx-auto mb-2" />
            <h3 className="font-bold text-lg">Consistency & Patience</h3>
            <p className="text-sm">Weight management is a gradual process — consistent habits lead to lasting results.</p>
          </div>
        </div>
      </div>

      {/* Final Call-to-Action */}
      <div className="text-gray-600 text-center py-12 px-4 animate-fadeInUp">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          Your Journey to a Healthier Weight Starts Now
        </h2>
        <p className="text-md md:text-lg max-w-2xl mx-auto">
          Embrace balanced habits and mindful choices for sustainable weight management and improved well-being.
        </p>
      </div>
    </section>
  );
};

export default WeightManagement;
