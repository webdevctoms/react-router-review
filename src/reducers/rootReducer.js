const initState = {
    posts:[
        {id:'1',title:'post 1',body:'post 1 body'},
        {id:'2',title:'post 2',body:'post 2 body'},
        {id:'3',title:'post 3',body:'post 3 body'}
    ]
}

const rootReducer = (state = initState,action) => {
    return state;
}

export default rootReducer;