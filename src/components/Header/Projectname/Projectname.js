import React from 'react'
import p from './Projectname.module.css'

export default function Projectname(props){
    return(
        <h1 className={p.text}>{props.name}</h1>
    )
}