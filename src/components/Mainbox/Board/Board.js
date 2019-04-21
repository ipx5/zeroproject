import React from 'react'
import Card from './Card/Card'
import b from './Board.module.css'

export default function Board(props){
    let cardsElement = props.users.map((user) =>
    <Card className={b.card} key={user.id} city={user.city}
    age={user.age} name={user.name} knowledge={user.knowledge} store={props.store}/>)
    return(
        <div className={b.board}>
        {cardsElement}
        </div>
    )
} 
