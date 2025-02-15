import React from 'react'
import './Hero.css'
import dark_arrow from '../../Assets/Img/dark-arrow.png'

export default function Hero () {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>We Ensure Better Education for a Better World</h1>
        <p>Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excelin the dynamic field of education.</p>
        <button className='btn'>Explore More <img src={dark_arrow} alt='' /></button>
      </div>
    </div>
  )
}

