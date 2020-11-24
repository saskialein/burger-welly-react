const express = require('express')
const router = express.Router()

const db = require('../db/db.js')

//READ / GET LIST
router.get('/', (req, res) => {
  return db.getBurgers()
        .then((burger) => {
            res.json(burger)
        })
        .catch(err => {
          console.log('catch', err)
          res.status(500).json({ message: 'Something broke' })
      })
})

//CREATE
router.post('/', (req, res) => {
  const newBurger = req.body
  return db.addBurger(newBurger)
  .then(id => {
    res.json({id: id})
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({ message: 'You broke something' })
  })
}) 

//UPDATE
router.patch('/:id', (req, res) => {
  const id = req.params.id
  const updatedBurger = req.body
  return db.updateBurger(id, updatedBurger)
  // above line means I went to update pup by the id & updatedTask variables I've defined here
  .then( () => {
      res.json({})
      // sending back an empty body to the user as not really anything needed here for the user
  })
  .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Something broke' })
  })
})

//DELETE
router.delete('/:id', (req, res) => {
  const id = req.params.id
  return db.deleteBurger(id)
    .then(() => {
      res.json({})
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Something broke' })
  })
})
    
module.exports = router