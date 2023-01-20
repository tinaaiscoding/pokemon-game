const db = require('../db/db')

const Pokemon = {
  findAllPokemon: () => {
    const sql = 'SELECT * FROM pokemons'

    return db
      .query(sql)
      .then(dbRes => dbRes.rows)
  },

  findAllMyPokemon: userId => {
    const sql = `
        SELECT * FROM pokemons 
        WHERE user_id = $1 
        ORDER BY id
      `

    return db
      .query(sql, [userId])
      .then(dbRes => dbRes.rows)
  },

  findById: (pokemonId) => {
    const sql = 'SELECT * FROM pokemons WHERE id = $1'

    return db
      .query(sql, [pokemonId])
      .then(dbRes => dbRes.rows[0])
  },

  findOppById: (opponentId) => {
      const sql = 'SELECT * FROM pokemons WHERE id = $1'
      return db
      .query(sql, [opponentId])
      .then(dbRes => dbRes.rows[0])
  },

  edit: (userId, pokemonId, nickname) => {
    const sql = `UPDATE pokemons 
        SET nickname = $3
        WHERE user_id = $1 AND id = $2
        RETURNING *
      `
    return db
      .query(sql, [userId, pokemonId, nickname])
      .then(dbRes => dbRes.rows[0])
  },

  delete: pokemonId => {
    const sql = 'DELETE FROM pokemons WHERE id = $1'

    return db
      .query(sql, [pokemonId])
  }
}

module.exports = Pokemon