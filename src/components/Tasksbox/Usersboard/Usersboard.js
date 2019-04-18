import React from 'react';
import u from './Usersboard.module.css'
import User from './User/User'


export default function Usersboard(props){
    let usersElement = props.users.map((user) => 
    <User key={user.id} name={user.name}/>)
    return (
        <div className={u.board}>
        {usersElement}
        </div>
    )
}