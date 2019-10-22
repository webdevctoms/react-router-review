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

//get single post
export const GET_POST_REQUEST = 'GET_POST_REQUEST';
//action
export const get_post_requests = () => ({
    type:GET_POST_REQUEST
});

//type get posts success
export const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
//action
export const get_post_success = (post) => ({
    type:GET_POST_SUCCESS,
    post
});

//type get posts success
export const GET_POST_ERROR = 'GET_POST_ERROR';
//action
export const get_post_error = (err) => ({
    type:GET_POST_ERROR,
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

export const getPost = (id) => (dispatch) => {
    dispatch(get_post_requests());
    axios.get(API_URL + '/' + id)

    .then(postData => {
        dispatch(get_post_success(postData.data));
    })

    .catch(err => {
        dispatch(get_post_error(err));
    })
}