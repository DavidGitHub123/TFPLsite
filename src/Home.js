import React, { useState } from 'react'
import Hero from "./Components/Hero/Hero";
import Programs from "./Components/Programs/Programs";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import './index.css'


export default function Home() {

  
  return (
    <div>
      <div>
        <Hero />
        <About/>
        <Programs />
        <Footer />
      </div>

    </div>

  );
}

