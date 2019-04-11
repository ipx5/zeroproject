import React from 'react'
import Board from './Board/Board'
import m from './Mainbox.module.css'

export default function Mainbox(){
    return(
        <div className={m.mainbox}>
        this is mainbox
        <Board/>
        </div>
    )
}

