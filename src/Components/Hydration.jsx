import React from "react";
import waterGlass from "../assets/water-glass.jpg";
import fruits from "../assets/hydrating-fruits.jpg";
import reminder from "../assets/hydration-reminder.jpg";
import workoutHydration from "../assets/workout-hydration.jpg";
import Footer from "./Footer";

const tips = [
  {
    title: "1. Start Your Day with Water",
    description:
      "After hours of sleep, your body is naturally dehydrated. Drinking a glass of water first thing in the morning helps kickstart your metabolism and flush out toxins.",
    image: waterGlass,
    alt: "Glass of water on a morning table",
    imgFirst: true,
  },
  {
    title: "2. Eat Hydrating Foods",
    description:
      "Include fruits and vegetables with high water content like watermelon, cucumbers, oranges, and lettuce. These also provide essential vitamins and minerals.",
    image: fruits,
    alt: "Plate of hydrating fruits like watermelon and oranges",
    imgFirst: false,
  },
  {
    title: "3. Set Regular Reminders",
    description:
      "Use hydration reminder apps or alarms to prompt you to drink water every 1–2 hours, especially if you're busy or forget to drink often.",
    image: reminder,
    alt: "Phone showing a hydration reminder notification",
    imgFirst: true,
  },
  {
    title: "4. Hydrate During Workouts",
    description:
      "Drink water before, during, and after physical activity to maintain performance and aid recovery. Carry a reusable bottle to make hydration easy on the go.",
    image: workoutHydration,
    alt: "Athlete drinking water during a workout",
    imgFirst: false,
  },
];

const Hydration = () => {
  return (
    <>
      <section className="bg-white text-gray-800 py-28 px-6">
        <h1 className="text-4xl font-bold text-green-500 text-center mb-12">
          The Importance of Hydration for a Healthy Lifestyle
        </h1>

        <div className="max-w-6xl mx-auto space-y-20">
          {tips.map((tip, index) => (
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
              Why Staying Hydrated Matters:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>Regulates body temperature and supports metabolism</li>
              <li>Improves mood, memory, and concentration</li>
              <li>Keeps skin glowing and supports digestion</li>
              <li>Prevents fatigue and enhances physical performance</li>
              <li>Flushes toxins and supports kidney function</li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Hydration;
