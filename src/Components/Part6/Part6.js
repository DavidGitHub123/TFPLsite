import React from 'react'
import '../../index.css'
import './Part6.css'
import { Link } from "react-router";

const Part6 = () => {
  return (
    <div className="part-container part6-hero">

      <div>
      <h1 >Part 6</h1>

      <div className="margin-part">
        <Link to="Chap1"><h2>Chapter 28: </h2></Link>
      </div>
      <div className="margin-part">
        <Link to="Chap2"><h2>Chapter 29:</h2></Link>
      </div>
      <div className="margin-part">
        <Link to="Chap3"><h2>Chapter 30:</h2></Link>
      </div>
      <div className="margin-part">
        <Link to="Chap4"><h2>Chapter 31:</h2></Link>
      </div>

      <div>
      <Link className='btn' to="/">Home</Link>
    </div>

      </div>

    </div>
  )
}

export default Part6