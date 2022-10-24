const express = require('express')
const toDoController = require('../controllers/toDoController')
const router = express.Router()

router.post('/create', toDoController.blog_create)
router.get('/', toDoController.blog_read)
router.put('/update/:id', toDoController.blog_update)
router.delete('/delete/:id', toDoController.blog_delete)

module.exports = router