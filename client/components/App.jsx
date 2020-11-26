import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { fetchBurgers } from '../actions'
import { connect } from 'react-redux'

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
          <Route path='/burger/edit/:id' component={EditBurger} />
          <Route path='/burger/:id' component={BurgerDetail} />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default connect()(App)

{/* <Route path='/posts/edit/:id' render={(props) => (
            <PostForm
              fetchPosts={this.props.fetchPosts}
              post={this.props.posts.find(post => (
                post.id === Number(props.match.params.id))
              )}
              {...props}
            />
          )} /> */}