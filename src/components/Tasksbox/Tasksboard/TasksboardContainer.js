import React from 'react';
import {addTaskActionCreator, updateNewTaskTextActionCreator} from '../../../reducers/task-reducer'
import Tasksboard from './Tasksboard'

export default function Tasksbox(props){
    let state= props.store.getState()

    let onTaskChange=(text)=>{
        let action= updateNewTaskTextActionCreator(text); 
        props.store.dispatch(action)}

    let onAddTask=()=>{
        props.store.dispatch(addTaskActionCreator())
    }
    return (
        <Tasksboard 
        addTask={onAddTask}
        updateNewTaskText={onTaskChange}
        tasks={state.taskBoard.tasks}
        newTaskText={state.taskBoard.newTaskText}
    />
    )
} 