import React from 'react';
import { Link, NavLink, withRouter} from 'react-router-dom';
//links for intercepting call and not  calling server for page
//this will actually output a tags in html
//prevents default action of anchor tags essentially e.preventDefualt()

//navlink will auto add in class active and aria attribute
const Navbar = (props) => {
    console.log(props);
    //use higher order component to get access to route props
    //with router
    /*
    setTimeout(()=>{
        props.history.push('/about');
    },2000);
    */
    return(
        <nav className='na-wrapper red darken-3'>
            <div className="container">
                <a href='/' className="brand-logo">Website</a>
                <ul className="right">
                    <li><Link to='/'>Home</Link></li>
                    <li><NavLink to='/about'>About</NavLink></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
}
//wrap the router in higher order component that applies props to nav bar then returns component
export default withRouter(Navbar);