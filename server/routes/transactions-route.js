// Import express
const express = require('express')

// import tasks controller
const tasksController = require('./../controllers/transactions-controller.js')

const router = express.Router()

router.get('/transactions', tasksController.transactionsAll)

router.post('/transactions', tasksController.transactionCreate)

module.exports = router;