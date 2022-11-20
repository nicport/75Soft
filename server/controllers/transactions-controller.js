// Import database
const knex = require('./../db')

// retrieve all transactions
exports.transactionsAll = async (req, res) => {
  // get all tasks from the database
  knex
    .select('*')
    .from('transactions')
    .then(taskData => {
      res.json(taskData)
    })
    .catch(err => {
      res.json({ message: `There was an error retrieving tasks: ${err}` })
    })
}

// create a new task
exports.transactionCreate = async (req, res) => {
  knex('transactions')
    .insert({
      'user': req.body.user,
      'task': req.body.task,
      'complete': req.body.complete
    })
    .then(() => {
      res.json({ message: `Transaction \'${req.body.task}\' for user \'${req.body.user}'\ created` })
    })
    .catch(err => {
      res.json({ message: `There was an error creating ${req.body.task} transaction` })
    })
}