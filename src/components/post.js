import React from 'react';
import axios from 'axios';

class Post extends React.Component {
    state ={
        post:null
    };

    componentDidMount(){
        //get route param from extra props data from router
        console.log(this.props);
        let id = this.props.match.params.post_id;
        const url = 'https://jsonplaceholder.typicode.com/posts/' + id;
        axios.get(url)
        .then( resData => {
            console.log('single post: ',resData);
            this.setState({
                post:resData.data
            });
        })

        .catch(err => {
            console.log(err);
        })
        
    }

    render(){
        const post = this.state.post ? (
            <div className="post">
                <h4 className="center">{this.state.post.title}</h4>
                <p className="center">{this.state.post.body}</p>
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

export default Post;