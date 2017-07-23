import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom'

import { Provider } from 'react-redux'
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
    let isAuthenicated = true
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" render={() => {
                return isAuthenicated ? (
                  <Redirect to="/dashboard" />
                ) : (
                  <Home />
                )
              }} />
            <Route path="/dashboard" component={DashBoard} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
