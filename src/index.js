import state, {subscribe} from './reducers/state'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {addTask, updateNewTaskText, fetchUsers} from './reducers/state'

let renderEntireTree=(state)=>{ReactDOM.render(
    <BrowserRouter>
        <App 
        state={state} 
        addTask={addTask} 
        updateNewTaskText={updateNewTaskText}
        fetchUsers={fetchUsers}
        />
    </BrowserRouter>
    // </Provider>
    , document.getElementById('root'));
}

renderEntireTree(state); 

subscribe(renderEntireTree);

