import React from "react";
import { FaAppleAlt, FaCarrot, FaFish, FaBreadSlice } from "react-icons/fa";

const BalancedDiet = () => {
  return (
    <section className="w-full bg-white text-gray-800">
      {/* Hero Section */}
      <div className="relative">
        <div className="w-full h-[350px] rounded-b-lg"></div>
        <div className="absolute inset-0 flex items-center justify-center text-white text-center px-4">
          <div className="text-gray-700">
            <h1 className="text-4xl font-bold mb-3 pt-8">Balance Diet</h1>
            <p className="text-lg max-w-2xl mx-auto">
              Living a healthy life is also about eating enough balance diet as your everyday meal.
            </p>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="py-12 px-6 max-w-6xl mx-auto grid gap-10 lg:grid-cols-2 items-center">
        <div className="space-y-6 animate-slideUp">
          <h2 className="text-3xl font-bold text-green-600">What is a Balanced Diet?</h2>
          <p>
            A balanced diet contains appropriate proportions of carbohydrates, proteins, fats, vitamins, and minerals. It’s essential for maintaining energy, supporting growth, and protecting against diseases.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Includes all essential nutrients</li>
            <li>Maintains healthy body weight</li>
            <li>Improves brain function and productivity</li>
            <li>Strengthens immune response</li>
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-6 text-center">
          <div className="bg-green-100 p-3 rounded-lg shadow-md hover:scale-105 transition-all duration-300">
            <FaAppleAlt className="text-4xl text-green-600 mx-auto mb-2" />
            <h3 className="font-bold text-lg">Fruits</h3>
            <p className="text-sm">Rich in fiber, vitamins, and antioxidants. Vital for detox and skin health.</p>
          </div>
          <div className="bg-orange-100 p-3 rounded-lg shadow-md hover:scale-105 transition-all duration-300">
            <FaCarrot className="text-4xl text-orange-500 mx-auto mb-2" />
            <h3 className="font-bold text-lg">Vegetables</h3>
            <p className="text-sm">Low in fat, packed with nutrients, and essential for digestion and immunity.</p>
          </div>
          <div className="bg-blue-100 p-3 rounded-lg shadow-md hover:scale-105 transition-all duration-300">
            <FaFish className="text-4xl text-blue-500 mx-auto mb-2" />
            <h3 className="font-bold text-lg">Proteins</h3>
            <p className="text-sm">Supports muscle repair and hormone production. Found in meat, legumes, and dairy.</p>
          </div>
          <div className="bg-yellow-100 p-3 rounded-lg shadow-md hover:scale-105 transition-all duration-300">
            <FaBreadSlice className="text-4xl text-yellow-500 mx-auto mb-2" />
            <h3 className="font-bold text-lg">Carbohydrates</h3>
            <p className="text-sm">Your body’s main energy source. Choose whole grains for longer satiety.</p>
          </div>
        </div>
      </div>

      {/* Final Call-to-Action */}
      <div className="text-gray-700 text-center py-12 px-4 animate-fadeInUp">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">Start Your Healthy Eating Journey Today!</h2>
        <p className="text-md md:text-lg max-w-2xl mx-auto">
          Build balanced plates, choose natural foods, and nourish your body from the inside out.
        </p>
      </div>
    </section>
  );
};

export default BalancedDiet;
