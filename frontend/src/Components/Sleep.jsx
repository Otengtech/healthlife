import React from "react";
import sleepRoutine from "../assets/sleep.webp";
import bedroom from "../assets/bedroom-environment.webp";
import screenTime from "../assets/screen-time.webp";
import relaxation from "../assets/relaxation.webp";
import Footer from "./Footer";

const sleepTips = [
  {
    title: "1. Maintain a Consistent Sleep Schedule",
    description:
      "Going to bed and waking up at the same time every day helps regulate your body’s internal clock, improving the quality of your sleep.",
    image: sleepRoutine,
    alt: "Person setting a consistent sleep schedule",
    imgFirst: true,
  },
  {
    title: "2. Create a Sleep-Friendly Environment",
    description:
      "Keep your bedroom cool, dark, and quiet. Use blackout curtains and consider a white noise machine or earplugs to block disturbances.",
    image: bedroom,
    alt: "Peaceful bedroom setup with dim lighting",
    imgFirst: false,
  },
  {
    title: "3. Limit Screen Time Before Bed",
    description:
      "Avoid phones, computers, and TV at least one hour before bedtime. Blue light disrupts melatonin production and delays sleep onset.",
    image: screenTime,
    alt: "Person using phone in bed with blue light",
    imgFirst: true,
  },
  {
    title: "4. Wind Down with Relaxation Techniques",
    description:
      "Engage in calming activities like reading, deep breathing, meditation, or listening to soft music to prepare your body for rest.",
    image: relaxation,
    alt: "Person meditating before sleep",
    imgFirst: false,
  },
];

const Sleep = () => {
  return (
    <>
      <section className="bg-white text-gray-800 py-28 px-6">
        <h1 className="text-4xl font-bold text-green-500 text-center mb-12">
          The Power of Sleep: Tips for Restful Nights and Energized Days
        </h1>

        <div className="max-w-6xl mx-auto space-y-20">
          {sleepTips.map((tip, index) => (
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
              Why Sleep is Crucial for Well-Being:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>Restores energy and repairs tissues</li>
              <li>Improves memory, focus, and productivity</li>
              <li>Regulates mood and reduces stress</li>
              <li>Strengthens the immune system</li>
              <li>Supports healthy metabolism and weight</li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Sleep;
