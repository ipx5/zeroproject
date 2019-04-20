
export default function taskReducer(state, action) {
    switch (action.type){
        case 'ADD_TASK':
            let newTask={
                id: `${state.tasks.length+1}`,
                name:`task${state.tasks.length+1}`,
                text: `${state.newTaskText}${state.tasks.length+1}`
            }
            state.tasks.push(newTask);
            state.newTaskText='';
            return state;
        case 'UPDATE_NEW_TASK_TEXT':
            state.newTaskText = action.newText;
            return state;
        default:
            return state
        }
    }
    export const addTaskActionCreator =()=> ({
        type: 'ADD_TASK'
    })
    
    export const updateNewTaskTextActionCreator =(text) =>({
            type: 'UPDATE_NEW_TASK_TEXT', 
            newText:text
    })