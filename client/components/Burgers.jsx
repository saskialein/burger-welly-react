import React from 'react'
import { connect } from 'react-redux'
import BurgerListItem from './BurgerListItem'

const Burgers = (props) => {

    
        return (
            <div>
                <h1 id="burgers-title" >We had aaaaaall these burgers:</h1>
                    <div className="burger-grid">    
                    { props.burgers.map(burger => {
                        return (
                            <BurgerListItem key={burger.id} burger = {burger} />)
                    })}

                    </div>
                <div className="new-burger-button">
                    <a href="/burger/new"><h2>Add a burger</h2></a>
                </div>
            </div>
        )
    } 


function mapStateToProps(globalState) {
    return {
      burgers: globalState.burgers
    }
  }
  
  export default connect(mapStateToProps)(Burgers)