import React, { useState } from 'react';
import './Navbar.css'
import logo_img from '../../src/assets/logo.png'
const Navbar = () => {
  
  const [navbar, setNavbar]=useState(false);
  const changeBackground= () =>{
    if(window.scrollY >= 90)
    {
      setNavbar(true);
    }
    else{
      setNavbar(false);
    }
  };
  window.addEventListener('scroll',changeBackground);
  return (
 
    <nav className={navbar ? 'navbar active':'navbar'}>
      
                <img src={logo_img} alt="" className="logo" /> 
                
      
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#Protco IOT smart">Protco IOT smart</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#Privacy policy">Privacy policy</a></li>
            </ul>
    </nav>
    
  );
};


export default Navbar