import {combineReducers, createStore} from 'redux'
import taskReducer from './task-reducer'
import userReducer from './user-reducer'

const rootReducer = combineReducers({
    taskBoard: taskReducer,
    userBoard: userReducer,
})

let store = createStore(rootReducer);


export default store;