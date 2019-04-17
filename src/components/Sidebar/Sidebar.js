import React from 'react'
import s from './Sidebar.module.css'
import {NavLink} from 'react-router-dom';

export default function Menu(){
    return(
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink activeClassName={s.activeLink} to='/users'><h3>Users</h3></NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink activeClassName={s.activeLink} to='/tasks'><h3>Tasks</h3></NavLink>
            </div>
        </nav>
        )
}