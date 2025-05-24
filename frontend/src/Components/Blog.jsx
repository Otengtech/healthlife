import React, { useState } from "react";
import { motion } from "framer-motion";
import Footer from "./Footer";
import { Link } from "react-router-dom";

// Images
import superfoods from "../assets/superfoods.jpg";
import morningWorkout from "../assets/morning-workout.jpg";
import mindfulness from "../assets/mindfulness.jpg";
import hydration2 from "../assets/hydration2.jpg";
import sleep from "../assets/sleep.jpg";
import strength from "../assets/strength.jpg";
import plantBased from "../assets/plant-based.jpg";
import motivation from "../assets/motivation.jpg";

// Blog data
const blogs = [
  {
    id: 1,
    title: "10 Superfoods for a Healthier You",
    image: superfoods,
    link: "/superfoods",
    description:
      "Explore nutrient-rich foods that boost immunity, improve digestion, and promote longevity.",
    author: "Dr. Amelia Hart",
    date: "April 20, 2025",
    tags: ["Nutrition", "Health", "Superfoods"],
    content:
      "Superfoods like kale, blueberries, salmon, and quinoa are loaded with antioxidants, fiber, and healthy fats...",
  },
  {
    id: 2,
    title: "The Science Behind Morning Workouts",
    image: morningWorkout,
    link: "/morningworkout",
    description:
      "Learn why exercising in the morning can help with focus, metabolism, and consistency.",
    author: "Coach Leo Grant",
    date: "March 15, 2025",
    tags: ["Fitness", "Exercise", "Productivity"],
    content:
      "Morning workouts activate your metabolism and improve mental clarity...",
  },
  {
    id: 3,
    title: "Mindfulness Practices to Reduce Stress",
    image: mindfulness,
    link: "/mindfulness",
    description:
      "Discover effective mindfulness techniques to manage daily stress and improve mental health.",
    author: "Dr. Priya Kaur",
    date: "February 10, 2025",
    tags: ["Mental Wellness", "Mindfulness", "Stress"],
    content:
      "Mindfulness practices such as breathing exercises, meditation, and mindful walking...",
  },
  {
    id: 4,
    title: "Hydration and Performance: What You Should Know",
    image: hydration2,
    link: "/hydration",
    description:
      "Uncover how water intake impacts your physical and cognitive performance.",
    author: "Coach Riley Morgan",
    date: "January 25, 2025",
    tags: ["Hydration", "Fitness", "Health Tips"],
    content: "Staying hydrated is key to optimal body function...",
  },
  {
    id: 5,
    title: "Why Sleep Is the Ultimate Recovery Tool",
    image: sleep,
    link: "/sleep",
    description:
      "Understand the importance of sleep for muscle recovery, memory, and mood regulation.",
    author: "Dr. Ethan Moore",
    date: "December 5, 2024",
    tags: ["Sleep", "Recovery", "Health"],
    content: "Quality sleep is as vital as nutrition and exercise...",
  },
  {
    id: 6,
    title: "Beginner’s Guide to Strength Training",
    image: strength,
    link: "/strength",
    description:
      "Get started with safe and effective strength training routines for beginners.",
    author: "Coach Jamie Fields",
    date: "November 8, 2024",
    tags: ["Fitness", "Strength Training", "Beginners"],
    content: "Strength training builds muscle, supports joint health...",
  },
  {
    id: 7,
    title: "Plant-Based Diet: Benefits and Myths",
    image: plantBased,
    link: "/plantbased",
    description:
      "Debunk common myths and learn how a plant-based diet supports health and sustainability.",
    author: "Dr. Maya Elson",
    date: "October 14, 2024",
    tags: ["Plant-Based", "Nutrition", "Sustainability"],
    content: "A plant-based diet rich in fruits, vegetables, legumes...",
  },
  {
    id: 8,
    title: "How to Stay Motivated on Your Wellness Journey",
    image: motivation,
    link: "/motivation",
    description:
      "Simple strategies to stay consistent and overcome setbacks in health and fitness.",
    author: "Coach Alex Rivera",
    date: "September 20, 2024",
    tags: ["Motivation", "Wellness", "Lifestyle"],
    content: "Setting realistic goals, tracking progress...",
  },
];

const BlogSection = () => {
  return (
    <>
      <section className="py-24 px-6 bg-white text-gray-800">
        <h2 className="text-4xl font-bold text-center text-green-600 mb-10">
          Latest Blog Posts
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-50 rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <motion.img
                src={blog.image}
                alt={blog.title}
                className="rounded-t-lg h-48 w-full object-cover"
                animate={{ y: [0, -3, 0] }}
                transition={{ repeat: Infinity, duration: 5 }}
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-green-600 mb-2">
                  {blog.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3">{blog.description}</p>
                <p className="text-sm text-gray-500 mb-2">
                  By {blog.author} | {blog.date}
                </p>
                <div className="mb-3">
                  {blog.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="inline-block bg-green-100 text-green-600 text-xs px-2 py-1 mr-2 rounded"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <Link
                  to={blog.link}
                  className="text-sm bg-green-500 hover:bg-green-400 text-white px-4 py-2 rounded transition inline-block"
                >
                  Read More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default BlogSection;
