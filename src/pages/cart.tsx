import React, { useState } from "react";
import { Link } from "react-router-dom";

const initialCart = [
  { id: 1, name: "Organic Apples", price: 150, quantity: 1, image: "https://via.placeholder.com/100" },
  { id: 2, name: "Fresh Carrots", price: 80, quantity: 2, image: "https://via.placeholder.com/100" },
];

const CartPage: React.FC = () => {
  const [cart, setCart] = useState(initialCart);

  const updateQuantity = (id: number, action: "increase" | "decrease") => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: action === "increase" ? item.quantity + 1 : Math.max(1, item.quantity - 1),
            }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-green-100 flex justify-center items-center p-6">
      <div className="bg-green-700 bg-opacity-90 text-white p-8 rounded-xl shadow-xl w-full max-w-4xl transition-all hover:shadow-2xl">
        <h1 className="text-3xl font-bold text-center mb-6">🛒 Your Cart</h1>

        {cart.length === 0 ? (
          <p className="text-center text-gray-200">
            Your cart is empty. <Link to="/products" className="text-green-300 underline">Shop Now</Link>
          </p>
        ) : (
          <div className="space-y-6">
            {cart.map((item) => (
              <div key={item.id} className="flex flex-col md:flex-row justify-between items-center bg-green-600 bg-opacity-70 p-4 rounded-lg shadow-md">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md" />
                <div className="text-center md:text-left flex-1 md:ml-4">
                  <h2 className="text-lg font-bold">{item.name}</h2>
                  <p className="text-green-300">₹{item.price} / kg</p>
                </div>
                <div className="flex items-center mt-2 md:mt-0">
                  <button className="px-3 py-1 bg-gray-500 rounded-lg hover:bg-gray-400 transition" onClick={() => updateQuantity(item.id, "decrease")}>-</button>
                  <span className="px-4 text-lg">{item.quantity}</span>
                  <button className="px-3 py-1 bg-gray-500 rounded-lg hover:bg-gray-400 transition" onClick={() => updateQuantity(item.id, "increase")}>+</button>
                </div>
                <button className="mt-2 md:mt-0 bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-400 transition" onClick={() => removeItem(item.id)}>Remove</button>
              </div>
            ))}

            {/* Total Price & Checkout */}
            <div className="flex flex-col md:flex-row justify-between items-center mt-6">
              <h2 className="text-xl font-bold text-green-100">Total: ₹{totalPrice}</h2>
              <Link to="/checkout" className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-400 transition-all shadow-md mt-4 md:mt-0">Proceed to Checkout</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
