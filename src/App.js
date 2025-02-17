import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Programs from './Components/Programs/Programs';
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';



export default function App () {
  
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
        <About/>
        <Title subTitle='Key Features' title='Tools to Build Your Powerful Vocabulary'/>
        <Programs/>
        <Title subTitle='TESTIMONIALS' title='What Words to Impress App Fans are Saying'/>
        <Testimonials/>
        <Title subTitle='Contact' title='Get in Touch'/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  )
}

   {/* https://www.youtube.com/watch?v=WbV3zRgpw_E 2:06 */}


