import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import { fetchBurgers } from '../actions'

import Home from './Home'
import Nav from './Nav'
import Footer from './Footer'
import Burgers from './Burgers'
import BurgerDetail from './BurgerDetail'
import EditBurger from './EditBurger'
import BurgerForm from './BurgerForm'

class App extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchBurgers())
  }

  render() {
    return (
      <div className="layout">
        <Nav />
        <Switch >
          <Route exact path='/' component={Home} />
          <Route exact path='/burger' component={Burgers} />
          <Route exact path='/burger/new' component={BurgerForm} />
          <Route exact path='/burger/edit/:id' component={EditBurger} />
          <Route exact path='/burger/:id' component={BurgerDetail} />
        </Switch>
        <Footer />
      </div>
    )
  }
}

function mapStateToProps(globalState) {
  return {
    burgers: globalState.burgers
  }
}

export default connect(mapStateToProps)(App)