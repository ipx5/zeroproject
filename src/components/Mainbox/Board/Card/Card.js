import React from 'react'
import UserInfo from './Userinfo/UserInfo';
import c from './Card.module.css'


function formatDate(date){
    return date.toLocaleDateString()
}

export default function Card(props){
    return(
        <div className={c.card}>
        this is card
            <UserInfo user={props.cardholder} />
            <div className='Card-text'>{props.text}</div>
            <div className='Card-date'>{formatDate(props.date)}</div>
        </div>
    )
}
