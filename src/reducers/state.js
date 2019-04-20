import taskReducer from './task-reducer'

let store={
    _state :{
        users:[],
        taskBoard:{
        newTaskText:'enter a useful task',
        tasks : [
            {
                id:'1',
                name:'task1',
                text:'text1'
            },
            {
                id:'2',
                name:'task2',
                text:'text2'
            }
        ]
    },},
    
    _callSubscriber(){
        console.log('state changed')
    },
    getState(){
        return this._state
    },
    subscribe(observer){
        this._callSubscriber=observer;
    },
    dispatch(action){
        this._state.taskBoard= taskReducer(this._state.taskBoard, action);
        this._callSubscriber(this._state)
    }
}

export default store;

window.store=store