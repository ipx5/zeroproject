import React from 'react'
import UserInfo from './Userinfo/UserInfo';
import c from './Card.module.css'


export default function Card(props){
    

    return(
        <div className={c.card}>
            <UserInfo 
                key={props.key}
                name={props.name} 
                city={props.city} 
                age={props.age}
                knowledge={props.knowledge}
                store={props.store}
                />
        </div>
    )
}
