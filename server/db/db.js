const connection = require('./connection')

function getBurgers(db = connection) { 
    return db('burger').select()
}

// function getOneBurger(id, db = connection) {
//     return db('burger')
//         .select()
//         .where('id', id)
//         .first()
// }

function addBurger(newBurger, db = connection) {
    return db('burger').insert(newBurger)
}

function deleteBurger(id, db = connection) {
    return db('burger').delete().where('id', id)
}

module.exports = {
    getBurgers,
    addBurger,
    deleteBurger
  }