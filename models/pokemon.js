const db = require('../db/db')

const Pokemon = {
    findAll: () => {
        const sql = 'SELECT * FROM pokemons INNER JOIN mypokemons ON pokemons.name = mypokemons.name'
        
        return db
        .query(sql)
        .then(dbRes => dbRes.rows)
    },

    findById: (opponentId) => {
        const sql = 'SELECT * FROM pokemons WHERE id = $1'
  
        return db
        .query(sql, [opponentId])
        .then(dbRes => {
            console.log('OPPONENT DB DATA');
            console.log(dbRes.rows[0]);    
            return dbRes.rows[0]
        })
    }
}

module.exports = Pokemon