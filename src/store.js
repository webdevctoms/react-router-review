import { createStore,combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

export default createStore(
    combineReducers({
        posts:rootReducer
    }),applyMiddleware(thunk)
);