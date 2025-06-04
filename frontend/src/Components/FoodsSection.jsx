import React, {useState, useEffect} from "react";
import { motion } from "framer-motion";

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
const FoodsSection = () => {
    const [searchTerm, setSearchTerm] = useState("");
      const [filteredFoods, setFilteredFoods] = useState(foods);
      const [currentPage, setCurrentPage] = useState(1);
      
    
      const itemsPerPage = 15;
    
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
  return (

    <div>
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
                <p className="text-2xl font-semibold text-gray-800">
                  {food.name}
                </p>
                <p className="text-gray-600 text-left mt-2">{food.description}{food.moreInfo}</p>
                <p className="text-gray-600 text-left"><span className="font-bold">Importance:</span> {food.importance}</p>
                <p className="text-gray-600 text-left"><span className="font-bold">Used In:</span> {food.usedIn}</p>
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
    </div>
  );
};

export default FoodsSection;
