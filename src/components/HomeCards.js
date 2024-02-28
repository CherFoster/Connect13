import React from "react";
import '../style/HomeCards.scss'; 

function HomeCards({ title, text, copy }){
    
    return (
        <div className="card">
          <div className="content">
            <h2 className="title">{title}</h2>
            <p className="text">{text}</p>
            <p className="copy">{copy}</p>
          </div>
        </div>
      );
}

export default HomeCards;