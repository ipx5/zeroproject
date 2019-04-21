import React, {useEffect} from 'react';
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
    .then(users => users.map((user)=>props.state.userBoard.users.push(user)))
},[])
  return (
      <div className="App">
        <Applogo src={logo}  alt="logo" />
        <Header/>
        <Sidebar/>
        <div className='content'>
        <Route path='/users' 
          exact render = {()=>
          <Mainbox 
          userBoard={props.state.userBoard}
          store={props.store}
          />}/>
        <Route path='/tasks' render = {()=>
          <Tasksbox 
          userBoard={props.state.userBoard} 
          store={props.store}

          />
          }/>
        </div>
      </div>
  );
}