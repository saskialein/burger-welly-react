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
            found = [...state].find(burger => burger.id == action.id)
            burger = action.burger
            return state
            // return state.map((wombat) => {
          
  
            //     if (wombat == action.currentWombat)
            //     {
            //       return action.newWombat 
            //     }
            //     else {
            //       return wombat
            //     }
            //   })
                    
        default: 
            return state
                }
            }



export default reducer 