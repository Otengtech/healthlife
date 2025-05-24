import React from "react";
import { motion } from "framer-motion";

// Images
import warmUp from "../assets/warmup.jpg";
import jumpingJacks from "../assets/jumpingjacks.jpg";
import pushups from "../assets/pushups.jpg";
import squats from "../assets/squats.jpg";
import lunges from "../assets/lunges.jpg";
import yoga from "../assets/yoga.jpg";
import plank from "../assets/plank.jpg";
import coolDown from "../assets/cooldown.jpg";
import Footer from "./Footer";

// Animation variant
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const workouts = [
  {
    title: "1. Warm-Up",
    description:
      "Start your morning with a gentle warm-up to wake your body and increase blood flow. Include light jogging, arm swings, and shoulder rolls.",
    image: warmUp,
    alt: "Person doing warm-up stretches",
    imgFirst: true,
  },
  {
    title: "2. Jumping Jacks",
    description:
      "Jumping jacks are a full-body cardio move that gets your heart pumping, wakes you up, and improves coordination.",
    image: jumpingJacks,
    alt: "Person doing jumping jacks",
    imgFirst: false,
  },
  {
    title: "3. Push-Ups",
    description:
      "Push-ups build upper body strength and activate your core. Start with knee push-ups if you're a beginner.",
    image: pushups,
    alt: "Push-up exercise in a workout session",
    imgFirst: true,
  },
  {
    title: "4. Squats",
    description:
      "Squats are great for your legs and glutes. They also engage your core and improve posture and balance.",
    image: squats,
    alt: "Person doing bodyweight squats",
    imgFirst: false,
  },
  {
    title: "5. Lunges",
    description:
      "Lunges target the quads, hamstrings, and glutes, improving balance and strengthening the lower body.",
    image: lunges,
    alt: "Person performing lunges",
    imgFirst: true,
  },
  {
    title: "6. Yoga Poses",
    description:
      "Incorporate basic yoga poses like Downward Dog, Cat-Cow, and Child’s Pose to improve flexibility and mental clarity.",
    image: yoga,
    alt: "Woman practicing yoga poses in the morning",
    imgFirst: false,
  },
  {
    title: "7. Plank Hold",
    description:
      "The plank is an isometric core strength exercise that targets abs, back, and shoulders. Aim for 30–60 seconds.",
    image: plank,
    alt: "Athlete holding a strong plank position",
    imgFirst: true,
  },
  {
    title: "8. Cool Down",
    description:
      "End your workout with stretching and deep breathing to relax muscles and lower your heart rate gradually.",
    image: coolDown,
    alt: "Person doing cool-down stretches",
    imgFirst: false,
  },
];

const MorningWorkout = () => {
  return (
    <>
      <section className="bg-white text-gray-800 py-28 px-6">
        <motion.h1
          className="text-4xl font-bold text-green-500 text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          8 Energizing Morning Workouts to Start Your Day Right
        </motion.h1>

        <div className="max-w-6xl mx-auto space-y-20">
          {workouts.map((item, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={`flex flex-col md:flex-row gap-8 items-center ${
                item.imgFirst ? "" : "md:flex-row-reverse"
              }`}
            >
              <img
                src={item.image}
                alt={item.alt}
                className="rounded-lg shadow-md w-full md:w-1/2 object-cover"
              />
              <div className="md:w-1/2">
                <h2 className="text-2xl font-semibold text-green-500 mb-3">
                  {item.title}
                </h2>
                <p className="text-lg leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-16 bg-blue-50 p-6 rounded-xl shadow-md"
          >
            <h3 className="text-2xl font-bold text-green-500 mb-4">
              Benefits of Morning Workouts:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>Boosts metabolism and energy for the day</li>
              <li>Improves focus, mood, and mental health</li>
              <li>Establishes a consistent fitness routine</li>
              <li>Reduces stress and anxiety naturally</li>
              <li>Supports long-term cardiovascular and muscular health</li>
            </ul>
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default MorningWorkout;
