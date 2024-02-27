import React from "react";
import '../style/HomeCards.scss'; 

function HomeCards({image, title, text, copy }){
    
    return (
        <div className="card">
          <div className="image" style={{ backgroundImage: `url(${image})` }}></div>
          <div className="content">
            <h3 className="title">{title}</h3>
            <p className="text">{text}</p>
            <p className="copy">{copy}</p>
          </div>
        </div>
      );
}

export default HomeCards;