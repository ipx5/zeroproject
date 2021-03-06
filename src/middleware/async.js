export default({dispatch})=>(next)=>(action)=>{
    if(!action.payload || !action.payload.then){
        return next(action);
    }
    action.payload.then((responce)=>{
        const newAction={...action, payload:responce}
        dispatch(newAction)
    })
}