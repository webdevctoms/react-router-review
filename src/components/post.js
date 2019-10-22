import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import {getPost} from '../actions/postActions';

class Post extends React.Component {
    state ={
        post:null
    };

    componentDidMount(){
        //get route param from extra props data from router
        console.log(this.props);
        const id = this.props.match.params.post_id;
        this.props.dispatch(getPost(id));
    }

    render(){
        console.log('props: ',this.props.posts);
        const post = this.props.posts.current_post ? (
            <div className="post">
                <h4 className="center">{this.props.posts.current_post.title}</h4>
                <p className="center">{this.props.posts.current_post.body}</p>
            </div>
        ) : (
            <div>
                <p>no posts</p>
            </div>
        )
        return(
            <div className="container">
                <h4>route param: {this.state.id}</h4>
                {post}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    posts:state.posts
});

export default connect(mapStateToProps)(Post);