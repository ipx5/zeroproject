import React from 'react';
import b from './Tasksbox.module.css'
import TasksboardContainer from './Tasksboard/TasksboardContainer'
import Usersboard from './Usersboard/Usersboard'


export default function Tasksbox(props){

    return (
        <div className={b.tasksbox}>
        this is tasksbox
            <Usersboard userBoard={props.userBoard}/>
            <TasksboardContainer store={props.store}/>
        </div>
    )
}