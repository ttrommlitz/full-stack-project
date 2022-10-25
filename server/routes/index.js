const express = require('express')
const toDoController = require('../controllers/toDoController')
const router = express.Router()

router.post('/create', toDoController.blogCreate)
router.get('/', toDoController.blogRead)
router.put('/update/:id', toDoController.blogUpdate)
router.delete('/delete/:id', toDoController.blogDelete)

module.exports = router
