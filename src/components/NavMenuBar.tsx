
import { Home, Store, Users, Settings,Search, ShoppingCart, User, Link } from "lucide-react";


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
        <Link to="/home" className="hover:text-gray-200">Home</Link>
        <Link to="/about" className="hover:text-gray-200">About</Link>
        <Link to="#" className="hover:text-gray-200">Products</Link>
        <Link to="/contact" className="hover:text-gray-200">Contact</Link>
        </div>
        <div className="flex space-x-4">
          <Search className="cursor-pointer" />
          <ShoppingCart className="cursor-pointer" />
          <User className="cursor-pointer" />
        </div>
      </nav>
  );
}
