const db = require('../db/db')

const Pokemon = {
    insertBulbasaur: () => {
        const sql = `INSERT INTO pokemons (pokedex_number, name, img, hp, attack, defense, speed, moves, nickname, win_count, user_id) VALUES (1, 'bulbasaur', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png', 45, 49, 49, 45, ARRAY['razor-wind', 'swords-dance', 'cut', 'bind'], 'bulbasaur', 0, 1) RETURNING *`
        
        return db
        .query(sql)
        .then(dbRes => {
            console.log("HELLO")
           return dbRes.rows[0]
        })
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