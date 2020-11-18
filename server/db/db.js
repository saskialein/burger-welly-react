const connection = require('./connection')

function getBurgers(db = connection) { 
    return db('burger').select()
}


module.exports = {
    getBurgers
  }