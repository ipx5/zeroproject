import React from 'react'
import u from './Userinfo.module.css'

export default function UserInfo(props){
    let knowledgeElement = props.knowledge.map((know) =>
    <div>
    <div>{know.language}</div> 
    <div className={u.fw}>{know.frameworks}</div>
    </div>)
    
    return(
        <div className={u.userinfo}>
            <div>
                <label>Name: </label>
                <span contentEditable={true}>{props.name}</span>
            </div>
            <div>
                <label>City: </label>
                <span contentEditable={true}>{props.city}</span>
            </div>
            <div>
                <label>Age: </label>
                <span contentEditable={true}>{props.age}</span>
            </div>
            <div>
                <label>Knowledge: </label>
                <span contentEditable={true}>{knowledgeElement}</span>
            </div>
        </div>
    )
}
