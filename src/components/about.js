import React from 'react';
import Rainbow from '../HOC/rainbow';

const About = () => {
    return(
        <div className='container'>
            <h4 className="center">About</h4>
            <p>This is the About page</p>
        </div>
    );
}

export default Rainbow(About);