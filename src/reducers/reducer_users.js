import state from './state'

export default function (state, action){
    switch (action.type){
        case 'FETCH_USER':
            return[...state, action.payload.data];
        case 'SAVE_USER':
            return[...state, {name:action.payload}]
        default:
            return state
    }
}