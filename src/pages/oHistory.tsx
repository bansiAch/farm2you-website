import React, { useState } from "react";
import { Link } from "react-router-dom";

const initialOrders = [
  { id: 1, item: "Organic Apples", price: 150, status: "Delivered", date: "2025-02-01" },
  { id: 2, item: "Fresh Carrots", price: 80, status: "Shipped", date: "2025-02-05" },
  { id: 3, item: "Wheat Flour", price: 120, status: "Processing", date: "2025-02-07" },
];

const OrderHistoryPage: React.FC = () => {
  const [orders] = useState(initialOrders);

  return (
    <div className="min-h-screen bg-green-100 flex justify-center items-center p-6">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-3xl">
        <h1 className="text-3xl font-bold text-center text-green-700 mb-6">Order History</h1>
        
        {orders.length === 0 ? (
          <p className="text-center text-gray-500">No orders found.</p>
        ) : (
          <div className="space-y-4">
            {orders.map((order) => (
              <div key={order.id} className="flex justify-between items-center bg-green-50 p-4 rounded-lg shadow-md">
                <div>
                  <h2 className="text-lg font-bold text-green-700">{order.item}</h2>
                  <p className="text-gray-600">₹{order.price}</p>
                </div>
                <div className="text-center">
                  <p className={`text-sm font-semibold ${order.status === "Delivered" ? "text-green-600" : order.status === "Shipped" ? "text-yellow-600" : "text-red-600"}`}>{order.status}</p>
                  <p className="text-gray-500 text-sm">{order.date}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="text-center mt-6">
          <Link to="/home" className="text-green-600 underline">Continue Shopping</Link>
        </div>
      </div>
    </div>
  );
};

export default OrderHistoryPage;
