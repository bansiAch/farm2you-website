import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight} from "lucide-react";
import { Link } from "react-router-dom";


const FeedbackForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData(formRef.current!);
    const feedback = Object.fromEntries(formData.entries());

    console.log("Feedback Submitted:", feedback);
    alert("Thank you for your feedback!");

    formRef.current?.reset(); // Reset form after submission
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-green-900 via-green-700 to-green-500">
      <div className="bg-white/10 backdrop-blur-xl border border-white/30 p-8 rounded-2xl shadow-2xl w-[400px] transition duration-300 hover:bg-white/20 hover:border-white/40">
        <h2 className="text-3xl font-bold text-center text-white mb-4">Feedback Form</h2>
        <form className="space-y-4" ref={formRef} onSubmit={handleSubmit}>
          {/* Name Input */}
          <div>
            <label className="block text-white font-medium">Name</label>
            <input
              type="text"
              name="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 bg-transparent text-white placeholder-gray-200"
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
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 bg-transparent text-white placeholder-gray-200"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Rating Selection */}
          <div>
            <label className="block text-white font-medium">Rating</label>
            <select
              name="rating"
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
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 bg-transparent text-white placeholder-gray-200"
              placeholder="Write your feedback..."
              rows={4}
              required
            />
          </div>

          {/* Submit Button */}
          
            <Link to="/home">
              <Button size="lg" className="bg-white text-forest hover:bg-forest-light hover:text-white">
               Submit <ArrowRight className="ml-2" />
              </Button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
