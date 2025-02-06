import { useState } from "react";
import { FarmerCard } from "@/components/FarmerCard";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  const [activeTab, setActiveTab] = useState("buy-now");

  // Sample data
  const farmers = [
    {
      name: "Rajesh Kumar",
      location: "Punjab, India",
      imageUrl: "https://images.unsplash.com/photo-1517022812141-23620dba5c23",
      rating: 4,
      specialties: ["Organic", "Wheat", "Rice"],
      contractAvailable: true,
    },
    {
      name: "Anita Patel",
      location: "Gujarat, India",
      imageUrl: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d",
      rating: 5,
      specialties: ["Cotton", "Groundnuts"],
      contractAvailable: false,
    },
  ];

  const products = [
    {
      name: "Organic Wheat",
      price: 30,
      unit: "kg",
      imageUrl: "https://images.unsplash.com/photo-1493962853295-0fd70327578a",
      farmerName: "Rajesh Kumar",
      isContract: false,
    },
    {
      name: "Premium Cotton",
      price: 60,
      unit: "kg",
      imageUrl: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
      farmerName: "Anita Patel",
      isContract: true,
      availableDate: "October 2024",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-forest text-white py-6">
        <div className="container">
          <h1 className="text-3xl font-bold mb-2">Farm Fresh Direct</h1>
          <p className="text-forest-light">From Farm to Your Table</p>
        </div>
      </header>

      <main className="container py-8">
        <Tabs defaultValue="buy-now" className="mb-8">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
            <TabsTrigger value="buy-now">Buy Now</TabsTrigger>
            <TabsTrigger value="contract">Contract Farming</TabsTrigger>
          </TabsList>
          <TabsContent value="buy-now">
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">Available Products</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products
                  .filter((p) => !p.isContract)
                  .map((product) => (
                    <ProductCard key={product.name} {...product} />
                  ))}
              </div>
            </section>
          </TabsContent>
          <TabsContent value="contract">
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">Contract Opportunities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products
                  .filter((p) => p.isContract)
                  .map((product) => (
                    <ProductCard key={product.name} {...product} />
                  ))}
              </div>
            </section>
          </TabsContent>
        </Tabs>

        <section>
          <h2 className="text-2xl font-semibold mb-6">Featured Farmers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {farmers.map((farmer) => (
              <FarmerCard key={farmer.name} {...farmer} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;