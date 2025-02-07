import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const BuyerLogin: React.FC = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login Data Submitted:", loginData);
    alert("Login Successful!");
    setLoginData({ email: "", password: "" });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-800 to-green-900">
      <div className="bg-white bg-opacity-15 backdrop-blur-lg border border-white border-opacity-30 p-8 rounded-lg shadow-xl w-96 transition duration-300 hover:bg-opacity-25 hover:border-opacity-50">
        <h2 className="text-3xl font-bold text-center text-white mb-4">Buyer Login</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Email Input */}
          <div>
            <label className="block text-white font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={loginData.email}
              onChange={handleChange}
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
              value={loginData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 bg-transparent text-white"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Submit Button */}
          <Link to="/home">
           <Button
            size="lg"
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition duration-300 transform hover:scale-105"
            >Login</Button></Link>

          {/* Forgot Password & Signup Links */}
          <div className="text-center mt-4">
            <a href="#" className="text-green-300 hover:underline">Forgot Password?</a>
            <p className="text-white mt-2">
              Don't have an account? <a href="/bsignup" className="text-green-300 hover:underline">Sign Up</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BuyerLogin;
