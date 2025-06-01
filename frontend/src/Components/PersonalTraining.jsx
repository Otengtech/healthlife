import React from "react";
import Footer from "./Footer";

import strengthTrainingImg from '../assets/strength-training.webp';
import cardioImg from '../assets/cardio.webp';
import functionalTrainingImg from '../assets/functional-training.webp';
import sportTrainingImg from '../assets/sport-training.webp';
import groupTrainingImg from '../assets/group-training.webp';
import fitnessAssessmentImg from '../assets/fitness-assessment.webp';

const practiceImages = {
  "Strength Training": strengthTrainingImg,
  "Cardiovascular Conditioning": cardioImg,
  "Functional Training": functionalTrainingImg,
  "Sport-Specific Training": sportTrainingImg,
  "Group Training Sessions": groupTrainingImg,
  "Fitness Assessments": fitnessAssessmentImg,
};


const personalTrainingPractices = [
  {
    title: "Strength Training",
    description:
      "Improves muscle mass, bone density, and metabolic rate. Includes exercises like squats, deadlifts, and bench press with tailored guidance from a personal trainer.",
    image: "../assets/strength-training.jpg",
  },
  {
    title: "Cardiovascular Conditioning",
    description:
      "Enhances heart health, endurance, and fat burning through activities like running, cycling, jump rope, or HIIT, adjusted to individual fitness levels.",
    image: "../assets/cardio.jpg",
  },
  {
    title: "Functional Training",
    description:
      "Focuses on exercises that mimic real-life movements to build strength and coordination for daily activities and injury prevention.",
    image: "../assets/functional-training.jpg",
  },
  {
    title: "Sport-Specific Training",
    description:
      "Improves skills, agility, and power required for sports like football, basketball, or martial arts through specialized drills and workouts.",
    image: "../assets/sport-training.jpg",
  },
  {
    title: "Group Training Sessions",
    description:
      "Fosters motivation, camaraderie, and consistency through small group workouts designed to cater to multiple fitness levels.",
    image: "../assets/group-training.jpg",
  },
  {
    title: "Fitness Assessments",
    description:
      "Analyzes body composition, endurance, flexibility, and strength to create a starting point and measure ongoing progress.",
    image: "../assets/fitness-assessment.jpg",
  },
];

const PersonalTraining = () => {
  return (
    <>
      <section
        className="py-28 px-4 md:px-16 bg-green-50"
        id="personal-training"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center text-green-600 mb-8 animate-bounce">
          Personal Training
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {personalTrainingPractices.map((item, index) => (
            <div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white shadow-lg rounded-xl overflow-hidden transform transition duration-300 hover:scale-105"
            >
              <img
                src={practiceImages[item.title]}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-green-600 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default PersonalTraining;
