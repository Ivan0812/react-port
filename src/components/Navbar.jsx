import React from 'react';
import {  NavLink } from 'react-router-dom'


function Navbar() {
  return (
    <nav>
      
        <ul className="navlist">
          <li className='list'><NavLink to="/Profile" className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink></li>
          <li className='list'><NavLink to="/AboutMe" className={({ isActive }) => (isActive ? "active" : "")}>About me</NavLink></li>
          <li className='list'><NavLink to="/Education" className={({ isActive }) => (isActive ? "active" : "")}>Education</NavLink></li>
          <li className='list'><NavLink to="/Projects" className={({ isActive }) => (isActive ? "active" : "")}>Projects</NavLink></li>
        </ul>
  
    </nav>
  );
}

export default Navbar;