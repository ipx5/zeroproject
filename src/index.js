import store from './reducers/redux_store'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';

let renderEntireTree=(state)=>{ReactDOM.render(
    <BrowserRouter>
        <App 
        state={state} 
        dispatch={store.dispatch.bind(store)}
        store={store}
        />
    </BrowserRouter>
    // </Provider>
    , document.getElementById('root'));
}

renderEntireTree(store.getState()); 

store.subscribe(()=>{
    let state= store.getState();
    renderEntireTree(state)});

