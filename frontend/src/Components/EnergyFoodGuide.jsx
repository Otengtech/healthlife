import React from "react";
import Footer from "./Footer";
// Image imports
import ingredientsImg from "../assets/ingredients.webp";
import cookCarbsImg from "../assets/cook-carbs.webp";
import leanProteinImg from "../assets/lean-protein.webp";
import healthyFatsImg from "../assets/healthy-fats.webp";
import vegetablesImg from "../assets/vegetables.webp";
import assembleImg from "../assets/assemble.webp";
import hydrateImg from "../assets/hydrate.webp";

const energyFoodSteps = [
  {
    step: "Step 1",
    title: "Choose the Right Ingredients",
    description:
      "Select complex carbs (oats, sweet potatoes), lean protein (eggs, lentils), and healthy fats (nuts, avocado) for long-lasting energy.",
    image: ingredientsImg,
  },
  {
    step: "Step 2",
    title: "Prep Your Carbs",
    description:
      "Cook energy-rich foods like quinoa, oats, and brown rice. These slow-digesting carbs release energy steadily throughout the day.",
    image: cookCarbsImg,
  },
  {
    step: "Step 3",
    title: "Add Lean Protein",
    description:
      "Prepare lean proteins like grilled chicken, boiled eggs, or tofu. They support muscle recovery and sustain fullness.",
    image: leanProteinImg,
  },
  {
    step: "Step 4",
    title: "Include Healthy Fats",
    description:
      "Incorporate nuts, seeds, olive oil, or avocado. These fats fuel the brain and prevent energy crashes.",
    image: healthyFatsImg,
  },
  {
    step: "Step 5",
    title: "Incorporate Colorful Vegetables",
    description:
      "Vegetables like spinach, carrots, and peppers are loaded with vitamins and minerals that enhance energy metabolism.",
    image: vegetablesImg,
  },
  {
    step: "Step 6",
    title: "Assemble a Balanced Meal",
    description:
      "Combine carbs, protein, fats, and veggies. Example: brown rice + grilled chicken + spinach + avocado + boiled egg.",
    image: assembleImg,
  },
  {
    step: "Step 7",
    title: "Hydrate Smartly",
    description:
      "Drink water, fruit-infused water, or smoothies (banana + oats + almond milk) to stay hydrated and energized.",
    image: hydrateImg,
  },
];


const EnergyFoodGuide = () => {
  return (
    <>
      <section className="px-4 md:px-20 py-28 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-28">
          How to Prepare Energy-Giving Foods
        </h2>
        <div className="space-y-16">
          {energyFoodSteps.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              } gap-6 group`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 md:w-96 rounded-2xl shadow-md transform transition duration-500 group-hover:scale-105 object-cover"
              />
              <div className="w-full md:w-1/2">
                <h3 className="text-green-600 text-3xl font-semibold mb-2">
                  {item.step}
                </h3>
                <h4 className="text-2xl font-bold mb-3">{item.title}</h4>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default EnergyFoodGuide;
