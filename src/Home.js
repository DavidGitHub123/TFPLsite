import React, { useState } from 'react'
import Hero from "./Components/Hero/Hero";
import Programs from "./Components/Programs/Programs";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import './index.css'
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";


export default function Home() {

  const [playState, setPlayState] = useState(false);
  
  return (
    <div>
      <div>
        <Hero />
        <About setPlayState={setPlayState}/>
        <Programs />
        <Footer />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>

  );
}

