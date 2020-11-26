import React from 'react'
import { connect } from 'react-redux'
import {renewBurger} from '../actions/index'

class EditBurger extends React.Component {

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
          this.props.dispatch(
            renewBurger(this.state))
            this.setState({
            name: '',
            image_url: '',
            restaurant: '',
            description: '',
            comment: ''
            })
      }

    
    render() {
        const id = this.props.match.params.id
    
        return (
            <div className="main">
                {this.props.burgers.filter(burger => burger.id == id).map((burger) => {
                    return (
                        <div className="burger-card-view" key={burger.id}>
                            <form onSubmit={ this.submitHandler}>
  
                                <img className="img-circle" alt={burger.name} src={burger.image_url}/>
  
                                <br />

                                <label className="form-item">
                                    Name:
                                    <br />
                                    <input onChange={this.handleChange} type="text" name="name" placeholder={burger.name} value={this.state.name}/>
                                </label>

                                <br />

                                <label className="form-item">
                                    Restaurant:
                                    <br />
                                    <input onChange={this.handleChange} type="text" name="restaurant" placeholder={burger.restaurant} value={this.state.restaurant}/>
                                </label>
  
                                <br />

                                <label className="form-item">
                                    Description:
                                    <br />
                                    <input onChange={this.handleChange} type="text" name="description" placeholder={burger.description} value={this.state.description} />
                                </label>
  
                                <br />

                                <label className="form-item">
                                    Comment:
                                    <br />
                                    <input onChange={this.handleChange} type="text" name="comment" placeholder={burger.comment} value={this.state.comment}/>
                                </label><br />
  
                                <input type="submit" value="Submit" />
                            </form>
                        </div>
                    )
                }
                )}
            </div>
        )
      
    
    }
}


function mapStateToProps(globalState) {
    return {
      burgers: globalState.burgers
    }
  }
  
export default connect(mapStateToProps)(EditBurger)