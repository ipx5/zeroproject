import React from 'react';
import t from './Task.module.css'


export default function Task(props){
    return (
        <div className={t.task}>{`${props.name} ${props.text}`}
        </div>
    )
}
 