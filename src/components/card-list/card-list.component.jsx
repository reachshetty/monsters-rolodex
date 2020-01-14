import React from 'react'
import {Card} from "../card/card.component"
import "./card-list.styles.css"

export function CardList(props) {
    return (
        <div className="card-list">
          {
            props.monsters.map(monster => <Card monster={monster}></Card>)
          }
        </div>)
}