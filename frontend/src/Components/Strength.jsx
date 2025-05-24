import React from "react";
import strengthTraining from "../assets/strength-training.jpg";
import resistanceBand from "../assets/resistance-band.jpg";
import bodyweight from "../assets/bodyweight.jpg";
import progressive from "../assets/progressive.jpg";
import Footer from "./Footer";

const strengthTips = [
  {
    title: "1. Start with Bodyweight Exercises",
    description:
      "Begin your strength journey with bodyweight exercises like squats, push-ups, and planks. They're simple yet effective for building muscle and stability.",
    image: bodyweight,
    alt: "Person doing bodyweight exercises at home",
    imgFirst: true,
  },
  {
    title: "2. Use Resistance Bands",
    description:
      "Resistance bands are affordable, portable tools that add challenge to your workouts and help strengthen different muscle groups.",
    image: resistanceBand,
    alt: "Person using resistance bands for strength",
    imgFirst: false,
  },
  {
    title: "3. Incorporate Progressive Overload",
    description:
      "Gradually increase the weight, reps, or intensity over time. This approach challenges muscles to grow stronger and more resilient.",
    image: progressive,
    alt: "Chart showing progressive strength training",
    imgFirst: true,
  },
  {
    title: "4. Maintain Proper Form",
    description:
      "Always prioritize correct technique to avoid injury and maximize benefits. Consider guidance from a coach or video tutorials.",
    image: strengthTraining,
    alt: "Trainer demonstrating strength training form",
    imgFirst: false,
  },
];

const Strength = () => {
  return (
    <>
      <section className="bg-white text-gray-800 py-28 px-6">
        <h1 className="text-4xl font-bold text-green-500 text-center mb-12">
          Build Your Strength: A Guide to Safe and Effective Training
        </h1>

        <div className="max-w-6xl mx-auto space-y-20">
          {strengthTips.map((tip, index) => (
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
              Why Strength Training Matters:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>Increases muscle mass and bone density</li>
              <li>Improves metabolism and supports fat loss</li>
              <li>Enhances balance, posture, and mobility</li>
              <li>Reduces the risk of injury and chronic diseases</li>
              <li>Boosts confidence and mental strength</li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Strength;
