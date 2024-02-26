import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../style/NavBar.css'; 

function NavBar(){
    const [openNav, setOpenNav] = useState(false);

    function toggleNav() {
        setOpenNav(!openNav);
    }

    return (
        <nav className='navbar'>
          <a href='https://www.connect13.co/' className='logo'>
            <img src="https://i.postimg.cc/wMCF4fZ4/Connect13-Logo.png" alt='Connect13'/>
          </a>
          <button className="hamburger" onClick={toggleNav}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
          <div className={`menu-items ${openNav ? 'open' : ''}`}>
            <Link to='/' onClick={toggleNav}>HOME</Link>
            <Link to='/services' onClick={toggleNav}>SERVICES</Link>
            <Link to='/about' onClick={toggleNav}>ABOUT</Link>
            <Link to='/team' onClick={toggleNav}>OUR TEAM</Link>
            <Link to='/contact' onClick={toggleNav}>CONTACT</Link>
          </div>
        </nav>
      );
    }
    
    export default NavBar;