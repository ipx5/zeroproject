import React from 'react'
// import Menuitem from './Menuitem/Menuitem'
import m from './Menu.module.css'
import {NavLink} from 'react-router-dom';

export default function Menu(){
    return(
        <div className={m.menu}>
        <div><NavLink className={m.inactiveLink} activeClassName={m.activeLink} to='/'>Mainbox</NavLink></div>
        <div><NavLink className={m.inactiveLink} activeClassName={m.activeLink} to='/tasks'>Tasks</NavLink></div>
        </div>
        )
}