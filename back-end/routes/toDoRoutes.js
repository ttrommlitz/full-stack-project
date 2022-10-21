const express = require('express')
const toDoController = require('../controllers/toDoController')
const router = express.Router()

router.post('/', toDoController.blog_create)
router.get('/', toDoController.blog_read)
router.put('/:id', toDoController.blog_update)
router.delete('/:id', toDoController.blog_delete)

module.exports = router