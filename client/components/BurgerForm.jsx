import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { addBurgerAPI } from '../actions'
import { fetchBurgers } from '../actions'

class BurgerForm extends React.Component {
    state = {
        name: '',
        image_url: '',
        restaurant: '',
        description: '',
        comment: ''
    }
    
    handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        })
      }
    
      submitHandler = (e) => {
        e.preventDefault()
          this.props.dispatch(addBurgerAPI(this.state))
         .then(() => {
              this.props.dispatch(fetchBurgers)
            }  )
        this.setState({
            name: '',
            image_url: '',
            restaurant: '',
            description: '',
            comment: ''
        })
      }

    render() {
    return (
        <div className="main">
            <h2>Add a new burger</h2>

            <form onSubmit={this.submitHandler} className="form">
            
                <label className="form-item">
                    Name:
                    <input onChange={this.handleChange} type="text" name="name" autoFocus={true} value={this.state.name}/>
                </label><br/>
            
                <label className="form-item" >
                    Image:
                    <input onChange={this.handleChange} type="text" name="image_url"value={this.state.image_url}/>
                </label><br/>
            
                <label className="form-item">
                    Restaurant:
                    <input onChange={this.handleChange} type="text" name="restaurant" value={this.state.restaurant}/>
                </label><br/>

                <label className="form-item">
                    Description:
                    <input onChange={this.handleChange} type="text" name="description" value={this.state.description}/>
                </label><br/>

                <label className="form-item">
                    Comment:
                    <input onChange={this.handleChange} type="text" name="comment" value={this.state.comment}/>
                </label><br/>
            
                <Link to={'/burger'}><button onClick={ this.submitHandler}>ADD</button></Link>
            </form>
        </div>
    )
    }
}

export default connect()(BurgerForm)