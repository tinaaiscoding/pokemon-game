const db = require('../db/db');
const Pokemon = require('./pokemon');

const Starter_Pokemon = {
  findPokemon: (userId) => {
    const sql = 'SELECT * FROM pokemons WHERE id = $1';
    return db.query(sql, [userId]).then((dbRes) => {
      return dbRes.rows[0];
    });
  },

  addStarterPokemon: (userId, pokemonData) => {
    const sql = `
    INSERT INTO 
        pokemons(pokedex_number, name, img, hp, attack, defense, speed, moves, nickname, win_count, user_id) 
    VALUES 
        ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *`;

    return db
        .query(sql, [
            pokemonData.pokedex_number,
            pokemonData.name,
            pokemonData.img,
            pokemonData.hp,
            pokemonData.attack,
            pokemonData.defense,
            pokemonData.speed,
            pokemonData.moves,
            pokemonData.nickname,
            pokemonData.win_count,
            userId,
            ])
        .then(dbRes => dbRes.rows[0])
  },
};
module.exports = Starter_Pokemon;
