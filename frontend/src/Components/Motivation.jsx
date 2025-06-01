import React from "react";
import inspiration from "../assets/inspiration.webp";
import goalSetting from "../assets/goal-setting.webp";
import mindset from "../assets/mindset.webp";
import progress from "../assets/progress.webp";
import Footer from "./Footer";

const motivationTips = [
  {
    title: "1. Find Your Why",
    description:
      "Motivation starts with a clear purpose. Find a meaningful reason why you want to achieve your goals, whether it’s health, success, or personal growth.",
    image: inspiration,
    alt: "Person feeling motivated while running outdoors",
    imgFirst: true,
  },
  {
    title: "2. Set Clear Goals",
    description:
      "Break your larger goals into smaller, manageable tasks. Achieving mini-milestones will keep you on track and motivated.",
    image: goalSetting,
    alt: "Setting and writing down goals on paper",
    imgFirst: false,
  },
  {
    title: "3. Cultivate a Positive Mindset",
    description:
      "A positive mindset is crucial for staying motivated. Practice self-affirmation, visualize your success, and embrace challenges as opportunities to grow.",
    image: mindset,
    alt: "Person meditating with a positive mindset",
    imgFirst: true,
  },
  {
    title: "4. Celebrate Progress, Not Perfection",
    description:
      "Track your progress and celebrate even the smallest victories. Remember, every step forward is progress, not perfection.",
    image: progress,
    alt: "Person feeling accomplished after achieving goals",
    imgFirst: false,
  },
];

const Motivation = () => {
  return (
    <>
      <section className="bg-white text-gray-800 py-28 px-6">
        <h1 className="text-4xl font-bold text-green-500 text-center mb-12">
          Stay Motivated: Keep Pushing Toward Your Goals
        </h1>

        <div className="max-w-6xl mx-auto space-y-20">
          {motivationTips.map((tip, index) => (
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
              Benefits of Staying Motivated:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>Increased productivity and efficiency</li>
              <li>Higher chances of achieving long-term success</li>
              <li>Improved self-confidence and personal growth</li>
              <li>Better mental resilience and stress management</li>
              <li>A more positive outlook on life and goals</li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Motivation;
