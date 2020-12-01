import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const BurgerListItem = (props) => {
    const burger = props.burger
    
    return (
            <div className="burger-card" key={burger.id}>
                <h3>{burger.name}</h3>
            <img src={burger.image_url} alt={burger.name}/>
                <br/>
                <Link to={`/burger/${burger.id}`}>Click here to see more</Link>
            </div>
    )
}

export default connect()(BurgerListItem)
