import React from 'react';
import u from './User.module.css'
import {NavLink} from 'react-router-dom'

export default function User(props){
    const path='/tasks/'+props.id;
    return (
        <div className={u.user}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}