import React from 'react'
import u from './Userinfo.module.css'
import {addNameActionCreator, updateNewNameTextActionCreator} from '../../../../../reducers/user-reducer'

export default function UserInfo(props){
    let knowledgeElement = props.knowledge.map((know) =>
    <div>
    <div>{know.language}</div> 
    <div className={u.fw}>{know.frameworks}</div>
    </div>)
    let state= props.store.getState()
    let nameElement = React.createRef()

    let updateNameText=(text)=>{
        let action= updateNewNameTextActionCreator(text); 
        props.store.dispatch(action)}

    let onAddName=()=>{
        props.store.dispatch(addNameActionCreator())
    }
    
    let addName=()=>{
        onAddName()
    }

    let onNameChange= () =>{
        let text = nameElement.current.value
        updateNameText(text)
    } 
        
    return(
        <div className={u.userinfo}>
        <div>
        <form onSubmit={addName}>
          <label>
            Person Name:
            <input ref={nameElement} type="text" name="name" onChange={onNameChange} value={state.userBoard.newNameText}/>
          </label>
          <button type="submit">Add</button>
        </form>
        </div>
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
