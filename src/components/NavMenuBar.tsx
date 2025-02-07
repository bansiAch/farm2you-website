
import { Home, Store, Users, Settings,Search, ShoppingCart, User } from "lucide-react";


const navItems = [
  { name: "Home", icon: Home, link: "/home" },
  { name: "Shop", icon: Store, link: "#" },
  { name: "Customers", icon: Users, link: "#" },
  { name: "Settings", icon: Settings, link: "#" },
];

export default function Navbar() {
  return (
    <nav className="bg-forest text-white p-4 shadow-md flex justify-between items-center">
        <h1 className="text-2xl font-bold">Farm2You</h1>
        <div className="hidden md:flex space-x-6">
        <a href="/home" className="hover:text-gray-200">Home</a>
        <a href="/about" className="hover:text-gray-200">About</a>
        <a href="#" className="hover:text-gray-200">Products</a>
        <a href="/contact" className="hover:text-gray-200">Contact</a>
        </div>
        <div className="flex space-x-4">
          <Search className="cursor-pointer" />
          <ShoppingCart className="cursor-pointer" />
          <User className="cursor-pointer" />
        </div>
      </nav>
  );
}
