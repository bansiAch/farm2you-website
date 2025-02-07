import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, ShoppingCart, User } from "lucide-react";

const products = [
  { id: 1, name: "Organic Tomatoes", price: "$2/kg", image: "/images/tomatoes.jpg" },
  { id: 2, name: "Fresh Milk", price: "$1/L", image: "/images/milk.jpg" },
  { id: 3, name: "Wheat Flour", price: "$3/kg", image: "/images/flour.jpg" },
];

const farmers = [
  { id: 1, name: "John's Organic Farm", location: "New York", rating: "4.8⭐", image: "/images/farmer1.jpg" },
  { id: 2, name: "Green Valley Farms", location: "Texas", rating: "4.6⭐", image: "/images/farmer2.jpg" },
];

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-green-700 text-white p-4 shadow-md flex justify-between items-center">
        <h1 className="text-2xl font-bold">FarmConnect</h1>
        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-gray-200">Home</a>
          <a href="#" className="hover:text-gray-200">About</a>
          <a href="#" className="hover:text-gray-200">Products</a>
          <a href="#" className="hover:text-gray-200">Contact</a>
        </div>
        <div className="flex space-x-4">
          <Search className="cursor-pointer" />
          <ShoppingCart className="cursor-pointer" />
          <User className="cursor-pointer" />
        </div>
      </nav>

      {/* Search Bar */}
      <div className="flex justify-center mt-6">
        <Input
          className="w-3/4 md:w-1/2 rounded-lg border-gray-300 shadow-sm"
          placeholder="Search products, farms, or farmers..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Product Display Section */}
      <div className="container mx-auto px-4 mt-8">
        <h2 className="text-xl font-bold mb-4">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="shadow-md">
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-t-lg" />
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-600">{product.price}</p>
                <Button className="mt-2 bg-green-600 hover:bg-green-500 text-white w-full">Buy Now</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Top Trending Farmers */}
      <div className="container mx-auto px-4 mt-10">
        <h2 className="text-xl font-bold mb-4">Top Trending Farmers Near You</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {farmers.map((farmer) => (
            <Card key={farmer.id} className="shadow-md">
              <img src={farmer.image} alt={farmer.name} className="w-full h-40 object-cover rounded-t-lg" />
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold">{farmer.name}</h3>
                <p className="text-gray-600">{farmer.location}</p>
                <p className="text-yellow-500">{farmer.rating}</p>
                <Button className="mt-2 bg-green-600 hover:bg-green-500 text-white w-full">View Profile</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
