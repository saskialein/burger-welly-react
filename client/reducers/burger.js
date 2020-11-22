const initialState = []
import { GET_BURGERS, DEL_BURGER, ADD_BURGER } from '../actions/index'

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_BURGERS:
            return action.burgers
        default: 
            return state
        
        case DEL_BURGER:
            return state.filter((burgers) => burgers !== action.burgers)
        
        case ADD_BURGER:
            return [...state, action.burgers]
    }
}



export default reducer 