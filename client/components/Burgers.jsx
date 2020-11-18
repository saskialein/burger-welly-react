import React from 'react'
import {getBurgers} from '../api'

export class Burgers extends React.Component{

    state = {
        burgers: []
      }
    
    
     componentDidMount = () => {
       getBurgers()
      .then(burgers => {
        this.setState({burgers: burgers})
      })
    }
    render() {
    return (
            <main id="main-background">
            <h1 id="burgers-title" >We had aaaaaall these burgers:</h1>
            <ul>
                {this.state.burgers.map(burger => <li>{burger}</li>)}
            </ul>
            </main>
        )
    }
}