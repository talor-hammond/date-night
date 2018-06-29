const path = require('path')
const express = require('express')

// Initialising server-object
const server = express()

// Middleware
server.use(express.static(path.join(__dirname, 'public')))

module.exports = server
