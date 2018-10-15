import React, { Component } from 'react';
import { Router, NavLink, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Home from './Home'
import Recipes from './Recipes'

const history = createBrowserHistory();

class Nav extends Component {
  render() {
  return (
  <Router history={history}>
    <div>
      <div id="route-card">
        <NavLink className="nav justify-content-center" to='/'>| Recipe Puppy |</NavLink>
        <NavLink className="nav justify-content-center" to='/recipes'>|Saved Recipes|</NavLink>
      </div>


      <Route exact path='/' component={Home} />
      <Route path='/recipes' component={Recipes} />
      </div>
    </Router>
    )
  }
}
export default Nav;
