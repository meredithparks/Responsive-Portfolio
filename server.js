'use strict'

// Server
require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const nodemailer = require('nodemailer')

// Environment
const ENV = process.env.NODE_ENV || 'development'
const PORT = process.env.PORT || 3000


const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))

app.use('/contact', contactRoutes)


// Catch-all route to 404
app.use((req, res) => {
    res.status(404).render('404')
  })
  
  // Persistent Listener
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}.`)
  })
  
  module.exports = app