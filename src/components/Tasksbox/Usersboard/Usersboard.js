import React from 'react';
import u from './Usersboard.module.css'
import User from './User/User'


export default function Usersboard(props){
    let cardsElement = props.cards.map((card) => 
    <User key={card.id} name={card.cardholder.name}/>)
    return (
        <div className={u.board}>
        {cardsElement}
        </div>
    )
}
 