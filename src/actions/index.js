import axios from 'axios';

export function fetchUsers(){
    const response =axios.get('http://localhost:3001/api')
    return{
        type: 'FETCH_USER',
        payload: response
    }
}

export function saveUser(user){
    return{
        type: 'SAVE_USER',
        payload: user
    }
}