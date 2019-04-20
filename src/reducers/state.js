import axios from 'axios'

let store={
    _state :{
        users:[],
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
        ],
        newTaskText:'enter a useful task',
    },
    getState(){
        return this._state
    },
    _callSubscriber(){
        console.log('state changed')
    },
    addTask(){
        let newTask={
            id: '5',
            name:`task${this._state.tasks.length+1}`,
            text: `${this._state.newTaskText}${this._state.tasks.length+1}`
        }
        this._state.tasks.push(newTask);
        this._state.newTaskText=''
        this._callSubscriber(this._state)
    },
    updateNewTaskText(newText){
        state.newTaskText = newText;
        this._callSubscriber(this._state)
    },
    subscribe(observer){
        this._callSubscriber=observer;
    },
    fetchUsers(){
        const response = axios.get('/api/users');
        console.log(response)
        response.map((res)=>this._state.users.push(res))
    }
}


export default store;

window.store=store