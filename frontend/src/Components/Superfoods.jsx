import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Images
import superfoodsMain from "../assets/wall8.jpg";
import berries from "../assets/berries.jpg";
import quinoa from "../assets/quinoa.jpg";
import salmon from "../assets/salmon.jpg";
import kale from "../assets/kale.jpg";
import avocado from "../assets/avocado.jpg";
import greenTea from "../assets/green-tea.jpg";
import sweetPotato from "../assets/sweet-potato.jpg";
import greekYogurt from "../assets/greek-yogurt.jpg";

// Animation Variant
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.2 },
  },
};

// Superfoods List
const superfoods = [
  {
    title: "1. Kale",
    description:
      "Kale is packed with vitamins A, C, and K and is known for its powerful antioxidant properties. It helps detoxify the body, strengthen the immune system, and support bone health.",
    image: kale,
    alt: "Fresh kale leaves rich in vitamins",
    imgFirst: true,
  },
  {
    title: "2. Berries",
    description:
      "Blueberries, strawberries, and raspberries are rich in antioxidants, fiber, and vitamin C. They help fight inflammation, improve heart health, and boost brain function.",
    image: berries,
    alt: "Assorted berries rich in antioxidants",
    imgFirst: false,
  },
  {
    title: "3. Salmon",
    description:
      "Salmon is an excellent source of omega-3 fatty acids and high-quality protein. It promotes heart health, reduces inflammation, and supports cognitive function.",
    image: salmon,
    alt: "Grilled salmon rich in omega-3s",
    imgFirst: true,
  },
  {
    title: "4. Quinoa",
    description:
      "Quinoa is a gluten-free whole grain high in protein and fiber. It helps regulate blood sugar levels, supports digestion, and keeps you full for longer periods.",
    image: quinoa,
    alt: "Cooked quinoa served in a bowl",
    imgFirst: false,
  },
  {
    title: "5. Avocado",
    description:
      "Avocados are rich in healthy monounsaturated fats, fiber, potassium, and antioxidants. They support heart health, improve skin texture, and aid in nutrient absorption.",
    image: avocado,
    alt: "Sliced avocado showing creamy texture and seed",
    imgFirst: true,
  },
  {
    title: "6. Green Tea",
    description:
      "Green tea is loaded with polyphenols and antioxidants like EGCG. It improves brain function, boosts fat burning, and may lower the risk of several cancers.",
    image: greenTea,
    alt: "Cup of freshly brewed green tea with leaves",
    imgFirst: false,
  },
  {
    title: "7. Sweet Potatoes",
    description:
      "Sweet potatoes are high in beta-carotene, fiber, and essential vitamins. They support eye health, digestion, and provide long-lasting energy.",
    image: sweetPotato,
    alt: "Roasted sweet potatoes rich in beta-carotene",
    imgFirst: true,
  },
  {
    title: "8. Greek Yogurt",
    description:
      "Greek yogurt is an excellent source of protein, calcium, and probiotics. It supports digestive health, bone strength, and muscle recovery.",
    image: greekYogurt,
    alt: "Bowl of Greek yogurt topped with fruit and honey",
    imgFirst: false,
  },
];

const Superfoods = () => {
  return (
    <section className="bg-white text-gray-800 py-28 px-6">
      {/* Heading */}
      <motion.h1
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="text-4xl font-bold text-green-600 text-center mb-6"
      >
        10 Superfoods for a Healthier You
      </motion.h1>

      {/* Main Image */}
      <motion.img
        src={superfoodsMain}
        alt="Assortment of superfoods on a table"
        className="rounded-lg shadow-lg w-full max-h-[400px] object-cover mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />

      {/* Intro Text */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-lg leading-relaxed mb-12"
      >
        <p>
          Superfoods are nutrient-dense foods considered especially beneficial
          for health and well-being. They are loaded with essential vitamins,
          antioxidants, and minerals that help prevent chronic diseases, improve
          energy levels, and support overall health.
        </p>
      </motion.div>

      {/* Superfoods List */}
      <div className="space-y-14 max-w-5xl mx-auto">
        {superfoods.map((food, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={`grid md:grid-cols-2 gap-6 items-center ${
              !food.imgFirst ? "md:flex-row-reverse" : ""
            }`}
          >
            <img
              src={food.image}
              alt={food.alt}
              className="rounded-lg shadow-md w-full h-auto object-cover"
            />
            <div>
              <h2 className="text-2xl font-semibold text-green-700 mb-2">
                {food.title}
              </h2>
              <p>{food.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Benefits Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="mt-16 bg-green-50 p-6 rounded-lg shadow-md max-w-4xl mx-auto"
      >
        <h3 className="text-2xl font-bold text-green-800 mb-4">
          Key Benefits of Superfoods:
        </h3>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>Boost immunity and reduce inflammation</li>
          <li>Improve energy and metabolism</li>
          <li>Support heart and brain health</li>
          <li>Assist in weight management</li>
          <li>Protect against chronic diseases</li>
        </ul>
      </motion.div>

      {/* Back to Blog Link */}
      <div className="text-center mt-16">
        <Link
          to="/blog"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-full transition duration-300"
        >
          ← Back to Blog
        </Link>
      </div>
    </section>
  );
};

export default Superfoods;
