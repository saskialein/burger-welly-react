import request from 'superagent'

const burgerRoute = "/api/v1/burger";

export function retrieveBurgerAPI() {
  return request
    .get(burgerRoute)
    .then(res => res.body)
}

export function addBurgerAPI (newBurger) {
  return request
    .post(burgerRoute)
    .send(newBurger)
    .then(res => res.body)
}

export function deleteBurgerAPI(id) {
    return request
      .delete(`/api/v1/burger/${id}`)
      .then(res => res.body)
}

export function updateBurgerAPI (id, burger) {
      return request  
        .patch(`/api/v1/burger/${id}`)
        .send(burger)
        .then(res => res.body)
  }
