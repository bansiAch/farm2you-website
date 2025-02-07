import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
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
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md transition duration-300 hover:shadow-xl">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-6">We Value Your Feedback</h2>
        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Name Input */}
          <div>
            <label className="block text-gray-700 font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={feedback.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-700"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={feedback.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-700"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Rating Selection */}
          <div>
            <label className="block text-gray-700 font-medium">Rating</label>
            <select
              name="rating"
              value={feedback.rating}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-700"
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
            <label className="block text-gray-700 font-medium">Message</label>
            <textarea
              name="message"
              value={feedback.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-700"
              placeholder="Write your feedback..."
              rows={4}
              required
            />
          </div>

          {/* Submit Button */}
          <Link to="/home">
                <Button size="lg" className="bg-white text-forest hover:bg-forest-light hover:text-white">
                 Submit Now <ArrowRight className="ml-2" />
                </Button>
              </Link>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
