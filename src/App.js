import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom'

import { Provider, connect } from 'react-redux'
import store from './redux/store'

import Home from './Home'

const DashBoard = () => (
  <div>
    <Link to="/">Home</Link>
    <h1>DashBoard</h1>
  </div>
)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/dashboard" component={DashBoard} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App
