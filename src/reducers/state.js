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
    renderEntireTree: (){
        console.log('state changed')
    },
    addTask:(){
        let newTask={
            id: '5',
            name:`task${state.tasks.length+1}`,
            text: `${state.newTaskText}${state.tasks.length+1}`
        }
        state.tasks.push(newTask);
        state.newTaskText=''
        renderEntireTree(state)
    }


}

export const 
export const updateNewTaskText =(newText)=>{
    state.newTaskText = newText;
    renderEntireTree(state)
}

export const subscribe=(observer)=>{
    renderEntireTree=observer;
}

export function fetchUsers(){
    const response = axios.get('/api/users');
    console.log(response)
    response.map((res)=>state.users.push(res))
}

export default state;

