import React from 'react'
import UserInfo from './Userinfo/UserInfo';
import c from './Card.module.css'

export default function Card(props){
    let knowledgeElement = props.knowledge.map((know) =>
    <div>{know.language}</div>)
    
    return(
        <div className={c.card}>
        this is card
            <UserInfo key={props.key} user={props.name} />
            <div className='Card-text'>{props.city} </div>
            <div className='Card-date'>{props.age}</div>
            <div className='Card-text'>{knowledgeElement}</div>
        </div>
    )
}
