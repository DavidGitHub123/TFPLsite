import React from 'react'
import '../../index.css'
import './Part3.css'
import { Link } from "react-router";

const Part3 = () => {
  return (
    <div className="part-container part3-hero">

      <div>
      <h1 >Part 3</h1>

      <div className="margin-part">
        <Link to="Chap1"><h2>Chapter 14: </h2></Link>
      </div>
      <div className="margin-part">
        <Link to="Chap2"><h2>Chapter 15</h2></Link>
      </div>

      <div>
      <Link className='btn' to="/">Home</Link>
    </div>

      </div>

    </div>
  )
}

export default Part3