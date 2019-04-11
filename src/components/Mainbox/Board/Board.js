import React from 'react'
import Card from './Card/Card'
import ava from './avatar.svg'
import ava2 from './2.svg'
import b from './Board.module.css'

const card1 ={
    date: new Date(),
    text: 'I hope my app is great',
    cardholder:{
        name: 'Gleb Kataev',
        avatarUrl: ava
    },
}
const card2 ={
    date: new Date(),
    text: 'I hope my app is great',
    cardholder:{
        name: 'Ilya Polyakov',
        avatarUrl: ava2
    },
}

export default function Board(){
    return(
        <div className={b.board}>
        this is board
        <Card date={card1.date} text={card1.text} cardholder={card1.cardholder}/>
        <Card date={card2.date} text={card2.text} cardholder={card2.cardholder}/>
        <Card date={card1.date} text={card1.text} cardholder={card1.cardholder}/>
        <Card date={card1.date} text={card1.text} cardholder={card1.cardholder}/>
        <Card date={card1.date} text={card1.text} cardholder={card1.cardholder}/>

        </div>
    )
}