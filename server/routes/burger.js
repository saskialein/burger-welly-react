const express = require('express')
const router = express.Router()

const db = require('../db/db.js')

router.get('/', (req, res) => {
    db.getBurgers()
        .then(() => {
            res.json('burger')
    })
})

module.exports = router