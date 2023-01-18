const db = require('../db/db')

const Party_Pokemon = {
    findAll: () => {
        const sql = 'SELECT * FROM pokemons INNER JOIN mypokemons ON pokemons.name = mypokemons.name'

        return db
            .query(sql)
            .then(dbRes => dbRes.rows)
    },

    findById: (pokemonId) => {
      const sql = 'SELECT * FROM pokemons WHERE id = $1'

      return db
        .query(sql, [pokemonId])
        .then(dbRes => dbRes.rows[0])
          // need to check once pokemon party page is loading. 
    }
}


module.exports = Party_Pokemon