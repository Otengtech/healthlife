import React from "react";
import {
  FaAllergies,
  FaExclamationTriangle,
  FaStethoscope,
  FaLeaf,
} from "react-icons/fa";

const FoodSensitivities = () => {
  return (
    <section className="w-full bg-white text-gray-800">
      {/* Hero Section */}
      <div className="relative">
        <div className="w-full h-[350px] bg-green-600 rounded-b-lg"></div>
        <div className="absolute inset-0 flex items-center justify-center text-white text-center px-4">
          <div>
            <h1 className="text-4xl font-bold mb-3 pt-8">Food Sensitivities</h1>
            <p className="text-lg max-w-2xl mx-auto">
              Understanding food sensitivities helps reduce discomfort, improve digestion, and support overall health.
            </p>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="py-12 px-6 max-w-6xl mx-auto grid gap-10 lg:grid-cols-2 items-center">
        <div className="space-y-6 animate-slideUp">
          <h2 className="text-3xl font-bold text-green-600">Listen to Your Gut</h2>
          <p>
            Food sensitivities occur when your body reacts poorly to certain foods, leading to symptoms like bloating, headaches, fatigue, and skin issues. Identifying triggers can help you create a diet that supports well-being.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Helps alleviate digestive discomfort and inflammation</li>
            <li>Improves skin clarity, energy levels, and mood</li>
            <li>Supports immune balance and gut health</li>
            <li>Enables informed food choices for better nutrition</li>
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-6 text-center">
          <div className="bg-red-100 cursor-pointer p-6 rounded-lg shadow-md hover:scale-105 transition-all duration-300">
            <FaAllergies className="text-4xl text-red-600 mx-auto mb-2" />
            <h3 className="font-bold text-lg">Common Triggers</h3>
            <p className="text-sm">Gluten, dairy, soy, and artificial additives are frequent culprits behind food sensitivities.</p>
          </div>
          <div className="bg-yellow-100 cursor-pointer p-6 rounded-lg shadow-md hover:scale-105 transition-all duration-300">
            <FaExclamationTriangle className="text-4xl text-yellow-500 mx-auto mb-2" />
            <h3 className="font-bold text-lg">Know the Symptoms</h3>
            <p className="text-sm">Watch for bloating, rashes, fatigue, headaches, and irregular digestion as signs.</p>
          </div>
          <div className="bg-purple-100 cursor-pointer p-6 rounded-lg shadow-md hover:scale-105 transition-all duration-300">
            <FaStethoscope className="text-4xl text-purple-600 mx-auto mb-2" />
            <h3 className="font-bold text-lg">Testing & Diagnosis</h3>
            <p className="text-sm">Work with a healthcare provider or nutritionist to confirm and address sensitivities.</p>
          </div>
          <div className="bg-green-100 cursor-pointer p-6 rounded-lg shadow-md hover:scale-105 transition-all duration-300">
            <FaLeaf className="text-4xl text-green-600 mx-auto mb-2" />
            <h3 className="font-bold text-lg">Gentle Substitutes</h3>
            <p className="text-sm">Opt for alternatives like almond milk, rice flour, and whole foods to ease digestion.</p>
          </div>
        </div>
      </div>

      {/* Final Call-to-Action */}
      <div className="text-gray-600 text-center py-12 px-4 animate-fadeInUp">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          Tune Into Your Body, Eat with Confidence
        </h2>
        <p className="text-md md:text-lg max-w-2xl mx-auto">
          Recognizing and managing food sensitivities allows you to enjoy meals with comfort, clarity, and vitality every day.
        </p>
      </div>
    </section>
  );
};

export default FoodSensitivities;
