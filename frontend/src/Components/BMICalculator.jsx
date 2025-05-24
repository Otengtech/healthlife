import { useState } from "react";

const BMICalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBMI] = useState(null);

  const calculateBMI = () => {
    const h = height / 100;
    const result = weight / (h * h);
    setBMI(result.toFixed(2));
  };

  return (
    <div className="max-w-md mx-auto px-6 bg-white shadow rounded-lg py-10 my-10">
      <h3 className="text-lg font-bold text-center mb-4">BMI Calculator</h3>
      <input
        type="number"
        placeholder="Weight (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        className="w-full p-2 border rounded mb-2"
      />
      <input
        type="number"
        placeholder="Height (cm)"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
        className="w-full p-2 border rounded mb-2"
      />
      <button
        onClick={calculateBMI}
        className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
      >
        Calculate
      </button>
      {bmi && <p className="text-center mt-4">Your BMI: {bmi}</p>}
    </div>
  );
};

export default BMICalculator;