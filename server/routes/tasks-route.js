// Import express
const express = require('express')

// import tasks controller
const tasksController = require('./../controllers/tasks-controller.js')

const router = express.Router()

router.get('/tasks', tasksController.tasksAll)

router.post('/tasks', tasksController.taskCreate)

router.delete('/tasks/:id', tasksController.taskDelete)

module.exports = router;