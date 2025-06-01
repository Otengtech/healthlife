import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../App.css";
import Footer from "./Footer";
import BMICalculator from "./BMICalculator";

import pushupsImg from "../assets/pushups.webp";
import squatsImg from "../assets/squats.webp";
import plankImg from "../assets/plank.webp";
import burpeesImg from "../assets/burpees.webp";
import lungesImg from "../assets/lunges.webp";
import mountainClimbersImg from "../assets/mountainclimbers.webp";
import jumpingJacksImg from "../assets/jumpingjacks.webp";
import bicycleCrunchesImg from "../assets/bicyclecrunches.webp";
import gluteBridgesImg from "../assets/glutebridges.webp";
import tricepDipsImg from "../assets/tricepdips.webp";
import highKneesImg from "../assets/highknees.webp";
import jumpSquatsImg from "../assets/jumpsquats.webp";

const workoutImages = {
  "Push-Ups": pushupsImg,
  Squats: squatsImg,
  Plank: plankImg,
  Burpees: burpeesImg,
  Lunges: lungesImg,
  "Mountain Climbers": mountainClimbersImg,
  "Jumping Jacks": jumpingJacksImg,
  "Bicycle Crunches": bicycleCrunchesImg,
  "Glute Bridges": gluteBridgesImg,
  "Tricep Dips": tricepDipsImg,
  "High Knees": highKneesImg,
  "Jump Squats": jumpSquatsImg,
};

const workouts = [
  {
    name: "Push-Ups",
    description:
      "Targets chest, shoulders, triceps, and core with bodyweight resistance.",
    howTo:
      "Start in a plank position. Lower your body until your chest nearly touches the floor, then push back up.",
    importance:
      "Improves upper body strength and core stability without equipment.",
  },
  {
    name: "Squats",
    description:
      "Builds lower body strength, targeting glutes, quads, and hamstrings.",
    howTo:
      "Stand shoulder-width apart, bend your knees and lower your hips like you're sitting, then rise back up.",
    importance:
      "Enhances mobility, balance, and leg power for daily movements.",
  },
  {
    name: "Plank",
    description:
      "An isometric hold that strengthens the entire core and stabilizing muscles.",
    howTo:
      "Hold a forearm plank position with a straight body, core tight, and back flat for as long as possible.",
    importance:
      "Builds endurance in the abs, improves posture, and reduces risk of back injuries.",
  },
  {
    name: "Burpees",
    description:
      "High-intensity full-body movement combining squat, jump, and push-up.",
    howTo:
      "From a standing position, drop into a squat, kick your feet back to a push-up, return to squat, and jump up.",
    importance: "Boosts cardiovascular endurance and burns calories quickly.",
  },
  {
    name: "Lunges",
    description:
      "Targets legs and glutes while enhancing balance and flexibility.",
    howTo:
      "Step forward with one leg, lowering your hips until both knees are at 90 degrees, then return and repeat on the other leg.",
    importance: "Improves lower-body strength and corrects muscle imbalances.",
  },
  {
    name: "Mountain Climbers",
    description:
      "Cardio-core movement that mimics running in a plank position.",
    howTo:
      "Start in plank, quickly drive knees toward chest alternately like climbing.",
    importance:
      "Increases heart rate, builds endurance, and strengthens the core and shoulders.",
  },
  {
    name: "Jumping Jacks",
    description:
      "A classic warm-up that raises heart rate and warms up the body.",
    howTo:
      "Jump while spreading legs and arms outward, then return to starting position and repeat.",
    importance:
      "Improves cardiovascular fitness and warms up the whole body for more intense workouts.",
  },
  {
    name: "Bicycle Crunches",
    description: "A twisting core movement to strengthen abs and obliques.",
    howTo:
      "Lie on your back, lift your legs and shoulders, and twist elbow to opposite knee in a cycling motion.",
    importance: "Targets the entire core and helps build abdominal definition.",
  },
  {
    name: "Glute Bridges",
    description: "Strengthens glutes, hamstrings, and lower back muscles.",
    howTo:
      "Lie on your back, bend knees, lift hips off the ground until aligned with knees and shoulders, then lower.",
    importance:
      "Enhances posture, reduces lower back pain, and activates underused glutes.",
  },
  {
    name: "Tricep Dips",
    description: "Bodyweight movement to tone and build triceps.",
    howTo:
      "Place hands behind you on a bench or chair, lower your body by bending elbows, then push back up.",
    importance: "Builds upper body pushing strength and tones arms.",
  },
  {
    name: "High Knees",
    description: "Explosive running-in-place movement with raised knees.",
    howTo:
      "Stand tall and run in place, bringing your knees up toward your chest as high as possible.",
    importance: "Elevates heart rate, improves coordination and agility.",
  },
  {
    name: "Jump Squats",
    description: "Plyometric variation of squats that adds explosiveness.",
    howTo:
      "Do a regular squat, then explode upward into a jump, landing softly and repeating.",
    importance:
      "Builds power and speed in the lower body while boosting heart rate.",
  },
];

const WorkoutSection = () => {
  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const workoutsPerPage = 4;
  // Get current foods to display
  const indexOfLastFood = currentPage * workoutsPerPage;
  const indexOfFirstFood = indexOfLastFood - workoutsPerPage;
  const currentWorkouts = workouts.slice(indexOfFirstFood, indexOfLastFood);
  const totalPages = Math.ceil(workouts.length / workoutsPerPage);

  const scrollToWorkouts = () => {
    const section = document.getElementById("workout");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div
        id="workout"
        className="bg-white py-28 px-4 sm:px-8 md:px-16 lg:px-32"
      >
        <BMICalculator />
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-center mb-12 font-bold text-gray-800">
          WORKOUTS FOR HEALTHY LIFESTYLE
        </h2>

        <div className="space-y-16">
          {currentWorkouts.map((workout, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-center gap-8 md:gap-12"
            >
              <img
                src={workoutImages[workout.name]}
                alt={workout.name}
                className="w-full md:w-1/2 h-64 sm:h-72 object-cover rounded-xl shadow-lg"
              />
              <div className="md:w-1/2 text-center md:text-left space-y-6">
                <div>
                  <h3 className="text-3xl sm:text-4xl font-semibold text-gray-800">
                    {workout.name}
                  </h3>
                  <p className="text-gray-600 mt-3">{workout.description}</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-center sm:text-left">
                  <div>
                    <h4 className="text-xl text-green-500 mb-2">Procedure</h4>
                    <p className="text-gray-600">{workout.howTo}</p>
                  </div>
                  <div>
                    <h4 className="text-xl text-green-500 mb-2">Importance</h4>
                    <p className="text-gray-600">{workout.importance}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Pagination */}
          <div className="flex justify-center items-center gap-4 mt-12">
            <button
              disabled={currentPage === 1}
              onClick={() => {
                setCurrentPage((prev) => prev - 1);
                scrollToWorkouts();
              }}
              className="px-5 py-2 sm:py-3 bg-green-500 hover:bg-green-400 text-black rounded-full disabled:opacity-50 transition duration-200"
            >
              Prev
            </button>

            <span className="text-gray-700 font-medium text-lg">
              {currentPage} / {totalPages}
            </span>

            <button
              disabled={currentPage === totalPages}
              onClick={() => {
                setCurrentPage((prev) => prev + 1);
                scrollToWorkouts();
              }}
              className="px-5 py-2 sm:py-3 bg-green-500 hover:bg-green-400 text-black rounded-full disabled:opacity-50 transition duration-200"
            >
              Next
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WorkoutSection;
