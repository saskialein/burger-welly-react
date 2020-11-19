const express = require('express')
const router = express.Router()

const db = require('../db/db.js')

router.get('/', (req, res) => {
  return db.getBurgers()
        .then((burger) => {
            res.json(burger)
    })
})

module.exports = router