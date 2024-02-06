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
            <div className='menu-items'>
                <Link to='/'>HOME</Link>
                <Link to='/services'>SERVICES</Link>
                <Link to='/about'>ABOUT</Link>
                <Link to='/team'>OUR TEAM</Link>
                <Link to='/contact'>CONTACT</Link>
            </div>
            
        </nav>
    )
}

export default NavBar;