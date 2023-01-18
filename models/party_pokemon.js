const db = require('../db/db')

const Party_Pokemon = {
    findAll: () => {
        const sql = 'SELECT * FROM pokemons INNER JOIN mypokemons ON pokemons.name = mypokemons.name'

        return db
            .query(sql)
            .then(dbRes => dbRes.rows)
    }
}

module.exports = Party_Pokemon