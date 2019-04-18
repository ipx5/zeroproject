import axios from 'axios'
let renderEntireTree =()=>{}

let state = {

    users:[],
    
    cards : [
    {
        id:'1',
        date: new Date(),
        text: 'I hope my app is great',
        cardholder:{
            name: 'Gleb Kataev',
            avatarUrl: 'https://img00.deviantart.net/0f01/i/2009/311/c/c/melting_avatar_black_cat_by_scoobydolittle.png'
        }
    },
    {
        id:'2',
        date: new Date(),
        text: 'I hope my app is great',
        numberOfTasks:'this is number of tasks',
        cardholder:{name: 'Ilya Polyakov',
        avatarUrl: 'https://img00.deviantart.net/0f01/i/2009/311/c/c/melting_avatar_black_cat_by_scoobydolittle.png'
    },
}],
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
    // numOfTasks(){
    //     return this.tasks.length
    // },

}
export const addTask =()=>{
    let newTask={
        id: '5',
        name:`task${state.tasks.length+1}`,
        text: `${state.newTaskText}${state.tasks.length+1}`
    }
    state.tasks.push(newTask);
    state.newTaskText=''
    renderEntireTree(state)
}
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

