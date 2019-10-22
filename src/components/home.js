import React from 'react';
import { Link } from 'react-router-dom';
//this will save the src to the pokeball so don't need to write it in for images
import Pokeball from '../pokeball.png';
//function that is invoked to bring back HOC
import {connect} from 'react-redux';
//use axios to make requests
//convert to class to use component did mount
class Home extends React.Component {

    render(){
        //do this cus of combine reducers
        console.log(this.props.posts);
        const postData = this.props.posts.posts;
        const posts = postData.length ? postData.map((post,i) => {
            return(
                <div className="post card" key={post.id}>
                    <img src={Pokeball} />
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
//stae = state of the store of redux
const mapStateToProps = (state) => {
    return{
        posts:state.posts
    }
};

//connect is a function that returns higher order component then that HOC is wrapping the home component
export default connect(mapStateToProps)(Home);