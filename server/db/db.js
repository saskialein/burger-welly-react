const connection = require('./connection')

//GET ALL BURGERS
function getBurgers(db = connection) { 
    return db('burger').select()
}

// function getOneBurger(id, db = connection) {
//     return db('burger')
//         .select()
//         .where('id', id)
//         .first()
// }

//CREATE NEW BURGER
function addBurger(newBurger, db = connection) {
    return db('burger').insert(newBurger).then(ids => ids[0])
}

//UPDATE BURGER
function updateBurger(id, updatedBurger, db = connection) {
    return db('burger').update(updatedBurger).where('id', id)
}


//DELETE BURGER
function deleteBurger(id, db = connection) {
    return db('burger').delete().where('id', id)
}

module.exports = {
    getBurgers,
    addBurger,
    updateBurger,
    deleteBurger
  }