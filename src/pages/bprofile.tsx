import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Edit, ShoppingCart, Heart, LogOut } from "lucide-react";

const BuyerProfile: React.FC = () => {
  return (
    <div className="min-h-screen bg-green-900 p-8 flex items-center justify-center">
      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl bg-white shadow-lg rounded-2xl p-6">
        
        {/* Left Section: Profile Picture & Basic Info */}
        <motion.div
          className="flex flex-col items-center p-6 bg-transparent text-white rounded-2xl shadow-md border border-white"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.img
            src="https://via.placeholder.com/120"
            alt="Buyer Profile"
            className="w-28 h-28 rounded-full border-4 border-green-400"
            whileHover={{ scale: 1.1 }}
          />
          <h2 className="mt-4 text-xl font-semibold">John Doe</h2>
          <p className="text-green-200">john.doe@email.com</p>

          {/* Profile Actions */}
          <div className="mt-4 flex flex-col gap-3 w-full">
            <Link to="/editProfile">
              <motion.button
                className="w-full flex items-center gap-2 text-white border border-white rounded-lg px-4 py-2 transition 
                  hover:bg-white hover:text-green-800"
                whileHover={{ scale: 1.05 }}
              >
                <Edit size={16} /> Edit Profile
              </motion.button>
            </Link>

            <Link to="/blogin">
              <motion.button
                className="w-full flex items-center gap-2 bg-red-600 text-white rounded-lg px-4 py-2 hover:bg-red-700"
                whileHover={{ scale: 1.05 }}
              >
                <LogOut size={16} /> Logout
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Right Section: Personal Details, Order History & Wishlist */}
        <div className="md:col-span-2 flex flex-col p-4">
          
          {/* Personal Info */}
          <h3 className="text-lg font-semibold text-green-800">Personal Info</h3>
          <p className="text-gray-600 mt-1">📍 Location: California, USA</p>
          <p className="text-gray-600">📞 Phone: +1 234 567 890</p>

          {/* Order History */}
          <h3 className="text-lg font-semibold text-green-800 mt-6">Order History</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <div className="p-4 flex items-center justify-between shadow-md border-green-200 bg-gray-100 rounded-lg">
              <p className="text-gray-700">Organic Tomatoes</p>
              <ShoppingCart className="text-green-600" size={24} />
            </div>

            <div className="p-4 flex items-center justify-between shadow-md border-green-200 bg-gray-100 rounded-lg">
              <p className="text-gray-700">Fresh Milk</p>
              <ShoppingCart className="text-green-600" size={24} />
            </div>
          </div>

          {/* Wishlist */}
          <h3 className="text-lg font-semibold text-green-800 mt-6">Wishlist</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <div className="p-4 flex items-center justify-between shadow-md border-green-200 bg-gray-100 rounded-lg">
              <p className="text-gray-700">Organic Honey</p>
              <Heart className="text-red-500" size={24} />
            </div>

            <div className="p-4 flex items-center justify-between shadow-md border-green-200 bg-gray-100 rounded-lg">
              <p className="text-gray-700">Fresh Avocados</p>
              <Heart className="text-red-500" size={24} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyerProfile;
