import React from 'react';
import { Link } from 'react-router-dom';
//this will save the src to the pokeball so don't need to write it in for images
import Pokeball from '../pokeball.png';
import { connect } from 'react-redux';
import {getPosts} from '../actions/postActions';

//use axios to make requests
//convert to class to use component did mount
class Home extends React.Component {
    state = {
        posts:[]
    };

    componentDidMount(){
        this.props.dispatch(getPosts());
    }
    
    render(){
        console.log('props from reducer: ',this.props.posts);
        const posts = this.props.posts.posts.length ? this.props.posts.posts.map((post,i) => {
            return(
                <div className="post card" key={post.id}>
                    <img src={Pokeball} alt='pokeball'/>
                    <div className='card-content'>
                    <Link to={'/' + post.id}>
                        <span className="card-title red-text">Title {i} {post.title}</span>
                    </Link>       
                    <p>{post.body}</p>
                    </div>
                </div>
            )
        }) : (
            <div>
                <p>No Posts</p>
            </div>
        );
        return(
            <div className='container'>
                <h4 className="center">Home</h4>
                <p>This is the home page</p>
                {posts}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    posts:state.posts
});

export default connect(mapStateToProps)(Home);