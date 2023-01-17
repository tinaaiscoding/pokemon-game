const pg = require('pg')

const db = new pg.Pool({
  database: 'pokedex',
  password: 'test'

})

module.exports = db
