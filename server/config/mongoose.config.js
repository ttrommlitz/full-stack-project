const mongoose = require('mongoose')
const {URI} = process.env
const url = URI || "mongodb://localhost/"

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology:true
})
  .then(() => console.info(`Established a connection to the database: ${url}`))
  .catch(err => console.info(`Something went wrong when connecting to the database: ${url}`, err))