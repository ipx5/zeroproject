import React from 'react'
import Projectname from './Projectname/Projectname';
import h from './Header.module.css'
import {NavLink} from 'react-router-dom';


export default function Header(props){
    return(
        <div className={h.header}>
        <NavLink to='/'><Projectname name='zeroproject'/></NavLink>
        </div>
    )
}