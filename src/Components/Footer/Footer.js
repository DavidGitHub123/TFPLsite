import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom';

export default function Footer () {
  return (
    <div className='footer'>
        <p>All rights reserved.</p>
        <Link to="/Privacypolicy">Privacy Policy</Link>
    </div>
  )
}
