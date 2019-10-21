import React from 'react';
import Rainbow from '../HOC/rainbow';
//router attaches extra info to props automatically to anything that is a route

const Contact = (props) => {
    console.log(props);
    //history push to redirect
    /*
    setTimeout(()=>{
        props.history.push('/about');
    },2000);
    */
    return(
        <div className='container'>
            <h4 className="center">Contact</h4>
            <p>This is the Contact page</p>
        </div>
    );
}

export default Rainbow(Contact);