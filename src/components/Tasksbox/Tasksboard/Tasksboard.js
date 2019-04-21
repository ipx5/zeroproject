import React from 'react';
import b from './Tasksboard.module.css'
import Task from './Task/Task'

export default function Tasksbox(props){
    let tasksElement = props.tasks.map((task) => 
    <Task key={task.id} name={task.name} text={task.text} />)
    let newTaskElement = React.createRef()
    let addTask=()=>{
        props.addTask()
    }
    let onTaskChange=()=>{
        let text= newTaskElement.current.value;
        props.updateNewTaskText(text)
    }
    return (
        <div>
            <div>
                <textarea onChange={onTaskChange} 
                ref={newTaskElement} value={props.newTaskText}></textarea>
            </div>
            <div>
                <button onClick={addTask}>Add task</button>
            </div>
            <div className={b.board}>
            {tasksElement}
            </div>
        </div>
    )
} 