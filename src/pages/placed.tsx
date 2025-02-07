import React from "react";
import { Link } from "react-router-dom";

const OrderConfirmation: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-green-100">
      <div className="bg-white p-8 rounded-xl shadow-xl text-center w-full max-w-lg">
        <h1 className="text-3xl font-bold text-green-700">Your order is placed.</h1>
        <div className="flex justify-center my-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 text-green-600"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586l-3.293-3.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <Link to="/home" className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-500 transition">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default OrderConfirmation;
