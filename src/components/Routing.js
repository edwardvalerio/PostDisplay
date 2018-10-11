import React from 'react';
import { Route } from 'react-router-dom';
import Contact from './Contact';
import About from './About';
import Home from './Home';
import Post from './Post';

const Routing = () => {


    return(
        <div>
        <Route exact path="/" component={ Home } />
        <Route exact path="/about" component={ About } />
        <Route exact path="/contact" component={ Contact } />
        <Route exact path="/post/:id" component={ Post } />

        </div>
    );



}

export default Routing;
