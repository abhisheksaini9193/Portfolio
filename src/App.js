// import react from 'react';
import "./index.css";
import {Routes,Route } from 'react-router-dom';
import Home from './router/Home';
import Project from './router/Project';
import About from './router/About';
import Contact from './router/Contact';

function App() {
  return (
    <>

  
   <Routes>
   <Route path='/' element={<Home/>} />
   <Route path='/project' element={<Project/>} />
   <Route path='/about' element={<About/>} />
   <Route path='/contact' element={<Contact/>} />
   </Routes>
 
       
    </>
  );
}


export default App;
