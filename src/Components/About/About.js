import React from 'react'
import "../../index.css";
import './About.css';
import { Link } from "react-router";
import video from '../../Assets/Img/video.jpg'

export default function About ({setPlayState}) {
  return (
    <div className='about'>

        <div className='about-left'>
            <img src={video} alt='Mormon Prophet Russell Nelson' className='about-img'/>
        </div>
        
        <div className='about-right'>
          <p>In the October 2024 general conference, Mormon prophet Russell Nelson announced, “Brothers and sisters, now is the time for you and for me to prepare for the Second Coming of our Lord and Savior, Jesus the Christ.” The theme of his remarks was hastening the Lord’s work and preparing for an implied near Second Coming. Russell Nelson concluded, “The best is yet to come … because the Savior is coming again!”
          </p>
            <p>To make such bold claims, did Russell Nelson receive a revelation? Did Christ appear to him in vision? Did he hear an audible voice, 
              “I am coming?” Did Christ reveal any additional information? Russell Nelson was silent on the matter. Instead, this Mormon prophet left his church membership to 
              come to their own conclusions. Perhaps he should have given his followers more information about such a life-altering event? The response from church members to this grand revelation? The prophet’s remarks ignited a firestorm of speculation and concern. Young people online wondered aloud about what the future holds. Dyed-in-the-wool, true-blue Mormons expressed excitement.       
            </p>
            <Link className='link' to="Intro">Read More</Link>
        </div>
        </div>
   
  )
}

