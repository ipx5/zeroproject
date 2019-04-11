import React from 'react'
import a from './Applogo.module.css'

export default function Applogo(props){
    return(
        <img src={props.src} className={a.logo} alt={props.alt}/>
    )
}