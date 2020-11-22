import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const BurgerListItem = (props) => {
    const burger = props.burger
    
    return (
        // <div className="burger-grid">
            <div className="burger-card">
                <h3>{burger.name}</h3>
                <img src={burger.image_url} alt="burger"/>
                <br/>
            <Link to={`/burger/${burger.id}`}>Click here to see more</Link>
            </div>
        // </div>
    )
}

export default connect()(BurgerListItem)
