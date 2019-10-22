import {API_URL} from '../config';
import axios from 'axios';
//type get posts request
export const GET_POSTS_REQUEST = 'GET_POSTS_REQUEST';
//action
export const get_posts_requests = () => ({
    type:GET_POSTS_REQUEST
});

//type get posts success
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
//action
export const get_posts_success = (posts) => ({
    type:GET_POSTS_SUCCESS,
    posts
});

//type get posts success
export const GET_POSTS_ERROR = 'GET_POSTS_ERROR';
//action
export const get_posts_error = (err) => ({
    type:GET_POSTS_ERROR,
    err
});

export const getPosts = () => (dispatch) => {
    dispatch(get_posts_requests());
    axios.get(API_URL)

    .then(postData => {
        dispatch(get_posts_success(postData.data));
    })

    .catch(err => {
        dispatch(get_posts_error(err));
    })
}