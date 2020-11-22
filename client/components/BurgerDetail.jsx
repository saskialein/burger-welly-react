import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteBurger } from '../actions'

const BurgerDetail = (props) => {
    
    const id = props.match.params.id

    return (
        <div className="main">
            {props.burgers.filter(burger => burger.id==id).map((burger) => {
                return (
            <div key={burger.id} className="burger-card-view">
                <h2>{burger.name}</h2>
                <img src={burger.image_url} alt="Burger"/>
                <h4>Restaurant:</h4>
                <p>{burger.restaurant}</p>
                <h4>Description:</h4>
                <p>{burger.description}</p>
                <h4>Comment:</h4>
                <p>{burger.comment}</p> 
            <div className="edit-delete-buttons">
                <Link to={`/burger/edit/${burger.id}`}><button>Edit Burger</button></Link>
                <Link to='/burger'><button onClick={() => {props.dispatch(deleteBurger(burger))}}>Delete Burger</button></Link>
            </div>           
        </div>
                )
      })}
    </div>
    )
}

function mapStateToProps(globalState) {
    return {
      burgers: globalState.burgers
    }
  }
  
export default connect(mapStateToProps)(BurgerDetail)
  

