const db = require('../db/db')

const Pokemon = {
  findAllPokemon: () => {
    const sql = 'SELECT * FROM pokemons'

    return db
      .query(sql)
      .then(dbRes => dbRes.rows)
  },

  findAllMyPokemon: userId => {
    const sql = 'SELECT * FROM pokemons WHERE id = $1'

    return db
      .query(sql, [userId])
      .then(dbRes => {
        console.log('FROM DB');
        console.log(dbRes.rows);
        return dbRes.rows
      
      })
  },

  findById: (pokemonId) => {
    const sql = 'SELECT * FROM pokemons WHERE id = $1'

    return db
      .query(sql, [pokemonId])
      .then(dbRes =>{
        console.log('MODEL');
        console.log(dbRes);

        console.log('DB RESSSSS');
        console.log(dbRes.rows[0]);
        return dbRes.rows[0]})
  },

  findOppById: (opponentId) => {
      const sql = 'SELECT * FROM pokemons WHERE id = $1'
      return db
      .query(sql, [opponentId])
      .then(dbRes => dbRes.rows[0])
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
  },

  delete: pokemonId => {
    const sql = 'DELETE FROM mypokemons WHERE id = $1'

    return db
      .query(sql, [pokemonId])
  }
}

module.exports = Pokemon