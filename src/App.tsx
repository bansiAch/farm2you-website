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
<<<<<<< HEAD
import Dashboard from "./pages/dashboard";
=======
import Home from "./pages/Home";
>>>>>>> a1608f16b0041045dc91bae38695f7729566ed5d

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/farmersignup" element={<FarmerSignUp />} />
          <Route path="/buyersignup" element={<BuyerSignUp />} />
          <Route path="/profilesetup" element={<ProfileSetup />} />
<<<<<<< HEAD
          <Route path= "/dashboard" element = {<Dashboard/>}/>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
=======
          <Route path="/home" element={<Home />} />
>>>>>>> a1608f16b0041045dc91bae38695f7729566ed5d
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
