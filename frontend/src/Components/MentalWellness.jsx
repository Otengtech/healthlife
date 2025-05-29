import { useEffect } from "react";
import Footer from "./Footer";

import meditationImg from '../assets/meditation.jpg';
import journalingImg from '../assets/journaling.jpg';
import therapyImg from '../assets/therapy.jpg';
import breathingImg from '../assets/breathing.jpg';
import natureWalksImg from '../assets/nature-walks.jpg';
import digitalDetoxImg from '../assets/digital-detox.jpg';
import affirmationsImg from '../assets/affirmations.jpg';
import artTherapyImg from '../assets/art-therapy.jpg';
import gratitudeImg from '../assets/gratitude.jpg';
import mindfulEatingImg from '../assets/mindful-eating.jpg';

const mentalPracticeImages = {
  "Meditation": meditationImg,
  "Journaling": journalingImg,
  "Therapy": therapyImg,
  "Breathing Exercises": breathingImg,
  "Nature Walks": natureWalksImg,
  "Digital Detox": digitalDetoxImg,
  "Positive Affirmations": affirmationsImg,
  "Art Therapy": artTherapyImg,
  "Gratitude Practice": gratitudeImg,
  "Mindful Eating": mindfulEatingImg,
};


const mentalPractices = [
  {
    title: "Meditation",
    description:
      "Reduces stress, improves focus, and increases emotional awareness. Practicing even 10 minutes daily can significantly enhance mental clarity, promote better sleep, and support long-term emotional regulation.",
    image: "../assets/meditation.jpg",
  },
  {
    title: "Journaling",
    description:
      "Helps you process emotions, track habits, and improve self-awareness. Journaling can aid in managing anxiety, setting goals, and understanding personal growth through reflection.",
    image: "../assets/journaling.jpg",
  },
  {
    title: "Therapy",
    description:
      "Professional guidance helps in coping with anxiety, depression, trauma, and more. Therapy offers a safe space for emotional healing, improved communication, and developing coping strategies.",
    image: "../assets/therapy.jpg",
  },
  {
    title: "Breathing Exercises",
    description:
      "Calm your nervous system and reduce anxiety by practicing deep breathing techniques like box breathing or 4-7-8. Regular practice can lower cortisol levels and improve focus and emotional control.",
    image: "../assets/breathing.jpg",
  },
  {
    title: "Nature Walks",
    description:
      "Spending time in nature boosts mood, reduces symptoms of depression, and improves mental clarity. A simple 20-minute walk in greenery can act as a natural antidepressant.",
    image: "../assets/nature-walks.jpg",
  },
  {
    title: "Digital Detox",
    description:
      "Taking breaks from screens and social media reduces overstimulation and comparison anxiety. A digital detox can enhance real-world connections and foster mindfulness.",
    image: "../assets/digital-detox.jpg",
  },
  {
    title: "Positive Affirmations",
    description:
      "Repeating empowering phrases daily helps rewire negative thought patterns and boost self-esteem. Affirmations can reduce self-doubt and enhance resilience against stress.",
    image: "../assets/affirmations.jpg",
  },
  {
    title: "Art Therapy",
    description:
      "Creative activities like painting, drawing, or sculpting help express emotions non-verbally, relieve stress, and improve mood, especially for those who struggle to verbalize feelings.",
    image: "../assets/art-therapy.jpg",
  },
  {
    title: "Gratitude Practice",
    description:
      "Keeping a gratitude journal or simply listing things you’re thankful for daily improves emotional well-being, promotes optimism, and strengthens relationships.",
    image: "../assets/gratitude.jpg",
  },
  {
    title: "Mindful Eating",
    description:
      "Being present while eating—focusing on taste, texture, and hunger cues—enhances digestion and reduces binge eating triggered by emotional stress.",
    image: "../assets/mindful-eating.jpg",
  },
];

const MentalWellness = () => {
  return (
    <>
      <section
        className="bg-gradient-to-b from-teal-50 to-white py-28 px-6 md:px-20"
        id="mental-wellness"
      >
        <h2 className="text-4xl font-bold text-center text-green-500 mb-4 animate-bounce">
          Mental Wellness
        </h2>
        <p className="text-center max-w-2xl mx-auto mb-12 text-gray-500">
          Prioritizing mental health is crucial for a balanced life. Here are
          some effective practices to support your emotional and psychological
          well-being.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {mentalPractices.map((practice, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl hover:scale-105 transition-transform duration-300 group"
            >
              <img
                src={mentalPracticeImages[practice.title]}
                alt={practice.title}
                className="w-full h-48 mb-4"
              />
              <h3 className="text-xl font-semibold text-center text-green-500 group-hover:text-green-400">
                {practice.title}
              </h3>
              <p className="mt-3 text-gray-600 text-sm text-center">
                {practice.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default MentalWellness;
