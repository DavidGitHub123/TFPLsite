import React from 'react'
import '../../index.css'
import './Part5.css'
import { Link } from "react-router";

const Part5 = () => {
  return (
    <div className="part-container part5-hero">
  
        <div>
        <h1 >Part 5</h1>
  
        <div className="margin-part">
          <Link to="Chap1"><h2>Chapter 19: </h2></Link>
        </div>
        <div className="margin-part">
          <Link to="Chap2"><h2>Chapter 20</h2></Link>
        </div>
        <div className="margin-part">
          <Link to="Chap3"><h2>Chapter 21</h2></Link>
        </div>
        <div className="margin-part">
          <Link to="Chap4"><h2>Chapter 22</h2></Link>
        </div>
        <div className="margin-part">
          <Link to="Chap5"><h2>Chapter 23</h2></Link>
        </div>
        <div className="margin-part">
          <Link to="Chap1"><h2>Chapter 24: </h2></Link>
        </div>
        <div className="margin-part">
          <Link to="Chap2"><h2>Chapter 25</h2></Link>
        </div>
        <div className="margin-part">
          <Link to="Chap3"><h2>Chapter 26</h2></Link>
        </div>
        <div className="margin-part">
          <Link to="Chap4"><h2>Chapter 27</h2></Link>
        </div>

        <div>
        <Link className='btn' to="/">Home</Link>
      </div>
  
        </div>
  
      </div>
    
  )
}

export default Part5