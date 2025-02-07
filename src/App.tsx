import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import FarmerSignUp from "./pages/FSignUP";
import BuyerSignUp from "./pages/BSignUp";
import ProfileSetup from "./pages/profilesetup";
import Home from "./pages/Home";
import Dashboard from "./pages/dashboard";
import NavMenuBar from "./components/NavMenuBar";

const queryClient = new QueryClient();

const App = () => {
  // Get the current pathname
  const currentPath = window.location.pathname;

  // Define routes where the navbar should be hidden
  const hideNavbarRoutes = ["/buyersignup", "/farmersignup", "/profilesetup", "/"];

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          {/* Show Navbar only if the current path is not in hideNavbarRoutes */}
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/farmersignup" element={<FarmerSignUp />} />
            <Route path="/buyersignup" element={<BuyerSignUp />} />
            <Route path="/profilesetup" element={<ProfileSetup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/home" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
