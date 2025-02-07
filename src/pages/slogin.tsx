import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SellerLogin: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Seller Login Successful! File uploaded successfully.");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-800 to-green-900">
      <div className="bg-white bg-opacity-15 backdrop-blur-lg border border-white border-opacity-30 p-8 rounded-lg shadow-xl w-96 transition duration-300 hover:bg-opacity-25 hover:border-opacity-50">
        <h2 className="text-3xl font-bold text-center text-white mb-4">Seller Login</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Email Input */}
          <div>
            <label className="block text-white font-medium">Email</label>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 bg-transparent text-white"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-white font-medium">Password</label>
            <input
              type="password"
              name="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 bg-transparent text-white"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* File Upload Input */}
          <div>
            <label className="block text-white font-medium">Upload Proof (Any Format)</label>
            <input
              type="file"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 bg-transparent text-white file:bg-green-600 file:text-white file:rounded-lg file:px-4 file:py-2 file:mr-2 file:border-none hover:file:bg-green-700"
              accept="*/*"
              required
            />
          </div>

          {/* Submit Button */}
          <Link to="/dashboard">
            <Button
              size="lg"
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition duration-300 transform hover:scale-105"
            >
              Login as Seller
            </Button>
          </Link>

          {/* Forgot Password & Signup Links */}
          <div className="text-center mt-4">
             <Link to="#" className="text-green-300 hover:underline">
             Forgot Password?
             </Link>
             <p className="text-white mt-2">
                Don't have an account?{" "}
             <Link to="/fsignup" className="text-green-300 hover:underline">
            Sign Up
            </Link>
           </p>
          </div>

        </form>
      </div>
    </div>
  );
};

export default SellerLogin;
