import React, { useState } from "react";

const FeedbackForm: React.FC = () => {
  const [feedback, setFeedback] = useState({
    name: "",
    email: "",
    rating: "5",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFeedback({ ...feedback, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Feedback Submitted:", feedback);
    alert("Thank you for your feedback!");
    setFeedback({ name: "", email: "", rating: "5", message: "" });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-800 to-green-900">
      <div className="bg-white bg-opacity-15 backdrop-blur-lg border border-white border-opacity-30 p-8 rounded-lg shadow-xl w-96 transition duration-300 hover:bg-opacity-25 hover:border-opacity-50">
        <h2 className="text-3xl font-bold text-center text-white mb-4">Feedback Form</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Name Input */}
          <div>
            <label className="block text-white font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={feedback.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 bg-transparent text-white"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-white font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={feedback.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 bg-transparent text-white"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Rating Selection */}
          <div>
            <label className="block text-white font-medium">Rating</label>
            <select
              name="rating"
              value={feedback.rating}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 bg-transparent text-white"
            >
              <option value="5">⭐⭐⭐⭐⭐ - Excellent</option>
              <option value="4">⭐⭐⭐⭐ - Good</option>
              <option value="3">⭐⭐⭐ - Average</option>
              <option value="2">⭐⭐ - Poor</option>
              <option value="1">⭐ - Very Bad</option>
            </select>
          </div>

          {/* Message Input */}
          <div>
            <label className="block text-white font-medium">Message</label>
            <textarea
              name="message"
              value={feedback.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 bg-transparent text-white"
              placeholder="Write your feedback..."
              rows={4}
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition duration-300 transform hover:scale-105"
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
