import React from 'react'
import UserInfo from './Userinfo/UserInfo';
import c from './Card.module.css'

export default function Card(props){
    console.log(props.name);
    return(
        <div className={c.card}>
        this is card
            <UserInfo key={props.key} user={props.name} />
            <div className='Card-text'>{props.city} </div>
            <div className='Card-date'>{props.age}</div>
        </div>
    )
}