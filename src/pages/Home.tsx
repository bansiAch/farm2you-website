import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Heart } from "lucide-react";
import NavMenuBar from "@/components/NavMenuBar";

const products = [
  { id: 1, name: "Organic Tomatoes", price: "$2/kg", image: "/images/tomatoes.jpg", inStock: true },
  { id: 2, name: "Fresh Milk", price: "$1/L", image: "/images/milk.jpg", inStock: false },
  { id: 3, name: "Wheat Flour", price: "$3/kg", image: "/images/flour.jpg", inStock: true },
];

const farmers = [
  { id: 1, name: "Narsi's Traditional Farm", location: "Paralakhemundi", rating: "4.8⭐", image: "/images/farmer1.jpg", verified: true },
  { id: 2, name: "Green Valley Farms", location: "Texas", rating: "4.6⭐", image: "/images/farmer2.jpg", verified: false },
];

const Home = () => {
  return (
    <>
      <NavMenuBar />
      <div className="min-h-screen bg-gray-100">
        {/* Header */}
        <div className="text-center py-6">
          <h1 className="text-3xl font-bold">Welcome to the Home Page</h1>
        </div>

        {/* Search Bar */}
        <div className="flex justify-center mt-6 relative w-3/4 md:w-1/2 mx-auto">
          <Search className="absolute left-3 top-3 text-gray-400" size={20} />
          <Input
            className="w-full pl-10 rounded-lg border-gray-300 shadow-sm"
            placeholder="Search products, farms, or farmers..."
          />
        </div>

        {/* Small Ad Space */}
        <div className="container mx-auto px-4 mt-6">
          <div className="w-full h-20 bg-gray-300 flex items-center justify-center text-gray-700 font-semibold">
            Small Ad Space
          </div>
        </div>

        {/* Product Display Section */}
        <div className="container mx-auto px-4 mt-8">
          <h2 className="text-xl font-bold mb-4">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="shadow-md relative">
                <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-t-lg" />
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-gray-600">{product.price}</p>
                  <p className={`text-sm font-semibold ${product.inStock ? "text-green-600" : "text-red-600"}`}>
                    {product.inStock ? "In Stock" : "Out of Stock"}
                  </p>
                  <div className="flex justify-between mt-2">
                    <Button className="bg-green-600 hover:bg-green-500 text-white">Add to Cart</Button>
                    <Heart className="text-red-500 cursor-pointer" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Medium Ad Space */}
        <div className="container mx-auto px-4 mt-10">
          <div className="w-full h-32 bg-gray-300 flex items-center justify-center text-gray-700 font-semibold">
            Medium Ad Space
          </div>
        </div>

        {/* Top Trending Farmers */}
        <div className="container mx-auto px-4 mt-10">
          <h2 className="text-xl font-bold mb-4">Top Trending Farmers Near You</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {farmers.map((farmer) => (
              <Card key={farmer.id} className="shadow-md relative group hover:shadow-lg transition-shadow">
                <img src={farmer.image} alt={farmer.name} className="w-full h-40 object-cover rounded-t-lg" />
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold flex items-center">
                    {farmer.name}
                    {farmer.verified && (
                      <span className="ml-2 text-green-600 text-sm font-bold">✔ Verified</span>
                    )}
                  </h3>
                  <p className="text-gray-600">{farmer.location}</p>
                  <p className="text-yellow-500">{farmer.rating}</p>
                  <Button className="mt-2 bg-green-600 hover:bg-green-500 text-white w-full">
                    View Profile
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
