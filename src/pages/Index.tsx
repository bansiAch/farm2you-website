import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Shield, Truck } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-forest text-white py-16">
        <div className="container max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Farm Fresh Direct</h1>
          <p className="text-xl md:text-2xl text-forest-light mb-8">Connecting Farmers Directly to Your Table</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-white text-forest hover:bg-forest-light hover:text-white"
              onClick={() => window.location.href = "/buy"}
            >
              Start Buying <ArrowRight className="ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-forest"
              onClick={() => window.location.href = "/sell"}
            >
              Start Selling <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 container max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-forest">Why Choose Farm Fresh Direct?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-lg bg-white shadow-md">
            <div className="inline-block p-3 bg-forest-light/10 rounded-full mb-4">
              <Leaf className="w-8 h-8 text-forest" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Fresh & Direct</h3>
            <p className="text-gray-600">Get fresh produce directly from local farmers, ensuring quality and supporting local agriculture.</p>
          </div>
          <div className="text-center p-6 rounded-lg bg-white shadow-md">
            <div className="inline-block p-3 bg-forest-light/10 rounded-full mb-4">
              <Shield className="w-8 h-8 text-forest" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Contract Farming</h3>
            <p className="text-gray-600">Secure your produce in advance through contract farming, ensuring steady supply and fair prices.</p>
          </div>
          <div className="text-center p-6 rounded-lg bg-white shadow-md">
            <div className="inline-block p-3 bg-forest-light/10 rounded-full mb-4">
              <Truck className="w-8 h-8 text-forest" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Direct Delivery</h3>
            <p className="text-gray-600">Get your fresh produce delivered directly to your doorstep from our network of trusted farmers.</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-forest-light/10">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-forest">How It Works</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-forest">For Buyers</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="font-bold mr-2">1.</span>
                  Browse fresh produce from local farmers
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">2.</span>
                  Choose between direct purchase or contract farming
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">3.</span>
                  Get fresh produce delivered to your doorstep
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-forest">For Farmers</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="font-bold mr-2">1.</span>
                  List your produce or contract farming opportunities
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">2.</span>
                  Connect directly with customers
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">3.</span>
                  Get fair prices for your produce
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;