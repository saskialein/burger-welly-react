import request from 'superagent'

export const GET_BURGERS = 'GET_BURGERS'
// const burgerURL = 'http://localhost:3000/burger'

export const getBurgers = (burgers) => {
    return {
      type: GET_BURGERS,
      burgers: burgers
    }
  }
  
  
  // gets burgers from backend db routes returns array of all burger objects
  export function fetchBurgers () {
    return (dispatch) => {
      return request
        .get('/burger')
        .then(res => {
          dispatch(getBurgers(res.body))
        })
        .catch(err => {
          console.log(err)
        })
    }
  }

  // const burgerURL = 'http://localhost:3000/burger'

// export function getBurgers() {
//     return request
//       .get(burgerURL)
//         .then(res => res.body)
//   }