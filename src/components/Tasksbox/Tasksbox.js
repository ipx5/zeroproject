import React from 'react';
import b from './Tasksbox.module.css'
import Tasksboard from './Tasksboard/Tasksboard'
import Usersboard from './Usersboard/Usersboard'


export default function Tasksbox(props){
    return (
        <div className={b.tasksbox}>
        this is tasksbox
            <Usersboard cards={props.cards}/>
            <Tasksboard tasks={props.tasks} addTask={props.addTask}/>
        </div>
    )
}
