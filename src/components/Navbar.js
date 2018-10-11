import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
const Navbar = () => {

    return(
    <nav className="blue darken-3">
    <div className="nav-wrapper container">
      <a href="#" className="brand-logo">R&R</a>
       <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><NavLink activeClassName="blue darken-4" exact to="/">Home</NavLink></li>
        <li><NavLink activeClassName="blue darken-4" exact to="/about">About  </NavLink></li>
        <li><NavLink activeClassName="blue darken-4" exact  to="/contact">Contact</NavLink></li>

       </ul>
      </div>
    </nav> );

}

export default withRouter(Navbar);
