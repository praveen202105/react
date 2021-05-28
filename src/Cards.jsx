import React from "react";


function Card(props){
    return(
      <>
      <div className="cards">
        <div className="card">
        <img src={props.imgsrc} alt="mypic" className="cardImage"/>
          <span className="cardCategory">{props.title}</span>
          <h3 className="cardTitle">{props.sname}</h3>
          <a href={props.links} target="_blank">
            <button>Watch Now</button>
          </a>
        </div>
      </div>
      </>
    )
  }
  

  export default Card;