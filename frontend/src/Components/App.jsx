import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import HealthyFoods from "./HealthyFoods";
import WorkoutSection from "./WorkoutSection";
import RecipeSection from "./RecipeSection";
import AboutUsSection from "./AboutUsSection";
import ContactUsSection from "./ContactUsSection";
import Blog from "./Blog";
import MentalWellness from "./MentalWellness";
import Footer from "./Footer";
import "../App.css";
import PersonalTraining from "./PersonalTraining";
import NutritionalCounseling from "./NutritionCounseling";
import EnergyFoodGuide from "./EnergyFoodGuide";
import PrivacyPolicy from "./PrivacyPolicy";
import ReviewSection from "./ReviewSection";
import Superfoods from "./Superfoods";
import MorningWorkout from "./MorningWorkout";
import Mindfulness from "./Mindfulness";
import Hydration from "./Hydration";
import Sleep from "./Sleep";
import Strength from "./Strength";
import PlantBased from "./PlantBased";
import Motivation from "./Motivation";
import BalancedDiet from "./BalanceDiet";
import WeightManagement from "./WeightManagement";
import LabelRead from "./LabelRead";
import MealTimingFrequency from "./MealTimingFrequency";
import FoodSensitivities from "./FoodSensitivities";
import SportsNutrition from "./SportsNutrition";
import HydrationEducation from "./HydrationEducation";
import MindfulEating from "./MindfulEating";
import SupplementsGuidance from "./SupplementsGuidance";

function App() {
  // const [imageUrl, setImageUrl] = useState("");

  // useEffect(() => {
  //   const fetchImage = async () => {
  //     try {
  //       const res = await axios.get("http://localhost:5000/latest-image");
  //       setImageUrl(res.data.url);
  //     } catch (err) {
  //       console.error("Error fetching image:", err);
  //     }
  //   };

  //   fetchImage();
  // }, []);

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HealthyFoods />
              <ReviewSection />
              <Footer />
            </>
          }
        />
        <Route path="/recipe" element={<RecipeSection />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/hydration" element={<Hydration />} />
        <Route path="/superfoods" element={<Superfoods />} />
        <Route path="/mindfulness" element={<Mindfulness />} />
        <Route path="/sleep" element={<Sleep />} />
        <Route path="/plantbased" element={<PlantBased />} />
        <Route path="/strength" element={<Strength />} />
        <Route path="/motivation" element={<Motivation />} />
        <Route path="/morningworkout" element={<MorningWorkout />} />
        <Route path="/workoutssection" element={<WorkoutSection />} />
        <Route path="/aboutussection" element={<AboutUsSection />} />
        <Route path="/mentalwellness" element={<MentalWellness />} />
        <Route path="/energyfoods" element={<EnergyFoodGuide />} />
        <Route path="/balancediet" element={<BalancedDiet />} />
        <Route path="/labelread" element={<LabelRead />} />
        <Route path="/supplements" element={<SupplementsGuidance />} />
        <Route path="/mindfuleating" element={<MindfulEating />} />
        <Route path="/hydrationeducation" element={<HydrationEducation />} />
        <Route path="/sportsnutrition" element={<SportsNutrition />} />
        <Route path="/foodsensitivities" element={<FoodSensitivities />} />
        <Route path="/mealtiming" element={<MealTimingFrequency />} />
        <Route path="/weightmanagement" element={<WeightManagement />} />
        <Route
          path="/nutritionCounseling"
          element={<NutritionalCounseling />}
        />
        <Route path="/personaltraining" element={<PersonalTraining />} />
        <Route path="/contactussection" element={<ContactUsSection />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route
          path="*"
          element={
            <h1 className="text-center text-red-500 mt-10">
              404 - Page Not Found
            </h1>
          }
        />
        <Route
          path="*"
          element={
            <h1 className="text-center text-red-500 mt-10">
              404 - Page Not Found
              
            </h1>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
