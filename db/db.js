const pg = require('pg')

const db = new pg.Pool({
  database: 'pokedex',
})

module.exports = db