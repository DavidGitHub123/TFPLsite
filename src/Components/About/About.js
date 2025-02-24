import React from 'react'
import './About.css';
import { Link } from "react-router";

export default function About ({setPlayState}) {
  return (
    <div className='about'>
        <div className='about-right'>
            <h3>ABOUT THE WORDS TO IMPRESS APP</h3>
            <h2>Master the most impressive words as identified by the author of the best-selling Words You Should Know series of books.</h2>
            <p>Your language defines you, whether a professional, student studying for the SATs, or learning English as a second language. The Words to Impress App quickly and efficiently helps you develop an impressive vocabulary. Begin by taking a test of 25 random vocabulary words to test your word knowledge. Then judging by your score, get to work learning with innovative features!</p>
            <Link className='link' to="Introduction">Read More</Link>
        </div>
    </div>
  )
}

