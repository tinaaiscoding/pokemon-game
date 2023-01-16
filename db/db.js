const pg = require('pg');

const localDbName = 'pokedex'


    const db = new pg.Pool({
      database: 'pokedex',
    })


module.exports = db;
