const express = require('express')
const path = require('path')

const app = express()

app.use(express.json())

app.use(express.static(path.join(__dirname, '../public')))

app.use('/api', require('./api'))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
}) // Send index.html for any other requests

app.use((req, res, next, error) => {
  res.status(err.status || 500).send(err.message || 'Internal server error')
})

module.exports = app
