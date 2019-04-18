import React from 'react';
import b from './Tasksbox.module.css'
import Tasksboard from './Tasksboard/Tasksboard'
import Usersboard from './Usersboard/Usersboard'

export default function Tasksbox(props){
    return (
        <div className={b.tasksbox}>
        this is tasksbox
            <Usersboard users={props.users}/>
            <Tasksboard 
                tasks={props.tasks} 
                addTask={props.addTask} 
                newTaskText={props.newTaskText}
                updateNewTaskText={props.updateNewTaskText}
            />
        </div>
    )
}