import React, { useState, useEffect } from "react";
const API_URL = import.meta.env.VITE_API_URL;

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({ name: "", comment: "" });
  const [submitStatus, setSubmitStatus] = useState(null);

  // Fetch reviews on mount
  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`${API_URL}/reviews`);
      if (!res.ok) throw new Error("Failed to fetch reviews");

      const data = await res.json();
      setReviews(data);
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // Handle form input changes
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Submit new review
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus(null);

    // Simple validation
    if (!formData.name.trim() || !formData.comment.trim()) {
      setSubmitStatus({
        success: false,
        message: "Name and comment are required.",
      });
      return;
    }

    try {
      const res = await fetch(`${API_URL}/reviews`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setSubmitStatus({ success: true, message: "Review submitted!" });
        setFormData({ name: "", comment: "" });
        // Refresh the reviews list to include the new one
        fetchReviews();
      } else {
        setSubmitStatus({
          success: false,
          message: data.error || "Submission failed.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: "Network error, please try again.",
      });
      console.log(error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-gray-800">
        Customer Reviews
      </h2>

      {/* Loading/Error States */}
      {loading && (
        <p className="text-center text-gray-600">Loading reviews...</p>
      )}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* Review Slider */}
      {!loading && !error && (
        <>
          {reviews.length === 0 ? (
            <p className="text-center text-gray-600">
              No reviews yet. Be the first to add one!
            </p>
          ) : (
            <div className="overflow-x-auto">
              <div className="flex gap-4 snap-x snap-mandatory overflow-x-scroll scroll-smooth pb-4">
                {reviews.map(({ _id, name, comment, date }) => (
                  <div
                    key={_id}
                    className="min-w-[280px] sm:min-w-[320px] max-w-xs snap-center flex-shrink-0 bg-white p-5 rounded-xl shadow-lg border border-gray-200"
                  >
                    <h1 className="text-lg font-semibold text-gray-800">
                      {name}
                    </h1>
                    <p className="text-xs text-gray-500 mb-2 italic">
                      {new Date(date).toLocaleDateString()}
                    </p>
                    <p className="text-gray-700">{comment}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}

      {/* Add Review Form */}
      <form onSubmit={handleSubmit} style={{ marginTop: 30 }}>
        <h1 className="text-4xl text-center my-6 font-bold">Leave a Review</h1>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full py-4 px-6 rounded-xl mb-3 border border-gray-500 placeholder:text-gray-700"
        />
        <textarea
          name="comment"
          placeholder="Your review"
          value={formData.comment}
          onChange={handleChange}
          required
          className="w-full py-4 px-6 rounded-xl border border-gray-500 placeholder:text-gray-700"
          rows={4}
        />
        <button className="py-3 px-6 rounded-full bg-green-500 hover:bg-green-400 cursor-pointer" type="submit">Submit Review</button>
        {submitStatus && (
          <p
            style={{
              color: submitStatus.success ? "green" : "red",
              marginTop: 10,
            }}
          >
            {submitStatus.message}
          </p>
        )}
      </form>
    </div>
  );
};

export default Reviews;
