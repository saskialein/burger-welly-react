const path = require('path')

const cors = require('cors')
const express = require('express')

const burger = require('./routes/burger')

const server = express()

server.use(express.json())
server.use(cors({origin: 'http://localhost:8080'}))
server.use(express.static(path.join(__dirname, './public')))

server.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
  })

server.use('/api/v1/burger', burger)

module.exports = server
