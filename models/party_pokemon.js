const db = require('../db/db')

const Party_Pokemon = {
    findAll: () => {
        const sql = 'SELECT * FROM mypokemons'

        return db
            .query(sql)
            .then(dbRes => dbRes.rows)
    }
}

module.exports = Party_Pokemon