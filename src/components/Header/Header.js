import React from 'react'
import Projectname from './Projectname/Projectname';
import h from './Header.module.css'

export default function Header(props){
    return(
        <div className={h.header}>
        <Projectname name='zeroproject'/>
        </div>
    )
}