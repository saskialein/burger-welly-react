import request from 'superagent'

export function deleteBurgerAPI(burger) {
    return request
      .delete('/api/burger/delete/:id')
      .send(burger)
      .then(response => response.body)
}

  