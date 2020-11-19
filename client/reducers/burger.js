const initialState = []
import { GET_BURGERS } from '../actions/index'

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_BURGERS:
            return action.burgers
        default: 
            return state
    }
}

export default reducer 