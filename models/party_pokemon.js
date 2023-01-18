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
      .then(dbRes => {
        dbRes.rows
        console.log(dbRes.rows)
      })
    // need to check once pokemon party page is loading. 
  },

  edit: (pokemonId, nickname) => {
    const sql = `UPDATE mypokemons 
        SET nickname = $2
        WHERE id = $1
        RETURNING *
      `
    return db
      .query(sql, [pokemonId, nickname])
      .then(dbRes => dbRes.rows[0])
  }
      return db
    .query(sql, [pokemonId])
    .then(dbRes => dbRes.rows[0])
  // need to check once pokemon party page is loading. 
},

delete: pokemonId => {
  const sql = 'DELETE FROM mypokemons WHERE id = $1'

  return db.query(sql, [pokemonId])
}
}


module.exports = Party_Pokemon