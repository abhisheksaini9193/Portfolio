import "./HeroimgStyles.css";

import React from 'react'
import laptopimg from "../images/laptopimg.jpg"
import { Link } from "react-router-dom";

function Heroimg() {
  return (
    <div className="hero">
        <div className="mask">
        <img className="laptopimg" src={laptopimg} alt="laptopimg"/>   
        </div>
        <div className="content">
          <p>Hii, I'M A FREELANCER</p>
          <h1>Front End Developer...</h1>
         <div>
           <Link to="/project" className="btn">Projects</Link>
           <Link to="/contact" className="btn btn-light">Contact</Link>
         </div>
          
        </div>
    </div>
  )
}

export default Heroimg