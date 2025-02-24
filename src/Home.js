import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Programs from "./Components/Programs/Programs";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import './index.css'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Footer />
  </div>

  );
}

