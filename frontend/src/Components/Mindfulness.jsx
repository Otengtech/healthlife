import React from "react";
import meditation from "../assets/meditation.jpg";
import breathing from "../assets/breathing.jpg";
import natureWalk from "../assets/nature.jpg";
import gratitude from "../assets/gratitude.jpg";
import journal from "../assets/journaling.jpg";
import Footer from "./Footer";

const practices = [
  {
    title: "1. Morning Meditation",
    description:
      "Spend 5–10 minutes in silence or guided meditation to center your thoughts, reduce stress, and set a calm tone for the day.",
    image: meditation,
    alt: "Person meditating peacefully",
    imgFirst: true,
  },
  {
    title: "2. Deep Breathing",
    description:
      "Practice deep breathing exercises like the 4-7-8 technique or box breathing to regulate your nervous system and promote relaxation.",
    image: breathing,
    alt: "Individual practicing deep breathing outdoors",
    imgFirst: false,
  },
  {
    title: "3. Nature Walk",
    description:
      "Take a slow walk in nature, paying attention to sights, sounds, and smells. This can ground your mind and boost mental clarity.",
    image: natureWalk,
    alt: "Person walking in a green forest trail",
    imgFirst: true,
  },
  {
    title: "4. Gratitude Reflection",
    description:
      "Write or mentally list 3 things you’re grateful for. Gratitude fosters a positive mindset and emotional well-being.",
    image: gratitude,
    alt: "Notebook with gratitude list and coffee",
    imgFirst: false,
  },
  {
    title: "5. Journaling",
    description:
      "Use journaling to process thoughts, reduce anxiety, and boost focus. Try prompts like 'Today I feel...' or 'I will let go of...'.",
    image: journal,
    alt: "Person journaling with a pen and notebook",
    imgFirst: true,
  },
];

const Mindfulness = () => {
  return (
    <>
      <section className="bg-white text-gray-800 py-28 px-6">
        <h1 className="text-4xl font-bold text-green-500 text-center mb-12">
          5 Simple Mindfulness Practices to Start Your Day Calm
        </h1>

        <div className="max-w-6xl mx-auto space-y-20">
          {practices.map((item, index) => (
            <div
              key={index}
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
            </div>
          ))}

          <div className="mt-16 bg-green-50 p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold text-green-500 mb-4">
              Benefits of Morning Mindfulness:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>Reduces morning anxiety and tension</li>
              <li>Improves focus and emotional regulation</li>
              <li>Enhances gratitude and self-awareness</li>
              <li>Boosts energy and productivity throughout the day</li>
              <li>Fosters a calm and intentional mindset</li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Mindfulness;
