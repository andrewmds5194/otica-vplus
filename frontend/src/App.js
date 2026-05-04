import React from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Differentials from "@/components/Differentials";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Home = () => {
  return (
    <main className="bg-black text-white" data-testid="home-page">
      <Header />
      <Hero />
      <About />
      <Products />
      <Differentials />
      <Testimonials />
      <FinalCTA />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        theme="dark"
        toastOptions={{
          style: {
            background: "#0A0A0A",
            border: "1px solid rgba(34,197,94,0.4)",
            color: "#fff",
          },
        }}
      />
    </div>
  );
}

export default App;
