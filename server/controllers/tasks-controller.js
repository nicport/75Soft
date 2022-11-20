// Import database
const knex = require('./../db')

// retrieve all tasks
exports.tasksAll = async (req, res) => {
  // get all tasks from the database
  knex
    .select('*')
    .from('tasks')
    .then(taskData => {
      res.json(taskData)
    })
    .catch(err => {
      res.json({ message: `There was an error retrieving tasks: ${err}` })
    })
}

// create a new task
exports.taskCreate = async (req, res) => {
  knex('tasks')
    .insert({
      'description': req.body.description
    })
    .then(() => {
      res.json({ message: `Task \'${req.body.description}\' created` })
    })
    .catch(err => {
      res.json({ message: `There was an error creating ${req.body.description}` })
    })
}

// delete a task
exports.taskDelete = async (req, res) => {
  const id = req.params.id;

  knex('tasks')
    .where('id', id)
    .del()
    .then(() => {
      res.json({ message: `Task with id: \'${id}\' deleted` })
    })
    .catch(err => {
      res.json({ message: `There was an error deleting task with id: ${id}` })
    })
}