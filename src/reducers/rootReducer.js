const initState = {
    users:[],
    posts:[
        {id:'1',title:'post 1',body:'post 1 body'},
        {id:'2',title:'post 2',body:'post 2 body'},
        {id:'3',title:'post 3',body:'post 3 body'}
    ]
}

const rootReducer = (state = initState,action) => {
    console.log(action);
    if(action.type === 'DELETE_POST'){
        let newPosts = state.posts.filter(post => post.id !== action.id);
        return Object.assign({},state,{
            posts:newPosts
        });
    }
    return state;
}

export default rootReducer;