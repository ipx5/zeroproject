import React from 'react'
import i from './Menuitem.module.css'
import {Link} from 'react-router-dom'

export default function Menuitem(props){
    return(
        <li>
            <Link className={i.inactive} activeClassName={i.active} to={props.miname}>{props.miname}</Link>
        </li>
    )
}
