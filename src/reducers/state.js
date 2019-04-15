import {renderEntireTree} from './../render'
let state = {
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
]
}

export let addTask =(taskText)=>{
    let newTask={
        id: '5',
        name:'task5',
        text: taskText
    }
    state.tasks.push(newTask);
    renderEntireTree(state)
}

export default state;