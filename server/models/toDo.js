const mongoose = require('mongoose')

const toDoSchema = new mongoose.Schema({
  title: String,
  description: String,
  time: String,
  checked: Boolean,
  editable: Boolean
})

toDoSchema.virtual('id')
  .get(function () {
    return this._id.toHexString()
  })

toDoSchema.set('toJSON', {
  virtuals: true
})

const toDoItem = mongoose.model('toDoItem', toDoSchema)
module.exports = toDoItem