import React from 'react';
import a from './Avatar.module.css'


export default function Avatar(props){
    return(
        <img className={a.avatar}
            src={props.user.avatarUrl}
            alt={props.user.name}
        />
    )
}