import React, { useEffect, useState } from 'react'
import './Navbar.css'
import menu_icon from '../../Assets/Img/menu-icon.png'
import { Link } from "react-router";

export default function Navbar () {

  const [sticky, setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 500 ? setSticky(true) : setSticky(false);
      })
  },[]);

  const [mobileMenu, setMobileMenu] =useState(false);
  const toggleMenu = ()=> {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }

  return (
    <nav className={`container ${sticky? 'dark-nav' : ''} `}>
       <ul className={mobileMenu?'':'hide-mobile-menu'}>
       <li><Link to="Contact">Contact</Link></li>
       <li><Link to="Contact">Contact</Link></li>
       <li><Link to="Contact">Contact</Link></li>
       <li><Link to="Contact">Contact</Link></li>
       </ul>
       <img src={menu_icon} alt='' className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}


