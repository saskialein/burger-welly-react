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
            let newState = [...state]
            let updatedState = newState.find(burger => burger.id == action.id)
            updatedState.name = action.burger.name
            updatedState.restaurant = action.burger.restaurant
            updatedState.description = action.burger.description
            updatedState.comment = action.burger.comment
            return newState
            // return state.map(burger => {
            //     if (burger.id == action.id) {
            //         return action.burger
            //     }
            //     return burger
            // })
                        
            default: 
                return state
                    }
                }
        // case UPDATE_BURGER:
        //     newState = [...state]
        //     found = newState.find(burger => burger.id == action.id)
        //     found.name = action.name
        //     found.image_url = action.image_url
        //     found.restaurant = action.restaurant
        //     found.description = action.description
        //     found.comment = action.comment
        //     return newState

        // case UPDATE_BURGER:
        //     return state.map((burger) => {
        //         if (burger.id == action.id)
        //         {
        //           return action.burger 
        //         }
        //         else {
        //           return burger
        //         }
        //       })



export default reducer 