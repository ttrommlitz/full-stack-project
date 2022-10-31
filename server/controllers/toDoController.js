const toDoItem = require('../models/toDo')

const blogCreate = async (req, res) => {
  const toDoitem = new toDoItem({
    title: req.body.title,
    description: req.body.description,
    time: '',
    checked: false,
    editable: false
  })
  try {
    await toDoitem.save()
    console.info('posted to mongo!')
  } catch (error) {
    console.error(error)
  }
  res.sendStatus(200)
}

const blogRead = async (req, res) => {
  console.info('pulled from mongo!')
  try {
    const theItems = await toDoItem.find()
    res.send(theItems)
  } catch (error) {
    console.error(error)
  }
}

const blogUpdate = async (req, res) => {
  try {
    await toDoItem.updateOne({ _id: req.params.id }, req.body)
  } catch (error) {
    console.error(error)
  }
  console.info('update mongo!')
  res.sendStatus(200)
}

const blogDelete = async (req, res) => {
  try {
    await toDoItem.deleteOne({
      _id: req.params.id
    })
    console.info('deleted from mongo!')
    res.sendStatus(200)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
}

module.exports = {
  blogCreate,
  blogRead,
  blogUpdate,
  blogDelete
}
