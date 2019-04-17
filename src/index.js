import state, {subscribe} from './reducers/state'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {addTask, updateNewTaskText} from './reducers/state'

let renderEntireTree=(state)=>{ReactDOM.render(
    // <Provider store= {store}>
    <BrowserRouter>
        <App 
        state={state} 
        addTask={addTask} 
        updateNewTaskText={updateNewTaskText}/>
    </BrowserRouter>
    // </Provider>
    , document.getElementById('root'));
}

renderEntireTree(state); 

subscribe(renderEntireTree);

