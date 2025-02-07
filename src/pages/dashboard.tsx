import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Bell } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";
import { motion } from "framer-motion";
import Image from "next/image";

const transactionsData = [
  { name: "Jan", total: 400, success: 380 },
  { name: "Feb", total: 500, success: 460 },
  { name: "Mar", total: 600, success: 550 },
  { name: "Apr", total: 700, success: 670 },
  { name: "May", total: 456, success: 587 },
  { name: "Jun", total: 750, success: 720 },
  { name: "Jul", total: 800, success: 780 },
];

const topProducts = [
  { name: "Premium T-Shirt", revenue: "$26,680.90", sales: "1,072", reviews: "1,727", views: "2,680" },
  { name: "Vintage T-Shirt", revenue: "$16,729.19", sales: "1,016", reviews: "720", views: "2,186" },
  { name: "New Premium Polo", revenue: "$12,872.24", sales: "987", reviews: "964", views: "1,872" },
];

export default function Dashboard() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen text-gray-800 font-sans animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold font-serif">Welcome Back Brandon</h1>
        <div className="flex items-center gap-4">
          <Search className="w-6 h-6 text-gray-600 transition-transform hover:scale-110 cursor-pointer" />
          <Bell className="w-6 h-6 text-gray-600 transition-transform hover:scale-110 cursor-pointer" />
          <Image src="/avatar.jpg" alt="Brandon Rosser" width={32} height={32} className="rounded-full border border-gray-300 shadow-lg" />
        </div>
      </div>
      
      <motion.div className="grid grid-cols-3 gap-4 mb-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <Card className="shadow-md bg-white p-4 transition-all hover:shadow-xl hover:scale-105 font-mono">
          <CardContent>
            <p className="text-gray-500">Gross Revenue</p>
            <h2 className="text-2xl font-bold text-green-600">$2,480.32</h2>
          </CardContent>
        </Card>
        <Card className="shadow-md bg-white p-4 transition-all hover:shadow-xl hover:scale-105 font-mono">
          <CardContent>
            <p className="text-gray-500">Avg. Order Value</p>
            <h2 className="text-2xl font-bold text-red-600">$56.12</h2>
          </CardContent>
        </Card>
        <Card className="shadow-md bg-white p-4 transition-all hover:shadow-xl hover:scale-105 font-mono">
          <CardContent>
            <p className="text-gray-500">Total Orders</p>
            <h2 className="text-2xl font-bold text-blue-600">230</h2>
          </CardContent>
        </Card>
      </motion.div>

      <div className="grid grid-cols-2 gap-6">
        <Card className="shadow-lg rounded-lg p-4 bg-white font-sans">
          <CardContent>
            <h3 className="text-lg font-semibold mb-2">Transaction Activity</h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={transactionsData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="total" stroke="#8884d8" strokeWidth={2} />
                <Line type="monotone" dataKey="success" stroke="#82ca9d" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="shadow-lg rounded-lg p-4 bg-white font-sans">
          <CardContent>
            <h3 className="text-lg font-semibold mb-2">Top Products</h3>
            <table className="w-full text-sm text-left border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  <th className="p-2">Product</th>
                  <th className="p-2">Revenue</th>
                  <th className="p-2">Sales</th>
                  <th className="p-2">Reviews</th>
                  <th className="p-2">Views</th>
                </tr>
              </thead>
              <tbody>
                {topProducts.map((product, index) => (
                  <tr key={index} className="border-t hover:bg-gray-100 transition-all">
                    <td className="p-2 font-serif">{product.name}</td>
                    <td className="p-2 font-mono">{product.revenue}</td>
                    <td className="p-2 font-mono">{product.sales}</td>
                    <td className="p-2 font-mono">{product.reviews}</td>
                    <td className="p-2 font-mono">{product.views}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
