import React from 'react'
// import Menuitem from './Menuitem/Menuitem'
import s from './Sidebar.module.css'
import {NavLink} from 'react-router-dom';

export default function Menu(){
    return(
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink  activeClassName={s.activeLink} to='/'>Users</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink activeClassName={s.activeLink} to='/tasks'>Tasks</NavLink>
            </div>
        </nav>
        )
}