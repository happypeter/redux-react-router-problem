import React, { Component } from 'react'

import Home from './Home'

import {
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom'
import { connect } from 'react-redux'

const DashBoard = () => (
  <div>
    <Link to="/">Home</Link>
    <h1>DashBoard here</h1>
  </div>
)

const Sidebar = () => (
  <h1>Sidebar</h1>
)

class Main extends Component {
  render() {
    return(
      <div>
        <Sidebar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/dashboard" component={DashBoard} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isAuthenicated: state.isAuthenicated
})

export default connect(mapStateToProps)(Main)
