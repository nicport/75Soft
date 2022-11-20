// Import path module
const path = require('path')

// Get the location of database.sqlite file
const dbPath = path.resolve(__dirname, 'db/database.sqlite')

// Create connection to SQLite database
const knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: dbPath,
  },
  useNullAsDefault: true
})

// Create a table in the database called "tasks"
knex.schema
  // Check if table already exists
  .hasTable('tasks')
    .then((exists) => {
      if (!exists) {
        // If no "books" table exists
        // create new, with "id", "author", "title",
        // "pubDate" and "rating" columns
        // and use "id" as a primary identification
        // and increment "id" with every new record (book)
        return knex.schema.createTable('tasks', (table)  => {
          table.increments('id').primary()
          table.string('description')
        })
        .then(() => {
          // Log success message
          console.log('Table \'Tasks\' created')
        })
        .catch((error) => {
          console.error(`There was an error creating table: ${error}`)
        })
      }
    })
    .then(() => {
      // Log success message
      console.log('done')
    })
    .catch((error) => {
      console.error(`There was an error setting up the database: ${error}`)
    })

// Create a table in the database called "transactions"
knex.schema
  // Check if table already exists
  .hasTable('transactions')
    .then((exists) => {
      if (!exists) {
        // If no "transactions" table exists
        return knex.schema.createTable('transactions', (table)  => {
          table.increments('id').primary()
          table.string('user')
          table.string('task')
          table.integer('complete')
          table.timestamps(true, true)
        })
        .then(() => {
          // Log success message
          console.log('Table \'Transactions\' created')
        })
        .catch((error) => {
          console.error(`There was an error creating table: ${error}`)
        })
      }
    })
    .then(() => {
      // Log success message
      console.log('done')
    })
    .catch((error) => {
      console.error(`There was an error setting up the database: ${error}`)
    })

// Create a table in the database called "transactions"
knex.schema
  // Check if table already exists
  .hasTable('users')
    .then((exists) => {
      if (!exists) {
        // If no "user" table exists
        return knex.schema.createTable('users', (table)  => {
          table.increments('id').primary()
          table.string('username')
          table.string('password')
        })
        .then(() => {
          // Log success message
          console.log('Table \'Users\' created')
        })
        .catch((error) => {
          console.error(`There was an error creating table: ${error}`)
        })
      }
    })
    .then(() => {
      // Log success message
      console.log('done')
    })
    .catch((error) => {
      console.error(`There was an error setting up the database: ${error}`)
    })

// Just for debugging purposes:
// Log all data in "tasks" table
knex.select('*').from('tasks')
  .then(data => console.log('data:', data))
  .catch(err => console.log(err))

// Log all data in "tasks" table
knex.select('*').from('transactions')
  .then(data => console.log('data:', data))
  .catch(err => console.log(err))

// Log all data in "tasks" table
knex.select('*').from('users')
  .then(data => console.log('data:', data))
  .catch(err => console.log(err))

// Export the database
module.exports = knex