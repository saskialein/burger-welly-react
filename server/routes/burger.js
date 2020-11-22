const express = require('express')
const router = express.Router()

const db = require('../db/db.js')

router.get('/', (req, res) => {
  return db.getBurgers()
        .then((burger) => {
            res.json(burger)
    })
})

router.post('/new', (req, res) => {
  const newBurger = req.body
  return db.addBurger(newBurger)
  .then(newBurger => {
    res.json(newBurger)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({ message: 'You broke something' })
  })
}) 

router.delete('/delete/:id', (req, res) => {
  const id = req.params.id
  return db.deleteBurger(id)
      .then(res.json({}))
})
    
module.exports = router