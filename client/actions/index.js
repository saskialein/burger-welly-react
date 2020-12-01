import {addBurgerAPI, deleteBurgerAPI, retrieveBurgerAPI, updateBurgerAPI} from '../apis/api'

export const GET_BURGERS = 'GET_BURGERS'
export const ADD_BURGER = 'ADD_BURGER'
export const DEL_BURGER = 'DEL_BURGER'
export const UPDATE_BURGER = 'UPDATE_BURGER'

//GET
export const getBurgers = (burgers) => {
    return {
      type: GET_BURGERS,
      burgers
    }
  }
  
  // gets burgers from backend db routes returns array of all burger objects
  export function fetchBurgers () {
    return (dispatch) => {
      return retrieveBurgerAPI()
      .then(burgers => {
        dispatch(getBurgers(burgers))
      })
    }
  }
  
  //ADD
  export const addBurger = (newBurger) => {
    return {
      type: ADD_BURGER,
      burger: newBurger
    }
  }
  
  export function saveBurger (newBurger) {
    return (dispatch) => {
      addBurgerAPI(newBurger)
        .then((idObj) => {
          const id = idObj.id
          newBurger.id = id

        dispatch(addBurger(newBurger))
      })
    }
  }

//DELETE
export const deleteBurger = (id) => {
  return {    
  type: DEL_BURGER,
  id: id
  }
}

export function removeBurger(id){
  return (dispatch) => {
    deleteBurgerAPI(id)
    .then(() => dispatch(deleteBurger(id)))
  } 
}

//UPDATE
export const editBurger = (id, updatedBurger) => {
  return {
    type: UPDATE_BURGER,
    id: id,
    burger: updatedBurger
  }
}

export function updateBurger (id, updatedBurger) {
  return (dispatch) => {
    updateBurgerAPI(id, updatedBurger)
      .then(() => {
        dispatch(editBurger(id, updatedBurger))
      })
  }
}