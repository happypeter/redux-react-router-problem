import React, { Component } from 'react'

import {
  Link,
  Route,
  Redirect
} from 'react-router-dom'

import { connect } from 'react-redux'

const About = () => (<h1>About</h1>)

class Home extends Component {

  render() {
    const { isAuthenicated } = this.props
    console.log('...', isAuthenicated)
    return(
      <div>
        Home
        <Link to="/dashboard">dashboard</Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isAuthenicated: state.isAuthenicated
})

export default connect(mapStateToProps)(Home)
