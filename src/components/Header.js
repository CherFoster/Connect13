import React from "react";
import '../style/Header.css'; 

function Header() {
    
    return (
        <div className="banner-container">
            <div className="image-container">
                <img className='banner' src='https://i.postimg.cc/KcwRVgsQ/Making-Impactful-Connections-1.png' srcset="medium.jpg 1000w large.jpg 2000w" alt="banner" />
            </div>
            <div className="text-content">
                <h1>Making Impactful Connections</h1>
            </div>
        </div>
    )
}

export default Header;