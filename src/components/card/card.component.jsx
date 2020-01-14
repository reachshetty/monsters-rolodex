import React from 'react'
import "./card.styles.css"

export const Card = (props) => {
    return(
        <div className="card-container" >
            <img alt={props.monster.id} src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}></img>
            <h2 key={props.monster.id}>{props.monster.name}</h2>
        </div>
    );
}