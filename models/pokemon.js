const db = require('../db/db')

const Pokemon = {
    insertBulbasaur: () => {
        const sql = `INSERT INTO mypokemons (name, nickname, win_counts) VALUES ('bulbasaur', 'bulbasaur', 0)`
        
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