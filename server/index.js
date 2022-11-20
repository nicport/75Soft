const express = require("express");
const bodyParser = require('body-parser')
const cors = require('cors')

// Import routes
const tasksRouter = require('./routes/tasks-route')
const transactionsRouter = require('./routes/transactions-route')

const PORT = process.env.PORT || 3001;

const app = express();

// Apply middleware
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(tasksRouter)
app.use(transactionsRouter)

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
})