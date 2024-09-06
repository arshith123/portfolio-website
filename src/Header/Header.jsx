import React from 'react'
import "./Header.css"
import { ImMenu } from "react-icons/im";
import { IoCloseOutline } from "react-icons/io5";

const Header = () => {
  return (
    <div className='header-body'>
        <header>
            <h1 className='logo'>ARSHITH</h1>
            <ul className='nav-links'>

               <h3 className='menu-icon'><ImMenu style={{color:'white'}}/></h3>
               <h3 className='close-icon'><IoCloseOutline style={{color:'white'}} /></h3>
                <li className='link'>Home</li>
                <li className='link'>About Me</li>
                <li className='link'>Education</li>
                <li className='link'>Skills</li> 
                <li className='link'>Contact me</li>
            </ul>
        </header>
    </div>
  )
}

export default Header