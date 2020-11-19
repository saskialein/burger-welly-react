import React from 'react'
import { connect } from 'react-redux'

const BurgerListItem = (props) => {
    const burger = props.burger
    
    return (
        // <div className="burger-grid">
            <div className="burger-card">
                <h3>{burger.name}</h3>
                <img src={burger.image_url} alt="burger"/>
                <br/>
                    <a href="/burger/{props.key}">Click here to see more</a>
            </div>
        // </div>
    )
}

export default connect()(BurgerListItem)
