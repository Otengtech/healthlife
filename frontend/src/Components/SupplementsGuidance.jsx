import React from "react";
import {
  FaCapsules,
  FaLeaf,
  FaShieldAlt,
  FaVial,
} from "react-icons/fa";

const SupplementsGuidance = () => {
  return (
    <section className="w-full bg-white text-gray-800">
      {/* Hero Section */}
      <div className="relative">
        <div className="w-full h-[350px] rounded-b-lg"></div>
        <div className="absolute inset-0 flex items-center justify-center text-white text-center px-4">
          <div className="text-gray-700">
            <h1 className="text-4xl font-bold mb-3 pt-8">Supplements Guidance</h1>
            <p className="text-lg max-w-2xl mx-auto">
              Supplements can support your health — but only when used wisely and in balance with your diet.
            </p>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="py-12 px-6 max-w-6xl mx-auto grid gap-10 lg:grid-cols-2 items-center">
        <div className="space-y-6 animate-slideUp">
          <h2 className="text-3xl font-bold text-green-600">Do You Need Supplements?</h2>
          <p>
            Supplements are not a replacement for real food, but they can help fill nutritional gaps, support deficiencies, and enhance wellness when used properly under guidance.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Useful for nutrient deficiencies or restricted diets</li>
            <li>Support immune function, energy, and recovery</li>
            <li>Best when recommended by a healthcare provider</li>
            <li>Not all supplements are created equal — quality matters</li>
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-6 text-center">
          <div className="bg-yellow-100 cursor-pointer p-3 rounded-lg shadow-md hover:scale-105 transition-all duration-300">
            <FaCapsules className="text-4xl text-yellow-600 mx-auto mb-2" />
            <h3 className="font-bold text-lg">Vitamins & Minerals</h3>
            <p className="text-sm">Support essential bodily functions like immunity, energy, and metabolism.</p>
          </div>
          <div className="bg-green-100 cursor-pointer p-3 rounded-lg shadow-md hover:scale-105 transition-all duration-300">
            <FaLeaf className="text-4xl text-green-600 mx-auto mb-2" />
            <h3 className="font-bold text-lg">Herbal Supplements</h3>
            <p className="text-sm">Natural options like ashwagandha and turmeric offer stress relief and inflammation control.</p>
          </div>
          <div className="bg-blue-100 cursor-pointer p-3 rounded-lg shadow-md hover:scale-105 transition-all duration-300">
            <FaShieldAlt className="text-4xl text-blue-600 mx-auto mb-2" />
            <h3 className="font-bold text-lg">Immune Support</h3>
            <p className="text-sm">Zinc, vitamin C, and probiotics may help maintain immune balance and resilience.</p>
          </div>
          <div className="bg-purple-100 cursor-pointer p-3 rounded-lg shadow-md hover:scale-105 transition-all duration-300">
            <FaVial className="text-4xl text-purple-600 mx-auto mb-2" />
            <h3 className="font-bold text-lg">Safety & Testing</h3>
            <p className="text-sm">Choose third-party tested products and avoid megadoses without medical advice.</p>
          </div>
        </div>
      </div>

      {/* Final Call-to-Action */}
      <div className="text-gray-600 text-center py-12 px-4 animate-fadeInUp">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          Supplement Smart — Not Excessively
        </h2>
        <p className="text-md md:text-lg max-w-2xl mx-auto">
          Talk to your doctor or a registered dietitian before starting supplements, and always prioritize a balanced diet first.
        </p>
      </div>
    </section>
  );
};

export default SupplementsGuidance;
