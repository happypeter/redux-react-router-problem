import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

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
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/dashboard" component={DashBoard} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
