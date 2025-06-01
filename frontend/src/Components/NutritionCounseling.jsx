import React from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";

import balancedDietImg from "../assets/balanced-diet.webp";
import weightManagementImg from "../assets/weight-management.webp";
import labelReadingImg from "../assets/label-reading.webp";
import mealTimingImg from "../assets/meal-timing.webp";
import foodSensitivitiesImg from "../assets/food-sensitivities.webp";
import sportsNutritionImg from "../assets/sports-nutrition.webp";
import hydrationImg from "../assets/hydration.webp";
import mindfulEatingImg from "../assets/mindful-eating-nutrition.webp";
import supplementsImg from "../assets/supplements.webp"

const counselingImages = {
  "Balanced Diet Planning": balancedDietImg,
  "Weight Management": weightManagementImg,
  "Nutritional Label Reading": labelReadingImg,
  "Meal Timing and Frequency": mealTimingImg,
  "Managing Food Sensitivities": foodSensitivitiesImg,
  "Sports Nutrition": sportsNutritionImg,
  "Hydration Education": hydrationImg,
  "Mindful Eating": mindfulEatingImg,
  "Supplement Guidance": supplementsImg,
};

const nutritionalCounselingPractices = [
  {
    title: "Balanced Diet Planning",
    description:
      "Focuses on creating a personalized meal plan that includes all essential nutrients—carbohydrates, proteins, fats, vitamins, and minerals—to support overall health and energy levels.",
    image: "../assets/balanced-diet.jpg",
    link: "/balancediet",
  },
  {
    title: "Weight Management",
    description:
      "Guides individuals in achieving healthy weight goals through sustainable lifestyle changes, portion control, and nutritional awareness, avoiding crash diets or extreme restrictions.",
    image: "../assets/weight-management.jpg",
    link: "/weightmanagement",
  },
  {
    title: "Nutritional Label Reading",
    description:
      "Teaches how to interpret food labels to make informed choices about calories, sugar, sodium, and fat intake, supporting long-term healthy eating habits.",
    image: "../assets/label-reading.jpg",
    link: "/labelread",
  },
  {
    title: "Meal Timing and Frequency",
    description:
      "Emphasizes when and how often to eat to stabilize blood sugar, improve digestion, and prevent overeating or unhealthy snacking, tailored to individual lifestyle and goals.",
    image: "../assets/meal-timing.jpg",
    link: "/mealtiming",
  },
  {
    title: "Managing Food Sensitivities",
    description:
      "Provides guidance on identifying and avoiding trigger foods like gluten, dairy, or allergens, while ensuring adequate nutrition from alternative sources.",
    image: "../assets/food-sensitivities.jpg",
    link: "/foodsensitivities",
  },
  {
    title: "Sports Nutrition",
    description:
      "Supports athletic performance by optimizing macronutrient intake, hydration, and recovery nutrition before, during, and after physical activity.",
    image: "../assets/sports-nutrition.jpg",
    link: "/sportsnutrition",
  },
  {
    title: "Hydration Education",
    description:
      "Focuses on the importance of proper fluid intake, how hydration affects metabolism, energy, and cognition, and how to recognize signs of dehydration.",
    image: "../assets/hydration.jpg",
    link: "/hydrationeducation",
  },
  {
    title: "Mindful Eating",
    description:
      "Encourages awareness during meals to prevent overeating, improve digestion, and build a healthier relationship with food by listening to hunger and fullness cues.",
    image: "../assets/mindful-eating-nutrition.jpg",
    link: "/mindfuleating",
  },
  {
    title: "Supplement Guidance",
    description:
      "Advises on when and what supplements are truly necessary, helping avoid misuse while ensuring essential nutrients like vitamin D, iron, or omega-3 are adequately supported.",
    image: "../assets/supplements.jpg",
    link: "/supplements",
  },
];

const NutritionalCounseling = () => {
  return (
    <>
      <section className="py-28 px-4 md:px-16 bg-green-50" id="nutrition">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-green-700 mb-8 animate-bounce">
          Nutritional Counseling
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {nutritionalCounselingPractices.map((item, index) => (
            <div
              key={index}
              className="bg-white flex flex-col items-center justify-center shadow-lg rounded-xl overflow-hidden transform transition duration-300 hover:scale-105"
            >
              <img
                src={counselingImages[item.title]}
                alt={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-green-600 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-sm">{item.description}</p>
              </div>
              <div className="w-full flex justify-center my-5">
                <Link
                  to={item.link}
                  className="text-sm bg-green-500 hover:bg-green-400 text-white px-4 py-2 rounded transition inline-block"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default NutritionalCounseling;
