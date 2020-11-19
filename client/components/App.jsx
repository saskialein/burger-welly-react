import React from 'react'
import { Route } from 'react-router-dom'
import { fetchBurgers } from '../actions'
import { connect } from 'react-redux'

import Home from './Home'
import Nav from './Nav'
import Footer from './Footer'
import Burgers from './Burgers'

class App extends React.Component {

componentDidMount() {
  this.props.dispatch(fetchBurgers())
}

  render() {
    return (
      <div className="layout">
        <div className="main-header">
          <Nav />
        </div>
        <div className="main">
          <Route exact path='/' component={Home} />
        </div>
        <div className="main" id="main-background">
          <Route path='/burger' component={Burgers}/>
        </div>
        <div className="main-footer">
          <Footer />
        </div>
      </div>
    )
  }
}

export default connect()(App)
