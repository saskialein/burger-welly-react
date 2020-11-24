const initialState = []
import { GET_BURGERS, DEL_BURGER, ADD_BURGER } from '../actions/index'

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_BURGERS:
            return action.burgers
            
        case ADD_BURGER:
            return [...state, action.burger]
                
        case DEL_BURGER:
            return state.filter((burger) => burger.id != action.id)
                    
        default: 
            return state
                }
            }



export default reducer 