import React from 'react';
import {connect} from 'react-redux';
import {deletePost} from '../actions/postActions';

class Post extends React.Component {

    handleClick = () =>{
        this.props.deletePost(this.props.post.id)
        this.props.history.push('/');
    }

    render(){
        console.log(this.props);
        const post = this.props.post ? (
            <div className="post">
                <h4 className="center">{this.props.post.title}</h4>
                <p className="center">{this.props.post.body}</p>
                <div className="center">
                    <button className="btn grey" onClick={this.handleClick}>Delete</button>
                </div>
            </div>
        ) : (
            <div>
                <p>no posts</p>
            </div>
        )
        return(
            <div className="container">
                {post}
            </div>
        )
    }
}
//ownprops ref props before props attached from connect function
//getting id from url
//then looking for post from state
const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id;
    return{
        post:state.posts.posts.find(post => post.id === id)
    }
};

//map dispatch to props
//essentially store.dispatch({action}) action = {type:..,etc}
const mapDispatchToProps = (dispatch) => {
    //delete post dispatches a action
    return{
        deletePost:(id) => {dispatch(deletePost(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Post);