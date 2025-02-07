import React, { useState } from "react";

const SellerLogin: React.FC = () => {
  const [sellerData, setSellerData] = useState({
    email: "",
    password: "",
    proofFile: null as File | null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSellerData({ ...sellerData, [e.target.name]: e.target.value });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setSellerData({ ...sellerData, proofFile: file });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Seller Login Data Submitted:", sellerData);
    alert("Seller Login Successful! File uploaded successfully.");
    setSellerData({ email: "", password: "", proofFile: null });
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
              value={sellerData.email}
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
              value={sellerData.password}
              onChange={handleChange}
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
              onChange={handleFileUpload}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 bg-transparent text-white file:bg-green-600 file:text-white file:rounded-lg file:px-4 file:py-2 file:mr-2 file:border-none hover:file:bg-green-700"
              accept="*/*"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition duration-300 transform hover:scale-105"
          >
            Login as Seller
          </button>

          {/* Forgot Password & Signup Links */}
          <div className="text-center mt-4">
            <a href="#" className="text-green-300 hover:underline">Forgot Password?</a>
            <p className="text-white mt-2">
              Don't have an account? <a href="#" className="text-green-300 hover:underline">Sign Up</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SellerLogin;
