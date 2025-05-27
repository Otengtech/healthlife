import React from "react";
import {
  FaUtensils,
  FaSmile,
  FaClock,
  FaBrain,
} from "react-icons/fa";

const MindfulEating = () => {
  return (
    <section className="w-full bg-white text-gray-800">
      {/* Hero Section */}
      <div className="relative">
        <div className="w-full h-[350px] bg-green-600 rounded-b-lg"></div>
        <div className="absolute inset-0 flex items-center justify-center text-white text-center px-4">
          <div>
            <h1 className="text-4xl font-bold mb-3 pt-8">Mindful Eating</h1>
            <p className="text-lg max-w-2xl mx-auto">
              Nourish your body by being fully present during meals — it's not just what you eat, but how you eat that matters.
            </p>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="py-12 px-6 max-w-6xl mx-auto grid gap-10 lg:grid-cols-2 items-center">
        <div className="space-y-6 animate-slideUp">
          <h2 className="text-3xl font-bold text-green-600">What is Mindful Eating?</h2>
          <p>
            Mindful eating is the practice of paying full attention to the experience of eating and drinking. It helps you develop a healthy relationship with food, avoid overeating, and truly savor each bite.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Reduces binge and emotional eating</li>
            <li>Improves digestion and satisfaction</li>
            <li>Increases awareness of hunger and fullness cues</li>
            <li>Fosters gratitude and enjoyment of meals</li>
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-6 text-center">
          <div className="bg-yellow-100 cursor-pointer p-6 rounded-lg shadow-md hover:scale-105 transition-all duration-300">
            <FaUtensils className="text-4xl text-yellow-600 mx-auto mb-2" />
            <h3 className="font-bold text-lg">Savor Every Bite</h3>
            <p className="text-sm">Chew slowly and enjoy flavors, textures, and aromas without distraction.</p>
          </div>
          <div className="bg-pink-100 cursor-pointer p-6 rounded-lg shadow-md hover:scale-105 transition-all duration-300">
            <FaSmile className="text-4xl text-pink-500 mx-auto mb-2" />
            <h3 className="font-bold text-lg">Eat with Joy</h3>
            <p className="text-sm">Cultivate a positive, guilt-free attitude toward food and nourishment.</p>
          </div>
          <div className="bg-blue-100 cursor-pointer p-6 rounded-lg shadow-md hover:scale-105 transition-all duration-300">
            <FaClock className="text-4xl text-blue-500 mx-auto mb-2" />
            <h3 className="font-bold text-lg">Take Your Time</h3>
            <p className="text-sm">Avoid rushing meals. Sit down and give yourself enough time to eat mindfully.</p>
          </div>
          <div className="bg-green-100 cursor-pointer p-6 rounded-lg shadow-md hover:scale-105 transition-all duration-300">
            <FaBrain className="text-4xl text-green-600 mx-auto mb-2" />
            <h3 className="font-bold text-lg">Body Awareness</h3>
            <p className="text-sm">Recognize true hunger vs. emotional cravings and eat only when your body needs it.</p>
          </div>
        </div>
      </div>

      {/* Final Call-to-Action */}
      <div className="text-gray-500 text-center py-12 px-4 animate-fadeInUp">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">Reconnect With Your Food</h2>
        <p className="text-md md:text-lg max-w-2xl mx-auto">
          Slow down, listen to your body, and embrace each meal as a chance to care for yourself intentionally.
        </p>
      </div>
    </section>
  );
};

export default MindfulEating;
