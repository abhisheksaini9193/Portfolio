import { Link } from "react-router-dom"
import "./PricingCardStyles.css"

import React from 'react'

const Pricingcard = () => {
  return <div className="pricing">
    <div className="card-container">
    <div className="card">
        <h3>- Basic -</h3>
        <span className="bar"></span>
        <p className="btc"> $100</p>
        <p>- 3 Days -</p>
        <p>- 3 pages -</p>
        <p>- Featured -</p>
        <p>- Responsive Desgin -</p>
        <Link to="/conatct" className="btn">
            PURCHASE NOW
        </Link>
        </div> 
        <div className="card">
        <h3>- Premium -</h3>
        <span className="bar"></span>
        <p className="btc"> $200</p>
        <p>- 2 Days -</p>
        <p>- 5 pages -</p>
        <p>- Featured -</p>
        <p>- Responsive Desgin -</p>
        <Link to="/conatct" className="btn">
            PURCHASE NOW
        </Link>
        </div> 
        <div className="card">
        <h3>- Bussiness -</h3>
        <span className="bar"></span>
        <p className="btc"> $300</p>
        <p>- 5 Days -</p>
        <p>- 8 pages -</p>
        <p>- Featured -</p>
        <p>- Responsive Desgin -</p>
        <Link to="/conatct" className="btn">
            PURCHASE NOW
        </Link>
        </div> 
  </div>
  </div>
  
  
}

export default Pricingcard
