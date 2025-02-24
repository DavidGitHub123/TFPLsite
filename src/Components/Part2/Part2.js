import React from 'react'
import './Part2.css'
import '../../index.css'
import { Link } from "react-router";

const Part2 = () => {
  return (
    <div className="part-container part2-hero">

      <div>
      <h1 >Part 2</h1>

      <div className="margin-part">
        <Link to="Chap1"><h2>Chapter 6: </h2></Link>
      </div>
      <div className="margin-part">
        <Link to="Chap2"><h2>Chapter 7</h2></Link>
      </div>
      <div className="margin-part">
        <Link to="Chap3"><h2>Chapter 8</h2></Link>
      </div>
      <div className="margin-part">
        <Link to="Chap4"><h2>Chapter 9</h2></Link>
      </div>
      <div className="margin-part">
        <Link to="Chap5"><h2>Chapter 10</h2></Link>
      </div>
      <div className="margin-part">
        <Link to="Chap5"><h2>Chapter 11</h2></Link>
      </div>
      <div className="margin-part">
        <Link to="Chap5"><h2>Chapter 12</h2></Link>
      </div>
      <div className="margin-part">
        <Link to="Chap5"><h2>Chapter 13</h2></Link>
      </div>

      <div>
      <Link className='btn' to="/">Home</Link>
    </div>

      </div>

    </div>
  )
}

export default Part2