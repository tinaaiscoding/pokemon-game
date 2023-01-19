const express = require('express')
const router = express.Router()

// MODELS
const Starter_Pokemon = require('../models/starter_pokemon.js')
// router.get('/', (req, res) => {
//   Pokemon
//     .findAll()
//     .then(myPokemon => {
//       console.log(myPokemon)
//     return res.json(myPokemon)
//   })
// })
router.get('/add/:userId/:pokemonId', (req, res) => {
  const userId = req.params.userId
  const pokemonId = req.params.pokemonId
console.log('ROUTE');
  console.log(userId);
  console.log(pokemonId);

  Starter_Pokemon
      .findPokemon(pokemonId)
      .then(pokemonData => insertPokemon(userId,pokemonData))
      .then(myPokemon => {
        console.log(myPokemon)
      return res.json(myPokemon)
    })
  })

  module.exports = router