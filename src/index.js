import store from './reducers/state'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
 

let renderEntireTree=(state)=>{ReactDOM.render(
    <BrowserRouter>
        <App 
        state={store._state} 
        addTask={store.addTask} 
        updateNewTaskText={store.updateNewTaskText}
        fetchUsers={store.fetchUsers}
        />
    </BrowserRouter>
    // </Provider>
    , document.getElementById('root'));
}

renderEntireTree(store._state); 

store.subscribe(renderEntireTree);

