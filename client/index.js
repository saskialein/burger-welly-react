import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'
import { BrowserRouter as Router} from 'react-router-dom'
import App from './components/App'

const helpers = compose(
  applyMiddleware(thunk), 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const store = createStore(reducers, helpers)

document.addEventListener('DOMContentLoaded', () => {
  render(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>,
    document.getElementById('app')
  )
})
