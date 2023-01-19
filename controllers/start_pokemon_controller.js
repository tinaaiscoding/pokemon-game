const express = require('express')
const { insertPokemon } = require('../models/pokemon')
const router = express.Router()
const Pokemon = require('../models/pokemon')
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
    Pokemon
      .findAll(pokemonId)
      .then(pokemonData => insertPokemon(userId, pokemonData))
      .then(myPokemon => {
        // console.log(myPokemon)
      return res.json(myPokemon)
    })
  })
  module.exports = router