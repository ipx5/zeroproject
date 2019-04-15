import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {addTask} from './reducers/state'

export let renderEntireTree=(state)=>{ReactDOM.render(
    // <Provider store= {store}>
    <BrowserRouter>
        <App state={state} addTask={addTask}/>
    </BrowserRouter>
    // </Provider>
    , document.getElementById('root'));
}