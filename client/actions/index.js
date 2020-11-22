import request from 'superagent'

export const GET_BURGERS = 'GET_BURGERS'
export const DEL_BURGER = 'DEL_BURGER'
export const ADD_BURGER = 'ADD_BURGER'

export const getBurgers = (burgers) => {
    return {
      type: GET_BURGERS,
      burgers: burgers
    }
  }
  
export const deleteBurger = (burgers) => {
  return {    
  type: DEL_BURGER,
  burgers: burgers
}
}

// gets burgers from backend db routes returns array of all burger objects
export function fetchBurgers () {
  return (dispatch) => {
    return request
    .get('/api/burger')
    .then(res => {
      dispatch(getBurgers(res.body))
    })
    .catch(err => {
      console.log(err)
    })
  }
}

export const addBurger = (burgers) => {
  return {
    type: ADD_BURGER,
    burgers: burgers
  }
}


export function addBurgerAPI (theState) {
  const newBurger = {
    name: theState.name,
    image_url: theState.image_url,
    restaurant: theState.restaurant,
    description: theState.description,
    comment: theState.comment  
  }
  return (dispatch) => {
    return request
      .post('/api/burger/new')
      .send(newBurger)
      .then((res) => {
        dispatch(addBurger(newBurger))
      })
}
}
// export function postBurger (newBurger) {
//   return (dispatch) => {
//     return request
//       .post('/api/burger/new')
//       .send(newBurger)
//       .then(() => {
//         dispatch(addBurger( newBurger ))
//       })
//   }
// }
