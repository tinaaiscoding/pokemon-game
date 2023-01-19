const express = require('express')
const router = express.Router()
const Starter_Pokemon = require('../models/starter_pokemon')
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
  Starter_Pokemon
      .findAll(pokemonId)
      .then(pokemonData => insertPokemon(userId, pokemonData))
      .then(myPokemon => {
        // console.log(myPokemon)
      return res.json(myPokemon)
    })
  })
  module.exports = router