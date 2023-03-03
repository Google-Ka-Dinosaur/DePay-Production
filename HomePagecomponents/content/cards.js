import React from 'react';
import classes from './card.module.css'

const Card = (props) =>{
    return(
      <div className={`card col-md-3 ${classes.cards}`}>
        <img className="card-img-top" src={props.image}/>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.text}</p>
        </div>
    </div>
    )
}

export default Card;

