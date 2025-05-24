import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

const ReviewSection = () => {
  const [reviews, setReviews] = useState([]);
  const [form, setForm] = useState({ name: "", comment: "" });
  const [mood, setMood] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/reviews").then((res) => {
      setReviews(res.data);
    });
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.comment) return;
    await axios.post("http://localhost:5000/reviews", form);
    const res = await axios.get("http://localhost:5000/reviews");
    setReviews(res.data);
    setForm({ name: "", comment: "" });
  };

  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <>
      <div className="px-4 md:px-8 lg:px-16 py-10 bg-white">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl text-green-600 text-center font-bold mb-8">
          User Reviews
        </h2>

        <div className="relative">
          {/* Left Button */}
          <button
            onClick={scrollLeft}
            className="absolute -left-10 top-1/2 -translate-y-1/2 z-10"
          >
            <i className="w-10 h-10 hidden md:flex items-center bg-green-500 text-white justify-center rounded-full fa-solid fa-less-than"></i>
          </button>

          {/* Scrollable Review Cards */}
          <div
            ref={sliderRef}
            className="flex overflow-x-auto space-x-4 scroll-smooth hide-scrollbar py-4 px-1"
          >
            {reviews.map((review) => (
              <div
                key={review._id}
                className="w-72 h-64 overflow-auto hide-scrollbar bg-gray-50 p-5 rounded-xl shadow-md flex-shrink-0 transition hover:scale-105 duration-300"
              >
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  {review.name}
                </h4>
                <p className="text-gray-600 text-sm mb-3">{review.comment}</p>
                <div className="flex items-center mb-3 text-green-400 justify-start space-x-2 ">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <span className="text-xs flex text-gray-400 block">
                  {new Date(review.date).toLocaleString()}
                </span>
              </div>
            ))}
          </div>

          {/* Right Button */}
          <button
            onClick={scrollRight}
            className="absolute -right-10 top-1/2 -translate-y-1/2 z-10"
          >
            <i className="fa-solid w-10 h-10 hidden md:flex items-center justify-center bg-green-500 text-white rounded-full fa-greater-than"></i>
          </button>
        </div>
        <form onSubmit={handleSubmit} className="mb-6 my-10">
          <input
            name="name"
            value={form.name}
            required
            onChange={handleChange}
            placeholder="Your name"
            className="w-full p-2 mb-2 border rounded"
          />
          <textarea
            name="comment"
            value={form.comment}
            onChange={handleChange}
            required
            placeholder="Your review"
            className="w-full p-2 mb-2 border rounded"
          />
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default ReviewSection;
