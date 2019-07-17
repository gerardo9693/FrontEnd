import React from 'react';
import {Route} from 'react-router-dom';
import Home from './views/Home';
import Post from './views/Post';
import Login from './views/Login';
import Signup from './views/Signup';
import About from './views/About';
import Menu from './views/Menu';

function Routes() {
  return (
    <>
    <Route exact path="/" component={Home}/>
    <Route exact path="/post/:id" component={Post}/>
    <Route exact path="/About" component={About}/>
    <Route exact path="/menu" component={Menu}/>

    <Route exact path="/signup" component={Signup}/>
    <Route exact path="/login" component={Login}/>
    </>
  );
}

export default Routes;
