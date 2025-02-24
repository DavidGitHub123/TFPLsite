import React from 'react'
import '../../index.css'
import './Part4.css'
import { Link } from "react-router";

const Part4 = () => {
  return (
    <div className="part-container part4-hero">

      <div>
      <h1 >Part 4</h1>

      <div className="margin-part">
        <Link to="Chap1"><h2>Chapter 16: </h2></Link>
      </div>
      <div className="margin-part">
        <Link to="Chap2"><h2>Chapter 17</h2></Link>
      </div>
      <div className="margin-part">
        <Link to="Chap3"><h2>Chapter 18</h2></Link>
      </div>

      <div>
      <Link className='btn' to="/">Home</Link>
    </div>

      </div>

    </div>
  )
}

export default Part4