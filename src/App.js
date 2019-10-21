import React from 'react';
import Navbar from './components/navbar';
import Home from './components/home'; 
import About from './components/about';
import Contact from './components/contact';
import Post from './components/post';
//switch only alows one route at a time
//start at top of routes check if it matches then use that one
//this means order of routes does matter
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//only installed react router dom
//browser router wrap our whole app
//exact to make sure it doesn't display 2 pages at same time
//:name of param this how you can work with params in url
//this also picks up contact and about
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/:post_id' component={Post}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
