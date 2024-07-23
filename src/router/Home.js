import React from 'react'
import Navbar from '../components/Navbar'
import Heroimg from "../components/Heroimg"
import Work from "../components/Work.js"
import Footer from '../components/Footer'


function Home() {
  return (
    <div>
        <Navbar/>
        <Heroimg/>
        <Work/>
        <Footer/>
        
    </div>
  )
}

export default Home