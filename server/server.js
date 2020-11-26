const path = require('path')

const cors = require('cors')
const express = require('express')

const burger = require('./routes/burger')

const server = express()

server.use(express.json())
server.use('/api/v1/burger', burger)
// server.use(cors({origin: 'http://localhost:8080'}))
server.use(express.static(path.join(__dirname, './public')))

server.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'))
})
  

module.exports = server
