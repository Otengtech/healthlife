import React from "react";
import {
  FaBarcode,
  FaInfoCircle,
  FaBalanceScale,
  FaAppleAlt
} from "react-icons/fa";

const LabelRead = () => {
  return (
    <section className="w-full bg-white text-gray-800">
      {/* Hero Section */}
      <div className="relative">
        <div className="w-full h-[350px] rounded-b-lg"></div>
        <div className="absolute inset-0 flex items-center justify-center text-white text-center px-4">
          <div className="text-gray-700">
            <h1 className="text-4xl font-bold mb-3 pt-8">Reading Food Labels</h1>
            <p className="text-lg max-w-2xl mx-auto">
              Understanding food labels empowers you to make healthier, more informed nutrition choices every day.
            </p>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="py-12 px-6 max-w-6xl mx-auto grid gap-10 lg:grid-cols-2 items-center">
        <div className="space-y-6 animate-slideUp">
          <h2 className="text-3xl font-bold text-green-600">Decode Your Food Labels</h2>
          <p>
            Food labels provide essential information about ingredients, nutrient content, and serving sizes. Learning to read them correctly helps you avoid hidden sugars, excess sodium, and unhealthy fats.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Check serving size to understand nutrition facts properly</li>
            <li>Identify added sugars and unhealthy fats</li>
            <li>Look for whole food ingredients and minimal additives</li>
            <li>Be aware of allergens and dietary considerations</li>
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-6 text-center">
          <div className="bg-yellow-100 cursor-pointer p-3 rounded-lg shadow-md hover:scale-105 transition-all duration-300">
            <FaBarcode className="text-4xl text-yellow-600 mx-auto mb-2" />
            <h3 className="font-bold text-lg">Serving Size</h3>
            <p className="text-sm">Start by checking the serving size to understand the nutrient values per portion.</p>
          </div>
          <div className="bg-orange-100 cursor-pointer p-3 rounded-lg shadow-md hover:scale-105 transition-all duration-300">
            <FaInfoCircle className="text-4xl text-orange-600 mx-auto mb-2" />
            <h3 className="font-bold text-lg">Ingredients List</h3>
            <p className="text-sm">Look for simple, recognizable ingredients and avoid items with many additives or preservatives.</p>
          </div>
          <div className="bg-blue-100 cursor-pointer p-3 rounded-lg shadow-md hover:scale-105 transition-all duration-300">
            <FaBalanceScale className="text-4xl text-blue-600 mx-auto mb-2" />
            <h3 className="font-bold text-lg">Nutrient Content</h3>
            <p className="text-sm">Pay attention to fats, sugars, sodium, fiber, and protein to assess the food’s health impact.</p>
          </div>
          <div className="bg-green-100 cursor-pointer p-3 rounded-lg shadow-md hover:scale-105 transition-all duration-300">
            <FaAppleAlt className="text-4xl text-green-600 mx-auto mb-2" />
            <h3 className="font-bold text-lg">Allergens & Claims</h3>
            <p className="text-sm">Check for allergen warnings and any health claims like “gluten-free” or “organic” for better choices.</p>
          </div>
        </div>
      </div>

      {/* Final Call-to-Action */}
      <div className="text-gray-600 text-center py-12 px-4 animate-fadeInUp">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          Be a Smart Shopper
        </h2>
        <p className="text-md md:text-lg max-w-2xl mx-auto">
          Understanding food labels helps you make smarter choices for your health — read carefully and nourish your body right.
        </p>
      </div>
    </section>
  );
};

export default LabelRead;
