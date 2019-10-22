import {
    GET_POSTS_REQUEST,
    GET_POSTS_SUCCESS,
    GET_POSTS_ERROR
} from '../actions/postActions';

const initState = {
    error:null,
    loading:null,
    posts:[]
};

const rootReducer = (state = initState,action) => {
    if(action.type === GET_POSTS_REQUEST){
        return Object.assign({},state,{
            error:null,
            loading:true
        });
    }

    else if(action.type === GET_POSTS_SUCCESS){
        return Object.assign({},state,{
            error:null,
            loading:false,
            posts:action.posts
        });
    }

    else if(action.type === GET_POSTS_ERROR){
        return Object.assign({},state,{
            error:action.err,
            loading:false,
            posts:[]
        });
    }

    return state;
}

export default rootReducer;