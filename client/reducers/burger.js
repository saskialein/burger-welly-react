const initialState = []
import { GET_BURGERS, DEL_BURGER, ADD_BURGER, UPDATE_BURGER } from '../actions/index'

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_BURGERS:
            return action.burgers
            
        case ADD_BURGER:
            return [...state, action.burger]
                
        case DEL_BURGER:
            return state.filter((burger) => burger.id != action.id)
        
        case UPDATE_BURGER:
            newState = [...state]
            found = newState.find(burger => burger.id == action.id)
            found.name = action.name
            found.image_url = action.image_url
            found.restaurant = action.restaurant
            found.description = action.description
            found.comment = action.comment
            return newState
                    
        default: 
            return state
                }
            }



export default reducer 