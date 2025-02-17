import React from 'react'
import './Hero.css'
import dark_arrow from '../../Assets/Img/dark-arrow.png'

export default function Hero () {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1 className='build'>Build Your Vocabulary Prowess</h1>
        <p>Increase your powers of persuasion and comprehension with the Words to Impress App.</p>
        {/* <button className='btn'>Explore More <img src={dark_arrow} alt='' /></button> */}
      </div>
    </div>
  )
}

