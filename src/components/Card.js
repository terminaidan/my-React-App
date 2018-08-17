import React from 'react';
import './card.css';

const Card = props => (
    <div className="Card">
        <div className="textCont">
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </div>
        <img src={props.image}/>
    </div>
)

export default Card