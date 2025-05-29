import React from "react";
import {
  FaBrain,
  FaBullseye,
  FaRedo,
  FaShieldAlt,
  FaUsers,
  FaFire,
  FaThumbtack,
  FaQuoteLeft,
} from "react-icons/fa";

const ConfidenceAndConsistency = () => {
  const tips = [
    {
      icon: <FaBrain className="text-2xl text-blue-400" />,
      title: "Understand Self-Belief",
      desc: "Replace self-doubt with positive affirmations and self-awareness.",
    },
    {
      icon: <FaBullseye className="text-2xl text-green-400" />,
      title: "Set Small Goals",
      desc: "Small wins build confidence. Set achievable, realistic goals.",
    },
    {
      icon: <FaRedo className="text-2xl text-yellow-400" />,
      title: "Create a Routine",
      desc: "Consistency thrives with structure. Stick to a daily plan.",
    },
    {
      icon: <FaShieldAlt className="text-2xl text-red-400" />,
      title: "Embrace Failure",
      desc: "Learn from mistakes. Treat setbacks as feedback.",
    },
  ];

  return (
    <section className="bg-white px-4 md:px-16 py-10">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
        How to Build Confidence & Consistency
      </h2>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Left side: Explanation */}
        <div className="space-y-6 text-gray-700 text-md leading-relaxed">
          <p>
            Confidence isn’t something you’re born with — it’s something you
            build. To achieve lasting self-trust and discipline, you must first
            understand how daily actions shape mindset.
          </p>
          <p>
            Consistency reinforces habits. Whether in fitness, academics, or
            personal growth, sticking to routines transforms doubt into
            certainty and helps you stay focused through challenges.
          </p>
          <p>
            Below are some practical tips to help you build both confidence and
            consistency, especially when you're starting small or facing
            self-doubt.
          </p>
        </div>

        {/* Right side: Cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-xl flex flex-col justify-center items-center cursor-pointer shadow p-5 hover:scale-105 transition duration-300"
            >
              <div className="flex items-center gap-3 text-4xl mb-2">
                {tip.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                {tip.title}
              </h3>
              <p className="text-sm text-gray-600">{tip.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConfidenceAndConsistency;
