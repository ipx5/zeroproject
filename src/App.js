import React, {useEffect } from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar'
import logo from './logo.svg'
import Mainbox from './components/Mainbox/Mainbox'
import Applogo from './components/Applogo/Applogo';
import Header from './components/Header/Header'
import Tasksbox from './components/Tasksbox/Tasksbox'
import {Route} from 'react-router-dom'

export default function App(props){
  useEffect(() => {
    fetch('/api/users/')
      .then(res => res.json())
      .then(users => props.state.users.push(users))})

  return (
      <div className="App">
        <Applogo src={logo}  alt="logo" />
        <Header/>
        <Sidebar/>
        <div className='content'>
        <Route path='/users' 
          exact render = {()=>
          <Mainbox users={props.state.users}/>
          }/>
        <Route path='/tasks' render = {()=>
          <Tasksbox 
          cards={props.state.cards} 
          tasks={props.state.tasks}
          addTask={props.addTask}
          newTaskText={props.state.newTaskText} 
          updateNewTaskText={props.updateNewTaskText}/>
          }/>
        </div>
      </div>
  );
}