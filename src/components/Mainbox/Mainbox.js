import React from 'react'
import Board from './Board/Board'
import m from './Mainbox.module.css'

export default function Mainbox(props){
    return(
        <div className={m.mainbox}>
        <Board users={props.users}/>
        </div>
    )
}
