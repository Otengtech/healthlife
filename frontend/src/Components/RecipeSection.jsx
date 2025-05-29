import React, { useState } from "react";
import { motion } from "framer-motion";
import Footer from "./Footer";
import {Link} from "react-router-dom"

import avocadoToastImg from "../assets/avocado-toast.jpg";
import grilledChickenSaladImg from "../assets/gcs.jpg";
import quinoaVeggieBowlImg from "../assets/qvb.jpg";
import berrySmoothieImg from "../assets/berry-smoothie.jpg";
import chickpeaStirFryImg from "../assets/chickpea-stirfry.jpg";
import oatmealFruitsImg from "../assets/oatmeal-fruits.jpg";
import zucchiniNoodlesImg from "../assets/zucchini-noodles.jpg";
import bakedSalmonImg from "../assets/baked-salmon.jpg";
import yogurtParfaitImg from "../assets/yogurt-parfait.jpg";
import lentilSoupImg from "../assets/lentil-soup.jpg";
import stuffedPeppersImg from "../assets/stuffed-peppers.jpg";
import eggMuffinsImg from "../assets/egg-muffins.jpg";

const recipeImages = {
  "Avocado Toast": avocadoToastImg,
  "Grilled Chicken Salad": grilledChickenSaladImg,
  "Quinoa Veggie Bowl": quinoaVeggieBowlImg,
  "Berry Smoothie": berrySmoothieImg,
  "Chickpea Stir Fry": chickpeaStirFryImg,
  "Oatmeal with Fruits": oatmealFruitsImg,
  "Zucchini Noodles": zucchiniNoodlesImg,
  "Baked Salmon with Asparagus": bakedSalmonImg,
  "Greek Yogurt Parfait": yogurtParfaitImg,
  "Lentil Soup": lentilSoupImg,
  "Stuffed Bell Peppers": stuffedPeppersImg,
  "Egg & Veggie Muffins": eggMuffinsImg,
};

const recipes = [
  {
    id: 1,
    title: "Avocado Toast",
    description: "Healthy breakfast with smashed avocado on whole-grain toast.",
    ingredients: ["Bread", "Avocado", "Lemon", "Salt", "Chili flakes"],
    steps: ["Toast bread", "Mash avocado", "Add lemon juice", "Spread & sprinkle chili flakes"],
    nutrition: "250 kcal | 10g protein | 15g fat",
    to: "/avocadotoast",
  },
  {
    id: 2,
    title: "Grilled Chicken Salad",
    description: "Protein-packed salad with grilled chicken and fresh veggies.",
    ingredients: ["Chicken breast", "Lettuce", "Tomatoes", "Olive oil", "Lemon juice"],
    steps: ["Grill chicken", "Chop veggies", "Mix dressing", "Combine & serve"],
    nutrition: "350 kcal | 30g protein | 10g fat",
    to: "/gcs",
  },
  {
    id: 3,
    title: "Quinoa Veggie Bowl",
    description: "A colorful mix of quinoa, veggies, and a light lemon vinaigrette.",
    ingredients: ["Quinoa", "Cucumber", "Bell peppers", "Cherry tomatoes", "Lemon juice"],
    steps: ["Cook quinoa", "Chop veggies", "Mix all ingredients", "Drizzle lemon juice"],
    nutrition: "320 kcal | 12g protein | 8g fat",
    to: "/qvb",
  },
  {
    id: 4,
    title: "Berry Smoothie",
    description: "A refreshing blend of berries, banana, and yogurt.",
    ingredients: ["Strawberries", "Blueberries", "Banana", "Greek yogurt", "Honey"],
    steps: ["Add ingredients to blender", "Blend until smooth", "Serve chilled"],
    nutrition: "180 kcal | 6g protein | 2g fat",
    to: "/berrysmoothie",
  },
  {
    id: 5,
    title: "Chickpea Stir Fry",
    description: "Spiced chickpeas sautéed with veggies for a quick meal.",
    ingredients: ["Chickpeas", "Onion", "Bell peppers", "Spinach", "Garlic"],
    steps: ["Sauté garlic & onion", "Add chickpeas & veggies", "Stir fry with spices"],
    nutrition: "300 kcal | 14g protein | 7g fat",
    to: "/csf",
  },
  {
    id: 6,
    title: "Oatmeal with Fruits",
    description: "Warm oats topped with seasonal fruits and nuts.",
    ingredients: ["Oats", "Milk or almond milk", "Banana", "Berries", "Almonds"],
    steps: ["Cook oats", "Top with fruits & nuts", "Serve warm"],
    nutrition: "250 kcal | 8g protein | 5g fat",
    to: "/oatmeal",
  },
  {
    id: 7,
    title: "Zucchini Noodles",
    description: "Low-carb noodle alternative with pesto and cherry tomatoes.",
    ingredients: ["Zucchini", "Pesto", "Cherry tomatoes", "Olive oil", "Parmesan"],
    steps: ["Spiralize zucchini", "Sauté briefly", "Toss with pesto & tomatoes"],
    nutrition: "200 kcal | 7g protein | 10g fat",
    to: "/zucchininoodles",
  },
  {
    id: 8,
    title: "Baked Salmon with Asparagus",
    description: "Omega-3-rich salmon served with roasted asparagus.",
    ingredients: ["Salmon fillet", "Asparagus", "Olive oil", "Lemon", "Garlic"],
    steps: ["Season salmon", "Place on tray with asparagus", "Bake at 400°F for 15-20 min"],
    nutrition: "400 kcal | 35g protein | 20g fat",
    to: "/bsa",
  },
  {
    id: 9,
    title: "Greek Yogurt Parfait",
    description: "Layered Greek yogurt, fruits, and granola for a quick snack.",
    ingredients: ["Greek yogurt", "Granola", "Strawberries", "Blueberries", "Honey"],
    steps: ["Layer yogurt, fruits, granola", "Drizzle with honey", "Serve cold"],
    nutrition: "220 kcal | 10g protein | 5g fat",
    to: "/gyp",
  },
  {
    id: 10,
    title: "Lentil Soup",
    description: "Comforting soup packed with fiber and protein.",
    ingredients: ["Lentils", "Carrots", "Onion", "Celery", "Vegetable broth"],
    steps: ["Sauté veggies", "Add lentils & broth", "Simmer until tender"],
    nutrition: "280 kcal | 16g protein | 6g fat",
    to: "/lentilsoup",
  },
  {
    id: 11,
    title: "Stuffed Bell Peppers",
    description: "Bell peppers filled with a mix of quinoa, beans, and spices.",
    ingredients: ["Bell peppers", "Quinoa", "Black beans", "Corn", "Tomato sauce"],
    steps: ["Prepare filling", "Stuff peppers", "Bake for 25 min"],
    nutrition: "330 kcal | 12g protein | 9g fat",
    to: "/sbp",
  },
  {
    id: 12,
    title: "Egg & Veggie Muffins",
    description: "Portable mini frittatas loaded with veggies and protein.",
    ingredients: ["Eggs", "Spinach", "Tomatoes", "Bell peppers", "Cheese"],
    steps: ["Whisk eggs", "Add chopped veggies", "Pour into muffin tin", "Bake at 375°F for 20 min"],
    nutrition: "150 kcal | 10g protein | 7g fat",
    to: "/evm",
  },
];

const RecipeSection = () => {
  const [search, setSearch] = useState("");

  const filtered = recipes.filter((r) =>
    r.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <section className="py-24 px-6 bg-gray-100 text-gray-800">
        <h2 className="text-3xl font-bold text-center text-green-600 mb-8">Healthy Recipes</h2>

        <div className="max-w-md mx-auto mb-8">
          <input
            type="text"
            placeholder="Search recipes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-3 rounded shadow-md border border-gray-300 focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {filtered.map((recipe, i) => (
            <motion.div
              key={recipe.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
            >
              <div className="relative">
                <motion.img
                  src={recipeImages[recipe.title]}
                  alt={recipe.title}
                  className="w-full h-48 object-cover"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-green-600 mb-2">{recipe.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{recipe.description}</p>
                <Link to={recipe.to}
                  className="bg-green-500 hover:bg-green-400 text-white px-4 py-2 rounded transition"
                >
                  More Info
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

export default RecipeSection;