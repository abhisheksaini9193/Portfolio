import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa"
import "./FooterStyles.css"

import React from 'react'



const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff", marginRight:"2rem"}} />
                  <div>
                    <p> C-92 Housing Society.</p>
                    <p>Noida.</p> 
                  </div>
                   </div>
                   <div className="phone"> 
                  <h4>
                  <FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                   9193229936
                  </h4>
                  </div>
                  <div className="email"> 
                  <h4>
                  <FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                   sainiabhishek9193@gmail.com
                  </h4>
                  </div>
            </div>
           
           <div className="right">
            <h4>About the Company</h4>
            <p>This is me Abhishek Saini. CEO & Founder of Tech2etc.
              I enjoy discussing new projects and design challenges.
            </p>
            <div className="social">
              <FaFacebook
              size={25}
              style={{color: "#fff", 
              marginRight: "1rem"}}/>
               <FaTwitter
              size={25}
              style={{color: "#fff", 
              marginRight: "1rem"}}/>
               <FaLinkedin
              size={25}
              style={{color: "#fff", 
              marginRight: "1rem"}}/>
            </div>
           </div>
        </div>
      
    </div>
  )
}

export default Footer
