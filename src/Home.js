import React, { Component } from 'react'

import {
  Link
} from 'react-router-dom'

// import { connect } from 'react-redux'

class Home extends Component {
  render() {
    return(
      <div>
        <h1>Home</h1>
        <Link to="/dashboard">DashBoard</Link>
      </div>
    )
  }
}

// const mapStateToProps = (state) =({
//   isAuthenicated: state.isAuthenicated
// })

// export default connect(mapStateToProps)(Home)
export default Home
