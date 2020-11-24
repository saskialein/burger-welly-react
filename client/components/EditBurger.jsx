import React from 'react'
import { connect } from 'react-redux'

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
              saveBurger(this.state))
            this.setState({
            name: '',
            image_url: '',
            restaurant: '',
            description: '',
            comment: ''
            })
            this.props.history.push('/burger')
      }

    
    render() {
        const id = this.props.match.params.id
    
        return (
            <div className="main">
                {this.props.burgers.filter(burger => burger.id == id).map((burger) => {
                    return (
                        <div className="burger-card-view" key={burger.id}>
                            <form onSubmit={this.submitHandler}>
  
                                <img className="img-circle" src={burger.image_url} alt={burger.name} />
  
                                <br />

                                <label className="form-item">
                                    Name:
                                    <br />
                                    <input onChange={this.handleChange} type="text" name="name" value={burger.name} />
                                </label>

                                <br />

                                <label className="form-item">
                                    Restaurant:
                                    <br />
                                    <input onChange={this.handleChange} type="text" name="restaurant" value={burger.restaurant} />
                                </label>
  
                                <br />

                                <label className="form-item">
                                    Description:
                                    <br />
                                    <input onChange={this.handleChange} type="text" name="description" value={burger.description} />
                                </label>
  
                                <br />

                                <label className="form-item">
                                    Comment:
                                    <br />
                                    <input onChange={this.handleChange} type="text" name="comment" value={burger.comment} />
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