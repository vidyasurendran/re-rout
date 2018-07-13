import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Store from './Store'
import Contact from './Contact'
import Subscribe from './Subscribe'
import CustomerSupport from './CustomerSupport'
import MyAccount from './MyAccount'
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <ul className="routes">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/store">Store</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/subscribe">Subscribe</Link></li>
              <li><Link to="/customer-support">Customer Support</Link></li>
              <li><Link to="/my-account">My Account</Link></li>
            </ul>
            <Switch>
              <Route path="/" exact={true} component={Home} />
              <Route path="/about" component={About} />
              <Route path="/store" component={Store} />
              <Route path="/contact" component={Contact} />
              <Route path="/subscribe" component={Subscribe} />
              <Route path="/customer-support" component={CustomerSupport} />
              <Route path="/my-account" component={MyAccount} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
