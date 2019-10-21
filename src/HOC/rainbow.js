//higher order component
import React from 'react';
//is a function
//when wrapping component receive wrapped component as param
const Rainbow = (WrappedComponent) => {
    const colours = ['red','pink','orange','blue','green','yellow'];
    const randomColour = colours[Math.floor(Math.random() * 5)];
    const className = randomColour + '-text';
    //takes in any props already passed to component
    //... spread operator passes original props back to wrapped component
    return (props) => {
        return(
            <div className={className}>
                <WrappedComponent {...props}/>
            </div>
        )
    }
}

export default Rainbow;