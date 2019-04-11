import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar'
import logo from './logo.svg'
import Mainbox from './components/Mainbox/Mainbox'
import Applogo from './components/Applogo/Applogo';
import Header from './components/Header/Header'
import Tasksbox from './components/Tasksbox/Taskbox'
import {BrowserRouter, Route} from 'react-router-dom'

export default function App(){
  return (
    <BrowserRouter>
      <div className="App">
        <Applogo src={logo}  alt="logo" />
        <header className='app-header'><Header/></header>
        <nav className='nav'><Sidebar/></nav>
        <div className='content'>
        <Route path='/' exact component={Mainbox}/>
        <Route path='/tasks' component={Tasksbox}/>
        </div>
        
      </div>
    </BrowserRouter>
  );
}