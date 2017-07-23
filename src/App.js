import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom'

import { connect } from 'react-redux'

import Home from './Home'

const DashBoard = () => (
  <div>
    <Link to="/">Home</Link>
    <h1>DashBoard here</h1>
  </div>
)

class App extends Component {
  render() {
    let { isAuthenicated } = this.props
    return (
      <Router>
          <Switch>
            <Route exact path="/" render={() => {
                return isAuthenicated ? (
                  <Redirect to="/dashboard" />
                ) : (
                  <Home />
                )
              }}/>
            <Route path="/dashboard" component={DashBoard} />
          </Switch>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenicated: state.isAuthenicated
})

export default connect(mapStateToProps)(App)
