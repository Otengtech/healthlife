import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../App.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import wall4 from "../assets/wall4.webp";
import pepper from "../assets/pepper.webp";
import cabbage from "../assets/cabbage.webp";
import onion from "../assets/onion.webp";
import greenPepper from "../assets/green-pepper.webp";
import garlic from "../assets/garlic.webp";
import ginger from "../assets/ginger.webp";
import carrot from "../assets/carrot.webp";
import spinach from "../assets/spinach.webp";
import tomato from "../assets/tomato.webp";
import broccoli from "../assets/broccoli.webp";
import avocado from "../assets/avocado.webp";
import sweetPotato from "../assets/sweet-potato.webp";
import beetroot from "../assets/beetroot.webp";
import cucumber from "../assets/cucumber.webp";
import eggplant from "../assets/eggplant.webp";
import kale from "../assets/kale.webp";
import lettuce from "../assets/lettuce.webp";
import okra from "../assets/okra.webp";
import springOnion from "../assets/spring-onion.webp";
import pumpkin from "../assets/pumpkin.webp";
import radish from "../assets/radish.webp";
import zucchini from "../assets/zucchini.webp";
import banana from "../assets/banana.webp";
import apple from "../assets/apple.webp";
import orange from "../assets/orange.webp";
import pineapple from "../assets/pineapple.webp";
import blueberries from "../assets/blueberries.webp";
import papaya from "../assets/papaya.webp";
import strawberry from "../assets/strawberry.webp";
import watermelon from "../assets/watermelon.webp";
import mango from "../assets/mango.webp";

import scurvyImg from "../assets/scurvy.webp";
import ricketsImg from "../assets/rickets.webp";
import pellagraImg from "../assets/pellagra.webp";
import beriberiImg from "../assets/beriberi.webp";
import nightBlindnessImg from "../assets/night-blindness.webp";
import ConfidenceAndConsistency from "./ConfidenceAndConsistency";

import { FaBrain, FaCarrot, FaRunning } from "react-icons/fa"

const HealthyFoods = () => {
  const sentences = [
    "Live Healthy, Stay Fit",
    "Eat Clean, Train Hard",
    "Fuel Your Body Right",
    "Strong Mind, Strong Body",
    "Wellness Starts Within",
    "Health is True Wealth",
  ];

  const services = [
    {
      icon: <FaRunning className="text-red-400 text-center text-4xl"/>,
      title: "Personal Training",
      description:
        "Tailored fitness programs to meet your specific goals and needs.",
      to: "/personaltraining",
    },
    {
      icon: <FaCarrot className="text-yellow-400 text-center text-4xl"/>,
      title: "Nutrition Counseling",
      description: "Get expert advice on your diet and eating habits.",
      to: "/nutritioncounseling",
    },
    {
      icon: <FaBrain className="text-green-500 text-center text-4xl"/>,
      title: "Mental Wellness",
      description:
        "Support your mental health through mindfulness and counseling.",
      to: "/mentalwellness",
    },
  ];

  const foods = [
    {
      name: "Pepper",
      description: "Rich in antioxidants and vitamin C.",
      image: pepper,
      moreInfo:
        "Pepper helps improve digestion and may have anti-inflammatory properties.",
      importance:
        "Boosts immune system and adds flavor without extra calories.",
      usedIn: "Salads, stir-fries, soups.",
    },
    {
      name: "Cabbage",
      description: "Low in calories and high in fiber.",
      image: cabbage,
      moreInfo: "Cabbage supports digestion and is rich in vitamin K and C.",
      importance: "Great for weight loss and digestive health.",
      usedIn: "Coleslaw, soups, stews.",
    },
    {
      name: "Onion",
      description:
        "Contains antioxidants and compounds that fight inflammation.",
      image: onion,
      moreInfo:
        "Onions are known for their heart health benefits and antibacterial properties.",
      importance: "Supports heart health and boosts immunity.",
      usedIn: "Curries, soups, stews.",
    },
    {
      name: "Green Pepper",
      description: "Low in calories, rich in vitamins A and C.",
      image: greenPepper,
      moreInfo: "Green peppers support immune function and eye health.",
      importance: "Good for skin, eyes, and overall immunity.",
      usedIn: "Salads, stir-fries, fajitas.",
    },
    {
      name: "Garlic",
      description: "Known for its immune-boosting properties.",
      image: garlic,
      moreInfo:
        "Garlic may reduce blood pressure and improve cholesterol levels.",
      importance: "Boosts immunity and has antibacterial properties.",
      usedIn: "Sauces, marinades, roasts.",
    },
    {
      name: "Ginger",
      description: "Helps with digestion and reduces nausea.",
      image: ginger,
      moreInfo: "Ginger is anti-inflammatory and may help with pain relief.",
      importance: "Aids digestion and reduces muscle soreness.",
      usedIn: "Tea, stir-fries, smoothies.",
    },
    {
      name: "Carrot",
      description: "High in beta-carotene and fiber.",
      image: carrot,
      moreInfo: "Carrots promote eye health and support the immune system.",
      importance: "Good for vision, skin, and overall immunity.",
      usedIn: "Salads, soups, juices.",
    },
    {
      name: "Spinach",
      description: "Rich in iron, calcium, and vitamins A and C.",
      image: spinach,
      moreInfo: "Spinach improves bone health and supports metabolism.",
      importance: "Great for energy, bones, and immune function.",
      usedIn: "Smoothies, sautés, salads.",
    },
    {
      name: "Tomato",
      description: "A good source of vitamin C, potassium, and lycopene.",
      image: tomato,
      moreInfo: "Tomatoes help reduce the risk of heart disease and cancer.",
      importance: "Rich in antioxidants and promotes heart health.",
      usedIn: "Salads, sauces, soups.",
    },
    {
      name: "Broccoli",
      description: "Packed with vitamins K and C, fiber, and folate.",
      image: broccoli,
      moreInfo: "Broccoli supports detoxification and reduces inflammation.",
      importance: "Strengthens bones and supports heart health.",
      usedIn: "Stir-fries, salads, steamed dishes.",
    },
    {
      name: "Avocado",
      description: "Loaded with healthy fats and potassium.",
      image: avocado,
      moreInfo:
        "Avocados reduce bad cholesterol and are great for heart health.",
      importance: "Supports skin health and nutrient absorption.",
      usedIn: "Toast, salads, smoothies.",
    },
    {
      name: "Sweet Potato",
      description: "Rich in fiber, vitamins A and C, and antioxidants.",
      image: sweetPotato,
      moreInfo: "Sweet potatoes support vision and gut health.",
      importance: "Boosts energy and supports immune function.",
      usedIn: "Baked dishes, soups, casseroles.",
    },
    {
      name: "Beetroot",
      description: "Rich in folate, manganese, and fiber.",
      image: beetroot,
      moreInfo: "Beetroot helps improve blood flow and lower blood pressure.",
      importance: "Supports heart health and boosts stamina.",
      usedIn: "Salads, juices, roasted dishes.",
    },
    {
      name: "Cucumber",
      description: "Hydrating and low in calories.",
      image: cucumber,
      moreInfo: "Cucumber aids hydration and supports skin health.",
      importance: "Keeps you hydrated and helps in detoxification.",
      usedIn: "Salads, sandwiches, detox water.",
    },
    {
      name: "Eggplant",
      description: "High in fiber and antioxidants.",
      image: eggplant,
      moreInfo: "Eggplant may help lower cholesterol and protect brain cells.",
      importance: "Supports heart health and weight management.",
      usedIn: "Curries, stews, grilled dishes.",
    },
    {
      name: "Kale",
      description: "Loaded with vitamins A, K, and C.",
      image: kale,
      moreInfo: "Kale is a powerful antioxidant and anti-inflammatory food.",
      importance: "Supports immune system and detoxification.",
      usedIn: "Smoothies, salads, sautéed dishes.",
    },
    {
      name: "Lettuce",
      description: "Low in calories, high in water content.",
      image: lettuce,
      moreInfo: "Lettuce supports hydration and digestion.",
      importance: "Good for weight loss and digestive health.",
      usedIn: "Salads, wraps, sandwiches.",
    },
    {
      name: "Okra",
      description: "Rich in fiber, vitamin C, and folate.",
      image: okra,
      moreInfo: "Okra helps regulate blood sugar levels.",
      importance: "Supports heart health and blood sugar control.",
      usedIn: "Stews, soups, fried dishes.",
    },
    {
      name: "Spring Onion",
      description: "High in vitamin K and antioxidants.",
      image: springOnion,
      moreInfo: "Spring onions help boost immunity and bone health.",
      importance: "Great for digestion and fighting infections.",
      usedIn: "Stir-fries, soups, salads.",
    },
    {
      name: "Pumpkin",
      description: "Rich in beta-carotene and fiber.",
      image: pumpkin,
      moreInfo: "Pumpkin boosts eye health and immunity.",
      importance: "Helps improve vision and supports skin health.",
      usedIn: "Soups, pies, stews.",
    },
    {
      name: "Radish",
      description: "Crunchy, peppery, and rich in vitamin C.",
      image: radish,
      moreInfo: "Radish helps detoxify the liver and supports digestion.",
      importance: "Cleanses the body and improves hydration.",
      usedIn: "Salads, pickles, soups.",
    },
    {
      name: "Zucchini",
      description: "Low in carbs and high in vitamin A.",
      image: zucchini,
      moreInfo: "Zucchini supports healthy vision and digestion.",
      importance: "Promotes weight loss and gut health.",
      usedIn: "Grilled, baked, stir-fried dishes.",
    },
    {
      name: "Banana",
      description: "High in potassium and energy-boosting carbohydrates.",
      image: banana,
      moreInfo:
        "Bananas support muscle function and are great for pre-workout snacks.",
      importance: "Promotes energy, digestion, and heart health.",
      usedIn: "Smoothies, oatmeal, snacks.",
    },
    {
      name: "Apple",
      description: "Rich in fiber and vitamin C.",
      image: apple,
      moreInfo:
        "Apples support digestion and may reduce the risk of chronic diseases.",
      importance: "Great for heart health and immune function.",
      usedIn: "Snacks, salads, baking.",
    },
    {
      name: "Orange",
      description: "Loaded with vitamin C and antioxidants.",
      image: orange,
      moreInfo: "Oranges boost the immune system and help skin health.",
      importance: "Supports immunity and reduces inflammation.",
      usedIn: "Juices, snacks, desserts.",
    },
    {
      name: "Pineapple",
      description: "Tropical fruit rich in vitamin C and enzymes.",
      image: pineapple,
      moreInfo:
        "Pineapple aids digestion and has anti-inflammatory properties.",
      importance: "Improves digestion and boosts immunity.",
      usedIn: "Smoothies, salads, grilled dishes.",
    },
    {
      name: "Blueberries",
      description: "Antioxidant powerhouse.",
      image: blueberries,
      moreInfo: "They support brain health and fight free radicals.",
      importance: "Improves memory and cell health.",
      usedIn: "Smoothies, cereals, baking.",
    },
    {
      name: "Papaya",
      description: "Rich in digestive enzymes and vitamin A.",
      image: papaya,
      moreInfo: "Papaya promotes digestion and eye health.",
      importance: "Great for gut and skin health.",
      usedIn: "Salads, smoothies, desserts.",
    },
    {
      name: "Strawberry",
      description: "Sweet and rich in vitamin C and manganese.",
      image: strawberry,
      moreInfo:
        "Strawberries help in reducing oxidative stress and boosting immunity.",
      importance: "Supports heart and skin health.",
      usedIn: "Smoothies, salads, desserts.",
    },
    {
      name: "Watermelon",
      description: "Hydrating and refreshing with vitamins A and C.",
      image: watermelon,
      moreInfo: "Watermelon helps in hydration and may reduce muscle soreness.",
      importance: "Perfect for hydration and skin.",
      usedIn: "Snacks, juices, salads.",
    },
    {
      name: "Mango",
      description: "High in vitamin A and natural sugars.",
      image: mango,
      moreInfo: "Mangoes boost immunity and aid digestion.",
      importance: "Great for eyes, skin, and energy.",
      usedIn: "Smoothies, salads, desserts.",
    },
  ];

  const diseases = [
    {
      name: "Scurvy",
      description: "Scurvy is a disease resulting from a vitamin C deficiency.",
      image: scurvyImg,
      symptoms: ["Bleeding gums", "Weakness", "Bruising", "Joint pain"],
      causes: "Vitamin C deficiency (lack of citrus fruits/vegetables).",
      prevention: [
        "Eat citrus fruits like oranges and lemons",
        "Include broccoli, strawberries, and bell peppers in your diet",
      ],
    },
    {
      name: "Rickets",
      description:
        "Rickets causes weak and soft bones in children due to vitamin D deficiency.",
      image: ricketsImg,
      symptoms: ["Soft, weak bones", "Delayed growth", "Bowed legs"],
      causes: "Vitamin D, calcium, or phosphate deficiency.",
      prevention: [
        "Ensure adequate sun exposure",
        "Include fortified dairy, fish, and eggs in diet",
      ],
    },
    {
      name: "Pellagra",
      description: "Pellagra is a niacin (Vitamin B3) deficiency disease.",
      image: pellagraImg,
      symptoms: ["Dermatitis", "Diarrhea", "Dementia"],
      causes: "Niacin (Vitamin B3) deficiency.",
      prevention: [
        "Consume protein-rich foods like meat, fish, and legumes",
        "Use fortified cereals and grains",
      ],
    },
    {
      name: "Beriberi",
      description:
        "Beriberi is caused by thiamine (Vitamin B1) deficiency, affecting the nervous system.",
      image: beriberiImg,
      symptoms: ["Weak muscles", "Difficulty walking", "Heart problems"],
      causes: "Thiamine (Vitamin B1) deficiency.",
      prevention: [
        "Eat whole grains, nuts, and seeds",
        "Avoid excessive alcohol",
      ],
    },
    {
      name: "Night Blindness",
      description:
        "Night blindness is a condition caused by Vitamin A deficiency, leading to poor vision in low light.",
      image: nightBlindnessImg,
      symptoms: ["Poor vision in low light", "Dry eyes"],
      causes: "Vitamin A deficiency.",
      prevention: [
        "Eat carrots, sweet potatoes, and leafy greens",
        "Include liver and dairy in diet",
      ],
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredFoods, setFilteredFoods] = useState(foods);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedService, setSelectedService] = useState(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % sentences.length);
    }, 8000); // Change every 8 seconds

    return () => clearInterval(interval);
  }, []);

  const itemsPerPage = 9;

  const handleSearch = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setSearchTerm(searchValue);
    const filtered = foods.filter((food) =>
      food.name.toLowerCase().includes(searchValue)
    );
    setFilteredFoods(filtered);
    setCurrentPage(1);
  };

  const showAll = () => {
    setSearchTerm("");
    setFilteredFoods(foods);
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(filteredFoods.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentFoods = filteredFoods.slice(indexOfFirstItem, indexOfLastItem);

  const handleReadMore = (item) => setSelectedService(item);
  const closeModal = () => setSelectedService(null);

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 3);
    }, 300);

    return () => clearInterval(interval);
  }, []);

  const myNavigate = useNavigate();

  return (
    <div>
      <section
        style={{ backgroundImage: `url(${wall4})` }}
        className="min-h-screen relative bg-cover bg-center flex items-center justify-center text-center p-6"
      >
        <div className="absolute top-0 z-0 left-0 w-full h-screen bg-black/50"></div>

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 space-y-6 max-w-4xl mx-auto px-4 text-white text-center md:text-left"
        >
          {/* Headings */}
          <motion.h1 className="text-3xl pt-14 md:text-5xl font-extrabold text-left leading-tight">
            WELCOME TO HEALTHLIFE
          </motion.h1>

          <div className="h-[100px] md:h-[150px] overflow-hidden relative">
            <AnimatePresence mode="wait">
              <motion.h2
                key={sentences[index]}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="text-5xl md:text-7xl drop-shadow-lg font-bold md:text-left text-left text-green-500 absolute w-full"
              >
                {sentences[index]}
              </motion.h2>
            </AnimatePresence>
          </div>

          {/* Paragraph */}
          <p className="text-left md:text-lg max-w-xl mx-auto md:mx-0 text-white">
            Your trusted companion for balanced living — find workouts, foods,
            and wellness tips tailored to you.
          </p>

          {/* Buttons */}
          <motion.div className="flex md:flex-row justify-center md:justify-start items-center gap-4 mt-6">
            <button className="bg-gray-700 shadow-lg hover:bg-gray-600 text-white px-8 py-3 rounded-full font-semibold transition">
              <Link to="/blog">Blog</Link>
            </button>
            <button className="bg-green-500 shadow-lg hover:bg-green-400 text-gray-100 px-6 py-3 rounded-full font-semibold transition">
              <Link to="/recipe">Recipes</Link>
            </button>
          </motion.div>

          {/* Animated Dots */}
          <motion.div className="flex items-center justify-center md:justify-start space-x-3">
            {[0, 1, 2].map((index) => (
              <div
                key={index}
                className={`w-5 h-5 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-green-500 scale-150"
                    : "bg-white scale-100"
                }`}
              ></div>
            ))}
          </motion.div>
        </motion.div>
      </section>
      {/* SERVICES SECTION */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            Empowering your mind and body with personalized wellness services.
          </p>
          <div className="grid gap-10 md:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-green-50 p-6 rounded-lg shadow-md"
                whileHover={{ scale: 1.03 }}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 40 }}
                transition={{ duration: 0.4 }}
              >
                <div className="w-full flex justify-center my-3">{service.icon}</div>
                <h3 className="text-2xl font-semibold text-green-700 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-700 mb-4">{service.description}</p>
                <button
                  onClick={() => myNavigate(service.to)}
                  className="text-white bg-green-500 px-6 py-2 rounded-full hover:bg-green-400 transition"
                >
                  Read More
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ConfidenceAndConsistency />
      {/* MODAL */}
      {selectedService && (
        <motion.div
          className="fixed top-0 left-0 mx-3 inset-0 bg-black/50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="bg-white p-8 rounded-xl overflow-x-auto w-full md:w-1/2 shadow-lg"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
          >
            <img
              className="w-full h-48 object-cover rounded-md mb-4"
              src={selectedService.image}
              alt=""
            />
            <h3 className="text-3xl font-bold text-green-600 mb-4">
              {selectedService.title || selectedService.name}
            </h3>
            <p className="text-gray-700 mb-2">{selectedService.moreInfo}</p>
            {selectedService.importance && (
              <>
                <h4 className="font-semibold mt-4">Importance:</h4>
                <p className="text-gray-600">{selectedService.importance}</p>
              </>
            )}
            {selectedService.usedIn && (
              <>
                <h4 className="font-semibold mt-4">Used In:</h4>
                <p className="text-gray-600">{selectedService.usedIn}</p>
              </>
            )}
            <button
              onClick={closeModal}
              className="mt-6 px-6 py-2 text-white bg-green-600 rounded-full hover:bg-green-500 transition"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
      {/* HEALTHY FOODS SECTION */}
      <section id="food-section" className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Healthy Foods
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Explore nutritious foods that boost your health and well-being.
          </p>

          {/* Search and Show All */}
          <div className="mb-8 flex justify-center gap-4 flex-wrap">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Search for a produce..."
              className="px-4 py-2 border border-gray-300 rounded-full w-64"
            />
            {filteredFoods.length < foods.length && (
              <button
                onClick={showAll}
                className="px-6 py-2 text-white bg-green-500 rounded-full hover:bg-green-400 transition"
              >
                Show All
              </button>
            )}
          </div>

          {/* Food Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {currentFoods.map((food, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
              >
                <div className="relative">
                  <motion.img
                    src={food.image}
                    alt={food.title}
                    className="w-full h-48 rounded-lg object-cover"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                  />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800">
                  {food.name}
                </h3>
                <p className="text-gray-600 mt-2">{food.description}</p>
                <button
                  onClick={() => handleReadMore(food)}
                  className="mt-4 px-5 py-2 text-white bg-green-500 rounded-full hover:bg-green-400 transition"
                >
                  Read More
                </button>
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-10 space-x-4">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setCurrentPage(i + 1);
                    const section = document.getElementById("food-section");
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className={`px-4 py-2 rounded-full border ${
                    currentPage === i + 1
                      ? "bg-green-500 text-white"
                      : "bg-white text-gray-700 border-gray-300"
                  } hover:bg-green-200 transition`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>
      <section className="py-28 px-6 md:px-20 bg-white dark:bg-slate-900 text-slate-800 dark:text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-green-500 mb-6">
            Why Living a Healthy Life Matters
          </h2>
          <p className="text-lg md:text-xl mb-10">
            Living a healthy life isn't just about looking good—it's about
            feeling energized, preventing disease, and living longer. Here are
            key reasons why you should start prioritizing your health today.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-green-500 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold mb-2">Boosts Energy</h3>
            <p>
              A healthy lifestyle improves stamina, sharpens focus, and helps
              you power through your day with less fatigue.
            </p>
          </div>

          <div className="bg-green-500 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold mb-2">Prevents Diseases</h3>
            <p>
              Proper nutrition and exercise reduce the risk of chronic illnesses
              like diabetes, heart disease, and obesity.
            </p>
          </div>

          <div className="bg-green-500 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold mb-2">
              Improves Mental Health
            </h3>
            <p>
              Regular activity and good nutrition can lower stress, anxiety, and
              improve your overall mood and well-being.
            </p>
          </div>
        </div>
      </section>

      <section className="py-28 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8 text-green-800">
          Some Diseases & Prevention
        </h2>

        <div className="overflow-hidden relative">
          <div className="grid grid-cols- sm:grid-3 md:grid-cols-3 gap-6 px-4">
            {diseases.map((disease, index) => (
              <div
                key={index}
                className="min-w-[300px] bg-white rounded-2xl p-4 transition hover:scale-105 duration-300"
              >
                <img
                  src={disease.image}
                  alt={disease.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-green-700 mb-2">
                  {disease.name}
                </h3>

                <p className="text-sm font-bold text-gray-600">Symptoms:</p>
                <ul className="text-sm list-disc list-inside mb-2 text-gray-700">
                  {disease.symptoms.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>

                <p className="text-sm font-bold text-gray-600">Causes:</p>
                <p className="text-sm mb-2 text-gray-700">{disease.causes}</p>

                <p className="text-sm font-bold text-gray-600">Prevention:</p>
                <ul className="text-sm list-disc list-inside text-gray-700">
                  {disease.prevention.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HealthyFoods;
