import React from "react";
import variety from "../assets/plant-variety.jpg";
import protein from "../assets/plant-protein.jpg";
import fiber from "../assets/plant-fiber.jpg";
import cooking from "../assets/plant-cooking.jpg";
import Footer from "./Footer";

const plantBasedTips = [
  {
    title: "1. Embrace Variety",
    description:
      "A plant-based diet includes fruits, vegetables, legumes, nuts, seeds, and whole grains. The wider the variety, the better the nutrient coverage.",
    image: variety,
    alt: "Colorful variety of plant-based foods",
    imgFirst: true,
  },
  {
    title: "2. Focus on Plant Protein",
    description:
      "Get your protein from beans, lentils, tofu, quinoa, and tempeh. These sources are rich in fiber, iron, and amino acids.",
    image: protein,
    alt: "Assorted plant-based protein sources",
    imgFirst: false,
  },
  {
    title: "3. Load Up on Fiber",
    description:
      "Whole plant foods are naturally high in fiber, which supports digestion, regulates blood sugar, and improves heart health.",
    image: fiber,
    alt: "High-fiber foods like oats, beans, and vegetables",
    imgFirst: true,
  },
  {
    title: "4. Learn Creative Cooking",
    description:
      "Explore plant-based cooking with spices, herbs, and global flavors. It’s fun, nourishing, and budget-friendly.",
    image: cooking,
    alt: "Delicious plant-based meal being prepared",
    imgFirst: false,
  },
];

const PlantBased = () => {
  return (
    <>
      <section className="bg-white text-gray-800 py-28 px-6">
        <h1 className="text-4xl font-bold text-green-500 text-center mb-12">
          Thrive on Plants: The Power of a Plant-Based Lifestyle
        </h1>

        <div className="max-w-6xl mx-auto space-y-20">
          {plantBasedTips.map((tip, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row gap-8 items-center ${
                tip.imgFirst ? "" : "md:flex-row-reverse"
              }`}
            >
              <img
                src={tip.image}
                alt={tip.alt}
                className="rounded-lg shadow-md w-full md:w-1/2 object-cover"
              />
              <div className="md:w-1/2">
                <h2 className="text-2xl font-semibold text-green-500 mb-3">
                  {tip.title}
                </h2>
                <p className="text-lg leading-relaxed">{tip.description}</p>
              </div>
            </div>
          ))}

          <div className="mt-16 bg-green-50 p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold text-green-500 mb-4">
              Benefits of a Plant-Based Diet:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>Lowers the risk of heart disease and hypertension</li>
              <li>Supports weight management and metabolic health</li>
              <li>Promotes clearer skin and better digestion</li>
              <li>Reduces environmental impact and animal cruelty</li>
              <li>Improves energy, mood, and overall wellness</li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default PlantBased;
