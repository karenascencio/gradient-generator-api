const express = require('express')
const cors = require('cors');
const server = express()
const themesRouter = require('./routers/themes')

// Middleware
server.use(express.json());

server.use(cors({
    origin:'*'
}))

//Add routers
server.use('/themes', themesRouter)

module.exports = server