import React from 'react'
import Card from './Card/Card'
import b from './Board.module.css'

export default function Board(props){
    let cardsElement = props.cards.map((card) => <Card key={card.id} date={card.date} text={card.text} cardholder={card.cardholder} />)
    return(
        <div className={b.board}>
        {cardsElement}
        </div>
    )
}