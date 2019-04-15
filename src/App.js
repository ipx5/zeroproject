import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar'
import logo from './logo.svg'
import Mainbox from './components/Mainbox/Mainbox'
import Applogo from './components/Applogo/Applogo';
import Header from './components/Header/Header'
import Tasksbox from './components/Tasksbox/Tasksbox'
import {Route} from 'react-router-dom'


export default function App(props){
  return (
      <div className="App">
        <Applogo src={logo}  alt="logo" />
        <Header/>
        <Sidebar/>
        <div className='content'>
        <Route path='/' exact render = {()=><Mainbox cards={props.state.cards}/>}/>
        <Route path='/tasks' render = {()=><Tasksbox cards={props.state.cards} tasks={props.state.tasks} addTask={props.addTask}/>}/>
        </div>
      </div>
  );
}
