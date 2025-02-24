import React from 'react'
import './Part1.css'
import '../../index.css'
import { Link } from "react-router";

const Part1 = () => {
  return (

    <div className="part-container part1-hero">

      <div>
      <h1 >Part 1</h1>

      <div className="margin-part">
        <Link to="Chap1"><h2>Chapter 1: </h2></Link>
      </div>
      <div className="margin-part">
        <Link to="Chap2"><h2>Chapter 2:</h2></Link>
      </div>
      <div className="margin-part">
        <Link to="Chap3"><h2>Chapter 3:</h2></Link>
      </div>
      <div className="margin-part">
        <Link to="Chap4"><h2>Chapter 4:</h2></Link>
      </div>
      <div className="margin-part">
        <Link to="Chap5"><h2>Chapter 5:</h2></Link>
      </div>

      <div>
      <Link className='btn' to="/">Home</Link>
    </div>

      </div>

    </div>
  )
}

export default Part1
