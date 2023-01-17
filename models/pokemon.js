const db = require('../db/db')

const Pokemon = {
    findAll: () => {
        const sql = 'SELECT * FROM pokemons'
        
        return db
        .query(sql)
        .then(dbRes => dbRes.rows)
    }
}

module.exports = Pokemon