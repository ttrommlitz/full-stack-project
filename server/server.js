const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const middleware = require('./routes')
const port = process.env.PORT || 3001
const app = express()

// This will fire our mongoose.connect statement to initialize our database connection
require('./config/mongoose.config')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}))

// parse application/json
app.use(bodyParser.json())

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET', 'POST', 'PUT', 'DELETE', 'OPTIONS')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'DELETE', 'PUT']
}))

// CRUD endpoints
app.use('/api', middleware)

app.listen(port, () => console.info(`Server listening on port ${port}!`))

module.exports = app
