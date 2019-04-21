import axios from 'axios'
let initialState={
    users:[],
    newNameText:''
}

export default function userReducer (state=initialState, action){
    switch (action.type){

        case 'ADD_NAME':
        let newName={
            name:`${state.newNameText}`
        }
        axios.post(`api/users`)
        .then(res => {
            console.log(res);
            console.log(res.data);
          })
        state.users.name.push(newName)
            return state;

        case 'UPDATE_NEW_NAME_TEXT':
            state.newNameText = action.newText;
            return state;
            
        default:
            return state
        }
    }
    export const addNameActionCreator =()=> ({
        type: 'ADD_Name'
    })
    
    export const updateNewNameTextActionCreator =(text) =>({
            type: 'UPDATE_NEW_NAME_TEXT', 
            newText:text
    })