import "./FormContactstyles.css"

import React from 'react'

const FormContact = () => {
  return (
    <div className="form">
        <form>
            <label>Your Name</label>
            <input type="text" placeholder="YOUR NAME"></input>
            <label>Email</label>
            <input type="text" placeholder="EMAIL"></input>
            <label>Subject</label>
            <input type="text" placeholder="SUBJECT"></input>
            <label>Message</label>
            <input type="text" ></input>
         <textarea rows="5" placeholder="Type Your Message Here"/>
          <button className="btn">Submit</button>
          </form>
    
    </div>
  )
}

export default FormContact
